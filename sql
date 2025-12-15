CREATE DATABASE toko;

USE toko;

CREATE TABLE produk (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(100),
    harga INT,
    deskripsi TEXT,
    gambar VARCHAR(255)
);
