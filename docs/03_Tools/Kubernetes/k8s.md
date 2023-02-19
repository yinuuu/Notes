# 相关资料

kubeadm ：https://www.jianshu.com/p/1e65610dd223

docker hub:  https://hub.docker.com/

k8s的一些版本依赖:

https://kubernetes.io/zh/docs/setup/release/version-skew-policy/

​		

# 安装

## 系统

​	centos 7.6

​	https://www.jianshu.com/p/1e65610dd223



## docker安装

### 参考资料

https://docs.docker.com/engine/install/centos/

https://blog.51cto.com/3241766/2405624





### 安装依赖包

```bash
yum install -y yum-utils   device-mapper-persistent-data   lvm2
```

> yum-utils 提供了 yum-config-manager ，并且 device mapper 存储驱动程序需要 device-mapper-persistent-data 和 lvm2。
>
> device mapper
> Device Mapper 是 Linux2.6 内核中支持逻辑卷管理的通用设备映射机制，它为实现用于存储资源管理的块设备驱动提供了一个高度模块化的内核架构。
>
> LVM
> LVM（Logical Volume Manager）逻辑卷管理。
>
> 它是对磁盘分区进行管理的一种机制，建立在硬盘和分区之上的一个逻辑层，用来提高磁盘管理的灵活性。通过LVM可将若干个磁盘分区连接为一个整块的卷组(Volume Group)，形成一个存储池。可以在卷组上随意创建逻辑卷(Logical Volumes)，并进一步在逻辑卷上创建文件系统，与直接使用物理存储在管理上相比，提供了更好灵活性。
>
> device-mapper-persistent-data 和 lvm2
> 两者都是Device Mapper所需要的。

### 设置Docker源

```bash
yum-config-manager     --add-repo     https://download.docker.com/linux/centos/docker-ce.repo
```

###  docker安装版本查看

```bash
yum list docker-ce --showduplicates | sort -r
```

###  安装docker

指定版本

```bash
 yum install docker-ce-18.09.6 docker-ce-cli-18.09.6 containerd.io
```

安装最新版本

```
yum install docker-ce
```

### 启动docker

```bash
systemctl start docker
systemctl enable docker
```

### 修改docker镜像仓库

查看：docker info|grep Registry

https://www.runoob.com/docker/docker-mirror-acceleration.html	

```bash
mkdir -p /etc/docker
#修改cgroup驱动为systemd[k8s官方推荐]、限制容器日志量、修改存储类型，最后的docker家目录可修改
cat > /etc/docker/daemon.json <<EOF
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ],
  "registry-mirrors": ["https://7uuu3esz.mirror.aliyuncs.com"],
  "data-root": "/data/docker"
}
EOF
#添加开机自启，立即启动
systemctl enable --now docker
systemctl daemon-reload
systemctl restart docker
```

## k8s单机安装

https://www.jianshu.com/p/0ef60c7172b5

###  添加kubernetes源 

```ruby
cat > /etc/yum.repos.d/kubernetes.repo <<EOF
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
#重建yum缓存，输入y添加证书认证
yum makecache fast
```

###  查看安装版本 

```cpp
yum list |grep kubelet
yum list |grep kubeadm
yum list |grep kubectl
yum list kubelet *--showduplicates | sort -r* 
```



卸载

yum remove kubelet

yum remove kubeadm

yum remove kubectl



### 安装kubeadm、kubelet、kubectl 

```bash
yum install -y kubelet-1.19.0-0 --disableexcludes=kubernetes
yum install -y kubeadm-1.19.0-0 --disableexcludes=kubernetes
yum install -y kubectl-1.19.0-0 --disableexcludes=kubernetes
systemctl enable --now kubelet
```

###  配置自动补全命令 

```ruby
#安装bash自动补全插件
yum install bash-completion -y
#设置kubectl与kubeadm命令补全，下次login生效
kubectl completion bash > /etc/bash_completion.d/kubectl
kubeadm completion bash > /etc/bash_completion.d/kubeadm
```

