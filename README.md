<!DOCTYPE html>
<html>
<head>
    <title>Upload Produk</title>
</head>
<body>
    <h2>Upload Produk</h2>
    <form action="upload_produk.php" method="POST" enctype="multipart/form-data">
        <label>Nama Produk</label><br>
        <input type="text" name="nama_produk" required><br><br>

        <label>Harga</label><br>
        <input type="number" name="harga" required><br><br>

        <label>Deskripsi</label><br>
        <textarea name="deskripsi" required></textarea><br><br>

        <label>Foto Produk</label><br>
        <input type="file" name="foto" accept="image/*" required><br><br>

        <button type="submit">Upload</button>
    </form>
</body>
</html>
