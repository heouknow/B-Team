create table login (
id varchar(20) primary key,
pass varchar(15),
passwordcheck varchar(10) not null,
name varchar(5) not null,
birth datetime ,-- 생년월일
gender varchar(1),  
email varchar(20),
phone varchar(20) not null,
);

select * from login;