###  查看kubernetes镜像依赖 

```bash
kubeadm config images list --kubernetes-version v1.19.0
```

### 新建 get-k8s-images.sh

```bash
#!/bin/bash
# Script For Quick Pull K8S Docker Images
# by qiraosky <qiraosky@qq.com>

#没有1.20.4得镜像，所以装1.19.0
KUBE_VERSION=v1.19.0
PAUSE_VERSION=3.2
CORE_DNS_VERSION=1.7.0
ETCD_VERSION=3.4.9-1

# pull kubernetes images from hub.docker.com
docker pull kubesphere/kube-proxy-amd64:$KUBE_VERSION
docker pull kubesphere/kube-controller-manager-amd64:$KUBE_VERSION
docker pull kubesphere/kube-apiserver-amd64:$KUBE_VERSION
docker pull kubesphere/kube-scheduler-amd64:$KUBE_VERSION
# pull aliyuncs mirror docker images
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/pause:$PAUSE_VERSION
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:$CORE_DNS_VERSION
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:$ETCD_VERSION
docker pull quay.io/coreos/flannel:v0.12.0-arm64
docker pull quay.io/coreos/flannel:v0.12.0-amd64

# retag to k8s.gcr.io prefix
docker tag kubesphere/kube-proxy-amd64:$KUBE_VERSION  k8s.gcr.io/kube-proxy:$KUBE_VERSION
docker tag kubesphere/kube-controller-manager-amd64:$KUBE_VERSION k8s.gcr.io/kube-controller-manager:$KUBE_VERSION
docker tag kubesphere/kube-apiserver-amd64:$KUBE_VERSION k8s.gcr.io/kube-apiserver:$KUBE_VERSION
docker tag kubesphere/kube-scheduler-amd64:$KUBE_VERSION k8s.gcr.io/kube-scheduler:$KUBE_VERSION
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/pause:$PAUSE_VERSION k8s.gcr.io/pause:$PAUSE_VERSION
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:$CORE_DNS_VERSION k8s.gcr.io/coredns:$CORE_DNS_VERSION
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:$ETCD_VERSION k8s.gcr.io/etcd:$ETCD_VERSION

# untag origin tag, the images won't be delete.
docker rmi kubesphere/kube-proxy-amd64:$KUBE_VERSION
docker rmi kubesphere/kube-controller-manager-amd64:$KUBE_VERSION
docker rmi kubesphere/kube-apiserver-amd64:$KUBE_VERSION
docker rmi kubesphere/kube-scheduler-amd64:$KUBE_VERSION
docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/pause:$PAUSE_VERSION
docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:$CORE_DNS_VERSION
docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:$ETCD_VERSION
```



### 初始化kube-master

 修改kubelet配置默认cgroup driver 

```ruby
mkdir -p /var/lib/kubelet/
cat > /var/lib/kubelet/config.yaml <<EOF
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
cgroupDriver: systemd
EOF
systemctl restart kubelet
```



###  测试环境是否正常

```kotlin
kubeadm init phase preflight
```

（WARNING是正常的） 

其实也可以手动执行命令，讲依赖的镜像都拉下来先：

 kubeadm config images pull 

这里是最麻烦得，可能因为网络原因拉不下来，所以考虑从阿里云拉下来，然后重新打tag



###  初始化k8s init 

​	kubeadm init --pod-network-cidr=10.244.0.0/16 --kubernetes-version=v1.19.0

