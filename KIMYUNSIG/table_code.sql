create table login (
id varchar(20) primary key,
pass varchar(15),
passwordcheck varchar(10) not null,
name varchar(5) not null,
birth datetime ,-- 생년월일
gender varchar(1),  
email varchar(20),
phone varchar(20) not null
);

select * from login;

CREATE TABLE reservation (
	reservation_id INT auto_increment NOT NULL,
	user_id INT NULL,
	filed_id INT NULL,
	reservation_date DATE NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf32
COLLATE=utf32_unicode_ci;

CREATE TABLE review (
	review_id INT auto_increment NOT NULL,
	user_id INT NULL,
	filed_id INT NULL,
	rating INT NULL,
	review_text TEXT NULL,
	review_date DATE NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf32
COLLATE=utf32_unicode_ci;


CREATE TABLE B_Team.login (
	user_Num INT auto_increment NOT NULL,
	user_id varchar(100) NULL,
	user_pw varchar(100) NULL,
	user_pwcheck varchar(100) NULL,
	user_Name varchar(100) NULL,
	user_Phone varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf32
COLLATE=utf32_unicode_ci;


-- 풋살장 정보 저장 테이블
CREATE TABLE field (
    field_id INT AUTO_INCREMENT PRIMARY KEY, -- 고유값 제공
    field_number INT NOT NULL,
    field_type VARCHAR(50) NOT NULL,
    capacity INT,
    rate DECIMAL(10, 2) NOT NULL,
    description TEXT,
    is_available BOOLEAN DEFAULT TRUE
);

select * from field;
