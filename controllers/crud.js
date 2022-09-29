const conexion = require("../database/db");

exports.save = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  conexion.query("INSERT INTO tasks SET ?", {title: title, description: description}, (error, results) => {
    if(error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
}

exports.update = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  conexion.query("UPDATE tasks SET ? WHERE id = ?", [{title: title, description: description, id: id}], (error, results) => {
    if(error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
}

exports.update = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  conexion.query("UPDATE tasks SET ? WHERE id = ?", [{title: title, description: description}, id], (error, results) => {
    if(error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
}