```
[root@localhost ~]# kubeadm init --pod-network-cidr=10.244.0.0/16 --kubernetes-version=v1.19.0
W0314 10:10:40.638775    5741 configset.go:348] WARNING: kubeadm cannot validate component configs for API groups [kubelet.config.k8s.io kubeproxy.config.k8s.io]
[init] Using Kubernetes version: v1.19.0
[preflight] Running pre-flight checks
        [WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". Please follow the guide at https://kubernetes.io/docs/setup/cri/
        [WARNING SystemVerification]: this Docker version is not on the list of validated versions: 20.10.5. Latest validated version: 19.03
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local localhost.localdomain] and IPs [10.96.0.1 172.16.11.251]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [localhost localhost.localdomain] and IPs [172.16.11.251 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [localhost localhost.localdomain] and IPs [172.16.11.251 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Starting the kubelet
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 14.502735 seconds
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config-1.19" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Skipping phase. Please see --upload-certs
[mark-control-plane] Marking the node localhost.localdomain as control-plane by adding the label "node-role.kubernetes.io/master=''"
[mark-control-plane] Marking the node localhost.localdomain as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]
[bootstrap-token] Using token: mobxtr.i1vybgejaili60t7
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to get nodes
[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 172.16.11.251:6443 --token mobxtr.i1vybgejaili60t7 \
    --discovery-token-ca-cert-hash sha256:38543ff152bae1e5fe09da1fe51988e93c8221e43784194dfe052c3b9092850d 
[root@localhost ~]# 
```



可以看待kube 启动了部分进程

```
[root@localhost ~]# ps -ef|grep kube
root      7304  7189  5 10:10 ?        00:00:04 etcd --advertise-client-urls=https://172.16.11.251:2379 --cert-file=/etc/kubernetes/pki/etcd/server.crt --client-cert-auth=true --data-dir=/var/lib/etcd --initial-advertise-peer-urls=https://172.16.11.251:2380 --initial-cluster=localhost.localdomain=https://172.16.11.251:2380 --key-file=/etc/kubernetes/pki/etcd/server.key --listen-client-urls=https://127.0.0.1:2379,https://172.16.11.251:2379 --listen-metrics-urls=http://127.0.0.1:2381 --listen-peer-urls=https://172.16.11.251:2380 --name=localhost.localdomain --peer-cert-file=/etc/kubernetes/pki/etcd/peer.crt --peer-client-cert-auth=true --peer-key-file=/etc/kubernetes/pki/etcd/peer.key --peer-trusted-ca-file=/etc/kubernetes/pki/etcd/ca.crt --snapshot-count=10000 --trusted-ca-file=/etc/kubernetes/pki/etcd/ca.crt
root      7305  7196  2 10:10 ?        00:00:02 kube-scheduler --authentication-kubeconfig=/etc/kubernetes/scheduler.conf --authorization-kubeconfig=/etc/kubernetes/scheduler.conf --bind-address=127.0.0.1 -kubeconfig=/etc/kubernetes/scheduler.conf --leader-elect=true --port=0
root      7312  7194 18 10:10 ?        00:00:14 kube-apiserver --advertise-address=172.16.11.251 --allow-privileged=true --authorization-mode=Node,RBAC --client-ca-file=/etc/kubernetes/pki/ca.crt --enable-admission-plugins=NodeRestriction --enable-bootstrap-token-auth=true --etcd-cafile=/etc/kubernetes/pki/etcd/ca.crt --etcd-certfile=/etc/kubernetes/pki/apiserver-etcd-client.crt --etcd-keyfile=/etc/kubernetes/pki/apiserver-etcd-client.key --etcd-servers=https://127.0.0.1:2379 --insecure-port=0 --kubelet-client-certificate=/etc/kubernetes/pki/apiserver-kubelet-client.crt --kubelet-client-key=/etc/kubernetes/pki/apiserver-kubelet-client.key --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname --proxy-client-cert-file=/etc/kubernetes/pki/front-proxy-client.crt --proxy-client-key-file=/etc/kubernetes/pki/front-proxy-client.key --requestheader-allowed-names=front-proxy-client --requestheader-client-ca-file=/etc/kubernetes/pki/front-proxy-ca.crt --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-group-headers=X-Remote-Group --requestheader-username-headers=X-Remote-User --secure-port=6443 --service-account-key-file=/etc/kubernetes/pki/sa.pub --service-cluster-ip-range=10.96.0.0/12 --tls-cert-file=/etc/kubernetes/pki/apiserver.crt --tls-private-key-file=/etc/kubernetes/pki/apiserver.key
root      7316  7190  5 10:10 ?        00:00:04 kube-controller-manager --allocate-node-cidrs=true --authentication-kubeconfig=/etc/kubernetes/controller-manager.conf --authorization-kubeconfig=/etc/kubernetes/controller-manager.conf --bind-address=127.0.0.1 --client-ca-file=/etc/kubernetes/pki/ca.crt --cluster-cidr=10.244.0.0/16 --cluster-name=kubernetes --cluster-signing-cert-file=/etc/kubernetes/pki/ca.crt --cluster-signing-key-file=/etc/kubernetes/pki/ca.key --controllers=*,bootstrapsigner,tokencleaner --kubeconfig=/etc/kubernetes/controller-manager.conf --leader-elect=true --node-cidr-mask-size=24 --port=0 --requestheader-client-ca-file=/etc/kubernetes/pki/front-proxy-ca.crt --root-ca-file=/etc/kubernetes/pki/ca.crt --service-account-private-key-file=/etc/kubernetes/pki/sa.key --service-cluster-ip-range=10.96.0.0/12 --use-service-account-credentials=true
root      8102     1  4 10:11 ?        00:00:03 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml --network-plugin=cni --pod-infra-container-image=k8s.gcr.io/pause:3.2
root      8575  8540  0 10:11 ?        00:00:00 /usr/local/bin/kube-proxy --config=/var/lib/kube-proxy/config.conf --hostname-override=localhost.localdomain


```

