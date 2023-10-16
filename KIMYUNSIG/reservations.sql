-- 예약 테이블
CREATE TABLE reservations (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,  -- 예약한 사용자 ID
    field_id INT NOT NULL,  -- 풋살장 ID
    reservation_date DATE NOT NULL,  -- 예약한 날짜
    start_time TIME NOT NULL,  -- 예약 시작 시간
    end_time TIME NOT NULL,  -- 예약 종료 시간
    reservation_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- 예약 생성 일자 및 시간
    FOREIGN KEY (user_id) REFERENCES users(user_id),  -- 사용자 테이블과 연결
    FOREIGN KEY (field_id) REFERENCES field(field_id)  -- 풋살장 테이블과 연결
);

select * from reservations;
