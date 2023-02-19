# 环境

## CH库环境

```

172.16.9.195:30880
admin
P@88w0rd
```



## TAF K8S

taf-test -> http://taf.test.whup.com:8080
taf-dev -> http://dev.test.whup.com:8080

k8s：
taf-test: namespace taf-test
taf-dev: namespace taf-dev 



http://taf-test.k8s.12345up.com/  

admin  Upchina@999 



# 基础概念

## IP以及端口

https://www.jianshu.com/p/7e3646e26fc7



# 使用

## 创建应用

```javascript
#在指定名称空间上部署应用
kubectl create deployment --image nginx demo-nginx --namespace=myns

#查看部署状况
kubectl describe deployment demo-nginx --namespace=myns
kubectl get deployments --namespace=myns

#查看yaml文件
kubectl get pods demo-nginx-645c888794-vzrzq   --namespace=myns -o yaml

#创建Service
kubectl create service nodeport demo-nginx --tcp 80:80 -n=myns

#编辑deployments 的yaml文件
kubectl edit deployment/demo-nginx

#查看svc 信息
kubectl describe svc  -n myns demo-nginx

#编辑svc

kubectl edit svc/demo-nginx -n myns
172.16.9.195:31111

```





## 常用命令

### 查看集群信息

```
root@upchina1:~# kubectl cluster-info
Kubernetes control plane is running at https://lb.kubesphere.local:6443
coredns is running at https://lb.kubesphere.local:6443/api/v1/namespaces/kube-system/services/coredns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```



### 查看节点

```
#查看所有节点
kubectl get nodes
root@upchina1:~# kubectl get nodes
NAME       STATUS   ROLES                         AGE     VERSION
upchina1   Ready    control-plane,master,worker   2d22h   v1.20.4
upchina2   Ready    worker                        2d21h   v1.20.4
upchina3   Ready    worker                        2d21h   v1.20.4

#查看某个节点的信息
kubectl describe node upchina1
```



### 查看POD

```
#查看所有命令空间
kubectl get ns

#查看所有名称空间内的资源
kubectl get pods --all-namespaces

#查看命名空间得pods
kubectl get pods --namespace=myns 

#进入Pod
kubectl exec demo-nginx-645c888794-vzrzq -n myns -it /bin/bash 


#进入pod中指定得容器
kubectl exec -it chi-demo-cluster-name-0-0-0  -c clickhouse -- /bin/bash
```



### 查看Service

```
root@upchina1:~# kubectl get service
NAME                             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                         AGE
chi-demo-cluster-name-0-0        ClusterIP      None            <none>        8123/TCP,9000/TCP,9009/TCP      2d20h
chi-demo-cluster-name-0-1        ClusterIP      None            <none>        8123/TCP,9000/TCP,9009/TCP      2d20h
chi-demo-cluster-name-1-0        ClusterIP      None            <none>        8123/TCP,9000/TCP,9009/TCP      2d20h

#创建service
kubectl create service nodeport nginx --tcp 80:80 

#删除service
kubectl delete service nginx 
```



### 端口转发

```
 kubectl port-forward demo-nginx-645c888794-vzrzq 80:8888  --namespace=myns
```



### 磁盘映射





# 其他

## 证书

```
https://blog.csdn.net/zuolinux/article/details/108671941

wget -O Makefile https://raw.githubusercontent.com/kubernetes/examples/master/staging/https-nginx/Makefile

 make keys KEY=/tmp/nginx.key CERT=/tmp/nginx.crt 
```