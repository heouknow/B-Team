create table login (
id varchar(20) primary key,
user_id INT NOT NULL,
pass varchar(15),
passwordcheck varchar(10) not null,
name varchar(5) not null,
phone varchar(20) not null,
 FOREIGN KEY (user_id) REFERENCES users(user_id)
);

select * from login;
