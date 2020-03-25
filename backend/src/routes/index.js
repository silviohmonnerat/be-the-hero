const express = require("express");

const SessionController = require("../app/controllers/SessionController");
const OngController = require("../app/controllers/OngController");
const IncindentController = require("../app/controllers/IncindentController");
const ProfileController = require("../app/controllers/ProfileController");

const routes = express.Router();

routes.post("/session", SessionController.store);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/incidents", IncindentController.index);
routes.post("/incidents", IncindentController.store);
routes.delete("/incidents", IncindentController.destroy);

routes.get("/profile", ProfileController.index);

module.exports = routes;
