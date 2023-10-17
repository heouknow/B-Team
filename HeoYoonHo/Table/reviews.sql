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
