const express = require("express");

const app = express();
const port = 5000;

const routerIkan = require("./router/ikan");

//untuk menerima req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/about", (req, res) => {
  res.send("about");
});

app.use(routerIkan);

app.listen(port, () => {
  console.log("server berjalan pada port" + port);
});
