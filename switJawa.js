let tanya = true
while (tanya) {
    let ply = prompt('Pilih: Gajah,Semut,Orang');


    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'Gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Semut';
    } else {
        comp = 'Orang';
    }

    let hasil = '';

    if (ply == comp) {
        hasil = 'SERI';
    } else if (ply == 'Gajah'.toLowerCase) {
        hasil = (comp == 'Orang'.toLowerCase) ? 'MENANG' : 'KALAH';

    } else if (ply == 'Semut'.toLowerCase) {
        hasil = (comp == 'Gajah'.toLowerCase) ? 'MENANG' : 'KALAH';

    } else if (ply == 'Orang'.toLowerCase) {
        hasil = (comp == 'Gajah'.toLowerCase) ? 'KALAH' : 'MENANG';

    } else {
        hasil = 'Memasukan pilihan yang salah!';
    }

    alert('Kamu memilih:  ' + ply + ' Dan comp memilih:  ' + comp + '\nMaka Hasil Nya: Kamu  ' + hasil);

    tanya = confirm('Lagi?');
}

alert('Terimakasih Telah Bermain!');