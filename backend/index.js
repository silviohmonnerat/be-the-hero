const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    aluno: "Silvio Monnerat",
    evento: "Semana OmniStack 11"
  });
});

app.listen(3333);
