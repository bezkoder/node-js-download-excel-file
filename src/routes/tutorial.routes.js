const express = require("express");
const router = express.Router();
const excelController = require("../controllers/tutorials/excel.controller");

let routes = (app) => {
  router.get("/download", excelController.download);

  app.use("/api/excel", router);
};

module.exports = routes;