###  配置master认证 

```bash
echo 'export KUBECONFIG=/etc/kubernetes/admin.conf' >> /etc/profile
source /etc/profile
```

###  安装网络组件flannel 

```bash
# 注意这里下载kubectl apply -f kube-flannel.yaml需要科学上网
wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml 
kubectl apply -f kube-flannel.yaml

[root@localhost k8s]# kubectl apply -f kube-flannel.yml 
podsecuritypolicy.policy/psp.flannel.unprivileged created
clusterrole.rbac.authorization.k8s.io/flannel created
clusterrolebinding.rbac.authorization.k8s.io/flannel created
serviceaccount/flannel created
configmap/kube-flannel-cfg created
daemonset.apps/kube-flannel-ds created
```

###  查看kube-master节点状态 

```csharp
kubectl get nodes

[root@localhost k8s]# kubectl get nodes
NAME                    STATUS     ROLES    AGE   VERSION
localhost.localdomain   NotReady   master   17m   v1.19.0
```

### 查看所有pod 状态 

 如果长时间达不到 ready 可以

```csharp
kubectl get pods --all-namespaces

[root@localhost k8s]# kubectl get pods --all-namespaces
NAMESPACE     NAME                                            READY   STATUS    RESTARTS   AGE
kube-system   coredns-f9fd979d6-4v47g                         0/1     Running   0          17m
kube-system   coredns-f9fd979d6-w6js5                         0/1     Running   0          17m
kube-system   etcd-localhost.localdomain                      1/1     Running   0          17m
kube-system   kube-apiserver-localhost.localdomain            1/1     Running   0          17m
kube-system   kube-controller-manager-localhost.localdomain   1/1     Running   0          17m
kube-system   kube-flannel-ds-jz75j                           1/1     Running   0          42s
kube-system   kube-proxy-l5h2r                                1/1     Running   0          17m
kube-system   kube-scheduler-localhost.localdomain            1/1     Running   0          17m
```

 如果有pod有异常，可以查看描述以解决异常 

```objectivec
kubectl -n kube-system describe  pod-id
```

###  将Pod调度到Master节点（单机运行K8S）

​	出于安全考虑，默认配置下Kubernetes不会将Pod调度到Master节点。如果希望将k8s-master也当作Node使用，可以执行如下命令：

