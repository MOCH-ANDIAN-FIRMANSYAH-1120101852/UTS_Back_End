const modelIkan = require("../model/ikan");
module.exports = {
  getIkan: (req, res) => {
    Ikan = modelIkan.getIkan;

    res.json(Ikan);
  },

  insert: (req, res) => {
    newItem = modelIkan.insert(req);
    res.status(201).json(newItem);
  },

  getIkanByTipe: (req, res) => {
    dataIkan = modelIkan.getIkanByTipe(req);
    if (dataIkan != -1) {
      res.json(dataIkan);
    } else {
      res.send("Ikan dengan tipe :" + req.params.tipe + "tidak ditemukan");
    }
  },

  update: (req, res) => {
    Ikan = modelIkan.update(req);
    if (Ikan != -1) {
      res.json(Ikan);
    }
    res.send("data ikan tidak ditemukan");
  },

  delete: (req, res) => {
    ket = modelIkan.delete(req);
    res.send(ket);
  },
};
