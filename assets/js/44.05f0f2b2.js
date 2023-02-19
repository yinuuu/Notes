(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{475:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"_1-docker安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker安装nginx"}},[a._v("#")]),a._v(" 1 Docker安装Nginx")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("// 下载最新的nginx镜像\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull nginx\n\n// 创建映射文件目录\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /data/programs/nginx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" html logs conf\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mkdir -p /data/programs/nginx/{conf,log,html}")]),a._v("\n\n// 先启动一个容器用于cp对应的文件类型\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" nginx\n\n// 查看是否启动成功\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n\n// 复制文件到映射目录，481e121fb29f是第"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("显示的nginx 的container "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#/data/programs/nginx是创建的映射文件路径，需替换成自己的路径。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" nginx:/etc/nginx/nginx.conf /data/programs/nginx/conf/nginx.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" nginx:/etc/nginx/conf.d /data/programs/nginx/conf/conf.d\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" nginx:/usr/share/nginx/html /data/programs/nginx/html\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止此nginx，执行：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 然后再删除nginx容器，执行：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新启动nginx：注意/data/programs/nginx是创建的文件夹路径，需替换自己的。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(":443 \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" nginx \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/programs/nginx/html:/usr/share/nginx/html \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/programs/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/programs/nginx/conf/conf.d:/etc/nginx/conf.d \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/programs/nginx/logs:/var/log/nginx nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看是否启动成功：若有nginx并且status是up则启动成功。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改nginx.cong配置：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入conf：cd /data/programs/nginx/conf，修改了nginx.conf后，停止nginx然后加载即可生效。")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 测试nginx配置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" 容器id nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新加载nginx配置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" 容器id  nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" reload \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart nginx\n")])])]),s("h3",{attrs:{id:"_2-docker安装mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker安装mysql"}},[a._v("#")]),a._v(" 2 Docker安装MySQL")]),a._v(" "),s("h4",{attrs:{id:"_2-1-安装步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装步骤"}},[a._v("#")]),a._v(" 2.1 安装步骤")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 拉取mysql镜像（或者指定版本也行，例如 docker pull mysql5.7 ）")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull mysql\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建挂载目录，数据库的配置和数据文件，不适合放容器内部，需要挂在到宿主机上。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 绝对路径方式")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /data/programs/mysql/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("conf,data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 相对路径方式(需要进cd到相应目录)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" ./mysql/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("conf,data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动mysql容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(":3306 \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/programs/mysql/conf:/etc/mysql/conf.d \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/programs/mysql/data:/var/lib/mysql \n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql mysql\n")])])]),s("p",[a._v("容器起动起来后通过docker ps -a 查询，已经又一个名称叫mysql的容器并且状态是up")]),a._v(" "),s("h4",{attrs:{id:"_2-2-启动容器命令解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-启动容器命令解释"}},[a._v("#")]),a._v(" 2.2 启动容器命令解释：")]),a._v(" "),s("p",[a._v("-d 表示后台运行\n-p 3306:3306 表示端口映射  -p 宿主机端口:容器端口\n-v /data/programs/mysql/conf:/etc/mysql/conf.d   表示挂载，-v 宿主机目录或文件:容器内目录或文件\n-e MYSQL_ROOT_PASSWORD=123456  表示设置密码，此处密码为123456\n--name mysql 表示启动的容器名称，此处容器名称叫mysql\n--restart=always\n最后一个mysql 表示需要启动的镜像名称")]),a._v(" "),s("h4",{attrs:{id:"_2-3-常见问题及解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-常见问题及解决"}},[a._v("#")]),a._v(" 2.3 常见问题及解决")]),a._v(" "),s("ul",[s("li",[a._v("修正docker mysql 字符集为utf8")]),a._v(" "),s("li",[a._v("容器数据卷，保证容器实例被删除后本地有备份数据")])]),a._v(" "),s("p",[a._v("显示字符集配置：SHOW VARIABLES LIKE 'character%';\n重新创建实例：docker run -d -p 3306:3306 --privileged=true -v /data/mysql/log:/var/log/mysql -v /data/mysql/data:/var/lib/mysql -v /data/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7\n修改字符配置：\n[client] default_character_set=utf8 [mysqld] collation_server = utf8_general_ci character_set_server = utf8\n重启：docker restart mysql\n进入：docker exec -it mysql bash\n连接：mysql -uroot -p")]),a._v(" "),s("h3",{attrs:{id:"_3-开机自启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-开机自启动"}},[a._v("#")]),a._v(" 3 开机自启动")]),a._v(" "),s("h4",{attrs:{id:"_3-1-设置docker服务自启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-设置docker服务自启动"}},[a._v("#")]),a._v(" 3.1 设置docker服务自启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动服务 ")]),a._v("\n% systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置开机自启动 ")]),a._v("\n% systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" docker.service \nCreated symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看自启动设置是否成功")]),a._v("\n% systemctl list-unit-files "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" \ndocker.service enabled\n")])])]),s("h4",{attrs:{id:"_3-2-设置镜像自动启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-设置镜像自动启动"}},[a._v("#")]),a._v(" 3.2 设置镜像自动启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动 ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start d5c440e6d44f \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 自动启动 ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always d5c440e6d44f\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);