const { findMany, create, delete_ } = require("../models/projet");

const getProjet = async (req, res) => {
    const [projet] = await findMany(req.query);
    res.status(200).json(projet);
  };
  
  const createProjet = async (req, res) => {
    try {
      await create(req.body);
      res.status(201).send("Projet has been created");
    } catch (err) {
      res.status(500).send("Error creating projet");
    }
  };
  
  const deleteProjet = async (req, res) => {
    try {
      await delete_(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).send("Error deleting projet");
    }
  };
  
  module.exports = {
    getProjet,
    createProjet,
    deleteProjet,
  };
  