---
title: Docker 镜像安装
author: yinuuu
date: 2023-2-19
categories:
  - Tools
tags:
  - Docker
sticky: 3
---

### 1 Docker安装Nginx
```shell
// 下载最新的nginx镜像
docker pull nginx

// 创建映射文件目录
cd /data/programs/nginx
mkdir html logs conf
# mkdir -p /data/programs/nginx/{conf,log,html}

// 先启动一个容器用于cp对应的文件类型
docker run --name nginx -p 80:80 -d nginx

// 查看是否启动成功
docker ps -a

// 复制文件到映射目录，481e121fb29f是第(5)显示的nginx 的container id
#/data/programs/nginx是创建的映射文件路径，需替换成自己的路径。
docker cp nginx:/etc/nginx/nginx.conf /data/programs/nginx/conf/nginx.conf
docker cp nginx:/etc/nginx/conf.d /data/programs/nginx/conf/conf.d
docker cp nginx:/usr/share/nginx/html /data/programs/nginx/html

# 停止此nginx，执行：
docker stop nginx

# 然后再删除nginx容器，执行：
docker rm nginx

# 重新启动nginx：注意/data/programs/nginx是创建的文件夹路径，需替换自己的。
docker run --restart=always -d 
	-p 80:80 -p 443:443 
	--name nginx 
	-v /data/programs/nginx/html:/usr/share/nginx/html 
	-v /data/programs/nginx/conf/nginx.conf:/etc/nginx/nginx.conf 
	-v /data/programs/nginx/conf/conf.d:/etc/nginx/conf.d 
	-v /data/programs/nginx/logs:/var/log/nginx nginx

# 查看是否启动成功：若有nginx并且status是up则启动成功。
docker ps -a 

# 修改nginx.cong配置：
# 进入conf：cd /data/programs/nginx/conf，修改了nginx.conf后，停止nginx然后加载即可生效。

# 测试nginx配置
docker exec 容器id nginx -t 

# 重新加载nginx配置
docker exec 容器id  nginx -s reload 

# 重启
docker restart nginx
```

### 2 Docker安装MySQL

#### 2.1 安装步骤

```shell
# 拉取mysql镜像（或者指定版本也行，例如 docker pull mysql5.7 ）
docker pull mysql

# 创建挂载目录，数据库的配置和数据文件，不适合放容器内部，需要挂在到宿主机上。
# 绝对路径方式
mkdir -p /data/programs/mysql/{conf,data}
# 相对路径方式(需要进cd到相应目录)
mkdir -p ./mysql/{conf,data}

# 启动mysql容器
docker run -d -p 3306:3306 
	-v /data/programs/mysql/conf:/etc/mysql/conf.d 
	-v /data/programs/mysql/data:/var/lib/mysql 
	-e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql
```
容器起动起来后通过docker ps -a 查询，已经又一个名称叫mysql的容器并且状态是up
#### 2.2 启动容器命令解释：
-d 表示后台运行
-p 3306:3306 表示端口映射  -p 宿主机端口:容器端口
-v /data/programs/mysql/conf:/etc/mysql/conf.d   表示挂载，-v 宿主机目录或文件:容器内目录或文件
-e MYSQL_ROOT_PASSWORD=123456  表示设置密码，此处密码为123456
--name mysql 表示启动的容器名称，此处容器名称叫mysql
--restart=always
最后一个mysql 表示需要启动的镜像名称
#### 2.3 常见问题及解决

-  修正docker mysql 字符集为utf8
- 容器数据卷，保证容器实例被删除后本地有备份数据

显示字符集配置：SHOW VARIABLES LIKE 'character%';
重新创建实例：docker run -d -p 3306:3306 --privileged=true -v /data/mysql/log:/var/log/mysql -v /data/mysql/data:/var/lib/mysql -v /data/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7
修改字符配置：
[client] default_character_set=utf8 [mysqld] collation_server = utf8_general_ci character_set_server = utf8 
重启：docker restart mysql
进入：docker exec -it mysql bash
连接：mysql -uroot -p

### 3 开机自启动

#### 3.1 设置docker服务自启动
```shell
# 启动服务 
% systemctl start docker 

# 设置开机自启动 
% systemctl enable docker.service 
Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.

# 查看自启动设置是否成功
% systemctl list-unit-files | grep enable | grep docker 
docker.service enabled
```
#### 3.2 设置镜像自动启动
```shell
# 启动 
docker start d5c440e6d44f 

# 自动启动 
docker update --restart=always d5c440e6d44f
```

