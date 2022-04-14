const req = require("express/lib/request");

let Ikan = [
  {
    tipe: "M",
    nama: "LetterSix",
    harga: "Rp 120.000",
    ukuran: "20 cm",
    create: new Date(),
  },
  {
    tipe: "S",
    nama: "Clownfish",
    harga: "Rp 10.000",
    ukuran: "7 cm",
    create: new Date(),
  },
  {
    tipe: "L",
    nama: "Botana",
    harga: "Rp 50.000",
    ukuran: "15 cm",
    create: new Date(),
  },
  {
    tipe: "T",
    nama: "Betok",
    harga: "Rp 5.000",
    ukuran: "5 cm",
    create: new Date(),
  },
];

const cari = (arrData, tipe) => {
  ketemu = -1;
  indeks = 0;
  while (ketemu == -1 && indeks < arrData.length - 1) {
    if (arrData[indeks].tipe == tipe) {
      ketemu = indeks;
      return indeks;
    }
    indeks++;
  }
  return -1;
};

module.exports = {
  getIkan: Ikan,

  insert: (req) => {
    const newItem = {
      tipe: req.body.tipe,
      nama: req.body.nama,
      harga: req.body.harga,
      ukuran: req.body.ukuran,
    };
    Ikan.push(newItem);
    return newItem;
  },
  getIkanByTipe: (req) => {
    tipe = req.params.tipe;
    indeks = cari(Ikan, tipe);
    if (indeks != -1) {
      const dataIkan = {
        tipe: Ikan[indeks].tipe,
        nama: Ikan[indeks].nama,
        harga: Ikan[indeks].harga,
        ukuran: Ikan[indeks].ukuran,
      };
      return dataIkan;
    }
    return indeks;
  },
  update: (req) => {
    tipe = req.params.tipe;
    indeks = cari(Ikan, tipe);
    if (indeks != -1) {
      Ikan[indeks].tipe = tipe;
      Ikan[indeks].nama = req.body.nama;
      Ikan[indeks].harga = req.body.harga;
      Ikan[indeks].ukuran = req.body.ukuran;

      return Ikan[indeks];
    }
    return -1;
  },
  delete: (req) => {
    tipe = req.params.tipe;
    indeks = cari(Ikan, tipe);
    ket = "Data ikan tidak ditemukan";
    if (indeks != -1) {
      Ikan.splice(indeks, 1);
      ket = "Data ikan dengan tipe" + tipe + "Berhasil dihapus";
    }
    return ket;
  },
};
