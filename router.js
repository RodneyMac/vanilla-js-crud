const express = require("express");
const router = express.Router();

const conexion = require("./database/db");

router.get("/", (req, res) => {
  conexion.query("SELECT * FROM tasks", (error, results) => {
    if(error) {
      throw error;
    } else {
      res.render("index.ejs", {results: results});
    }
  });
});

module.exports = router;