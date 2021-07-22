const projetRouter = require("./projet");

module.exports = (app) => {
  app.use("/projet", projetRouter);
};
