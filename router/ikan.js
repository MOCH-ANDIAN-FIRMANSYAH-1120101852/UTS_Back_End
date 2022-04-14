const express = require("express");
const routerIkan = express.Router();

const controllerIkan = require("../controller/ikan");

routerIkan.route("/ikan").get(controllerIkan.getIkan).post(controllerIkan.insert);

routerIkan.route("/Ikan/:tipe").put(controllerIkan.update).delete(controllerIkan.delete).get(controllerIkan.getIkanByTipe);

module.exports = routerIkan;
