function hitungBMI() {
    // Ambil nilai dari input
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggiCm = parseFloat(document.getElementById('tinggi').value);

    // Dapatkan elemen hasil
    const hasilBMIElement = document.getElementById('hasilBMI');
    const kategoriBMIElement = document.getElementById('kategoriBMI');

    // Validasi input
    if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
        hasilBMIElement.textContent = "Mohon masukkan Berat dan Tinggi yang valid.";
        kategoriBMIElement.textContent = "";
        kategoriBMIElement.style.backgroundColor = 'transparent';
        return;
    }

    // Konversi tinggi dari cm ke meter
    const tinggiM = tinggiCm / 100;

    // Hitung BMI
    const bmi = berat / (tinggiM * tinggiM);
    const bmiBulat = bmi.toFixed(2);

    // Tentukan kategori dan warna
    let kategori = '';
    let warna = '';

    if (bmi < 18.5) {
        kategori = 'Kekurangan Berat Badan';
        warna = '#ffc107'; // Kuning
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = 'Berat Badan Normal';
        warna = '#28a745'; // Hijau
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        kategori = 'Kelebihan Berat Badan';
        warna = '#fd7e14'; // Oranye
    } else {
        kategori = 'Obesitas';
        warna = '#dc3545'; // Merah
    }

    // Tampilkan hasil
    hasilBMIElement.textContent = `BMI Anda: ${bmiBulat}`;
    kategoriBMIElement.textContent = kategori;
    kategoriBMIElement.style.backgroundColor = warna;
}
