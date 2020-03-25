const express = require("express");

const connection = require("../database/connection");

const OngController = require("../app/controllers/OngController");
const IncindentController = require("../app/controllers/IncindentController");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/incidents", IncindentController.index);
routes.post("/incidents", IncindentController.store);
routes.delete("/incidents", IncindentController.destroy);

module.exports = routes;
