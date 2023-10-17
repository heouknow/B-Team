CREATE TABLE reservation (
	reservation_id INT auto_increment NOT NULL,
	user_id INT NULL,
	filed_id INT NULL,
	reservation_date DATE NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf32
COLLATE=utf32_unicode_ci;
