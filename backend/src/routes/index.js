const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("../app/controllers/OngController");
const IncidentController = require("../app/controllers/IncidentController");
const ProfileController = require("../app/controllers/ProfileController");
const SessionController = require("../app/controllers/SessionController");

const routes = express.Router();

/**
 * Rotas
 */

// Login
routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string()
        .required()
        .length(8)
    })
  }),
  SessionController.create
);

// Ongs
routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

// Incidents
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);
routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string()
        .required()
        .max(1000),
      value: Joi.string()
        .required()
        .min(1)
        .max(9999)
    })
  }),
  IncidentController.create
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

// Profile
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

module.exports = routes;
