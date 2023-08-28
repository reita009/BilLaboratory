const express = require("express");
const app = express();
const router = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(8081, () => {
  console.log("Serve rodando com sucesso!");
});
