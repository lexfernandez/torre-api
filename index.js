require("dotenv").config();
const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();

const API_URL = process.env.API_URL;
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/", function (req, res) {
  const uri = API_URL + req.url;
  const query = req.query;
  req.pipe(request({ qs: query, uri: uri })).pipe(res);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
