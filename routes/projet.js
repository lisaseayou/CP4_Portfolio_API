const projetRouter = require("express").Router();
const { getProjet, createProjet, deleteProjet } = require("../controllers/projet");

projetRouter.get("/", getProjet);
projetRouter.post("/", createProjet);
projetRouter.delete("/:id", deleteProjet);

module.exports = projetRouter;
