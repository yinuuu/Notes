---
title: SQL
author: yinuuu
date: 2023-2-19
categories:
  - Tools
tags:
  - MySQL
sticky: 10
---

### 1 库操作
```shell
-- 创建库 
create database db1; 

-- 创建库是否存在，不存在则创建 
create database if not exists db1; 

-- 查看所有数据库 
show databases; 

-- 查看某个数据库的定义信息 
show create database db1; 

-- 修改数据库字符信息 
alter database db1 character set utf8; 

-- 删除数据库 
drop database db1;
```

### 2 表结构
```shell
-- 查看表结构 
desc 表名; 

-- 查看创建表的SQL语句 
show create table 表名; 

-- 修改表名 
alter table 表名 rename to 新的表名; 

-- 添加一列 
alter table 表名 add 列名 数据类型; 

-- 删除列 
alter table 表名 drop 列名; 

-- 删除表 
drop table 表名; drop table if exists 表名; 

-- 查询表字段 
select COLUMN_NAME,COLUMN_COMMENT from information_schema.COLUMNS where table_name = 't_commentsource' and table_schema = 'db_smart_center'
```

###  3 增加 insert into

```shell
-- 写全所有列名 
insert into 表名 (列名1, 列名2, ..., 列名n) values (值1, 值2, ..., 值n); 

-- 不写列名（所有列全部添加） 
insert into 表名 values (值1, 值2, ..., 值n); 

-- 插入部分数据 
insert into 表名 (列名1, 列名2) values (值1, 值2);
```

### 4 删除 delete

```shell
-- 删除表中数据 
delete from 表名 where 列名 = 值; 

-- 删除表中所有数据 
delete from 表名; 

-- 删除表中所有数据（高效，先删除表，然后再创建一张一样的表） 
truncate table 表名;
```

### 5 修改 update

```shell
-- 不带条件的修改（会修改所有行） 
update 表名 set 列名 = 值; 

-- 带条件的修改 
update 表名 set 列名 = 值 where 列名 = 值;
```

### 6 排序查询 order by

```shell
-- 语法：order by 子句 

-- 例子 
select * from person order by math; -- 默认升序 
select * from person order by math desc; -- 降序
```

### 7 分组查询 group by

```shell
-- 聚合函数：将一列数据作为一个整体进行纵向的计算 count：计算个数 max：计算最大值 min：计算最小值 sum：计算和 avg：计算平均数 

-- 分组查询 语法：group by 分组字段 

-- 按性别分组。分别查询男女同学的平均分 
select gender, avg(math) from student group by gender; 

-- 按性别分组。分别查询男女同学的平均分，人数。 
select gender, avg(math) , count(id) from student group by gender;
```

### 8 分页查询 limit

```shell
-- 语法：limit 开始的索引, 每页查询的条数; 
-- 公式：开始的索引 = （当前的页码 - 1） * 每页显示的条数 
-- 注意：limit 是一个mysql方言 

-- 示例 
select * from student limit 0,3; -- 第1页 
select * from student limit 6,3; -- 第2页 
select * from student limit 9,3; -- 第3页
```

### 9 子查询

```shell
-- 子查询：查询中的嵌套查询 
-- 示例：查询年龄最高的人员信息 

-- 1 查询最高的年龄 
select max(age) from emp; 

-- 2 查询人员信息，并且年龄等于30的 
select * from emp where emp.`age` = 30; 

-- 一条sql就可以完成这个操作，这就是子查询 
select * from emp where emp.`salary` = (select max(age) from emp);
```
### 10 连接查询

```shell
-- 左外连接 
-- 查询的表示左表所有数据以及其交集部分 
select 字段列表 from 表1 left [outer] join 表2 on 条件; 

-- 右外连接 
-- 查询的表示右表所有数据以及其交集部分 
select 字段列表 from 表1 right [outer] join 表2 on 条件; 

-- 多表查询 添加条件消除笛卡尔积 
select * from emp, dept where emp.dept_id=dept.id;
```

### 11 参考
[MySQL----多表查询_计科_xiao_cai_ji的博客-CSDN博客_mysql多表查询](https://blog.csdn.net/m0_53022813/article/details/123972438)