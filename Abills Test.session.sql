SELECT password, CONVERT(DECODE(password, 'abills345678901234490137') USING utf8) FROM users WHERE id = 'admin_kryk';
