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