```undefined
kubectl taint node k8s-master node-role.kubernetes.io/master-
```

 其中k8s-master是主机节点hostname如果要恢复Master Only状态，执行如下命令： 

```bash
kubectl taint node k8s-master node-role.kubernetes.io/master=""
```



## Hello World

#### 运行hello world

```
kubectl run hello-world --replicas=5 --labels="run=load-balancer-example" --image=gcr.io/google-samples/node-hello:1.0  --port=8080

[root@localhost ~]# kubectl run hello-world --replicas=5 --labels="run=load-balancer-example" --image=gcr.io/google-samples/node-hello:1.0  --port=8080
Flag --replicas has been deprecated, has no effect and will be removed in the future.
pod/hello-world created
```

 **kubectl describe pod** 

## 常用命令

#### 关闭k8s

service kubelet stop

 彻底关闭用 systemctl disable kubelet 

# 常见问题

## swap 需要关闭或者k8s忽略swap

[ERROR Swap]: running with swap on is not supported. Please disable swap

系统命令关闭 ：swapoff  -a;  free 查看 ，swap为0



## k8s 版本的问题

[root@localhost sysconfig]# kubelet --version
Kubernetes v1.20.4

由于默认安装kubelet 命令的时候的时候版本是1.20.4，但是init过程中又拉不到v1.20.4的镜像，需要版本保持一致



## 镜像下载不下来的问题

        [ERROR ImagePull]: failed to pull image k8s.gcr.io/kube-apiserver:v1.19.8: output: Error response from daemon: Get https://k8s.gcr.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)

由于没有科学上网，所以 k8s.gcr.io 是无法访问的。所以要手动处理：

docker search kube-apiserver



#换可以拉的源docker hub源，但是dockerhub上镜像可能不够行

docker pull mirrorgooglecontainers/kube-apiserver:v1.19.0
docker pull mirrorgooglecontainers/kube-controller-manager:v1.19.0
docker pull mirrorgooglecontainers/kube-scheduler:v1.19.0
docker pull mirrorgooglecontainers/kube-proxy:v1.19.0
docker pull mirrorgooglecontainers/pause:3.2
docker pull mirrorgooglecontainers/etcd:3.4.9-1
docker pull mirrorgooglecontainers/coredns:1.7.0

#重命名镜像

docker tag mirrorgooglecontainers/kube-apiserver:v1.19.0 k8s.gcr.io/kube-apiserver:v1.19.0         
docker tag mirrorgooglecontainers/kube-controller-manager:v1.19.0 k8s.gcr.io/kube-controller-manager:v1.19.0
docker tag mirrorgooglecontainers/kube-scheduler:v1.19.0 k8s.gcr.io/kube-scheduler:v1.19.0         
docker tag mirrorgooglecontainers/kube-proxy:v1.19.0 k8s.gcr.io/kube-proxy:v1.19.0             
docker tag mirrorgooglecontainers/pause:3.2 k8s.gcr.io/pause:3.2                      
docker tag mirrorgooglecontainers/etcd:3.4.9-1 k8s.gcr.io/etcd:3.4.9-1                   
docker tag mirrorgooglecontainers/coredns:1.7.0 k8s.gcr.io/coredns:1.7.0     

########################################################

#从阿里云拉
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.19.0
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.19.0
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.19.0
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.19.0
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.9-1
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.7.0



#重命名镜像

docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.19.0 k8s.gcr.io/kube-apiserver:v1.19.0
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.19.0 k8s.gcr.io/kube-controller-manager:v1.19.0
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.19.0 k8s.gcr.io/kube-scheduler:v1.19.0
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.19.0 k8s.gcr.io/kube-proxy:v1.19.0
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2 k8s.gcr.io/pause:3.2
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.9-1 k8s.gcr.io/etcd:3.4.9-1
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.7.0 k8s.gcr.io/coredns:1.7.0 



Error response from daemon: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit



#有可能下载得时候一定要v1.90.8



## 下载频率限制

Error response from daemon: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit







​	