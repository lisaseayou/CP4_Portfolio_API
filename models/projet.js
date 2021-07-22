const db = require("../db");

const findMany= async () => {
  return db.promise().query("select * from projet");
};

const create = async ({ title, description, image, year, techno }) => {
  return db
    .promise()
    .query(
      "INSERT INTO projet (title, description, image, year, techno) VALUES (?, ?, ?, ?, ?)",
      [title, description, image, year, techno]
    );
};


const delete_ = (id) => {
    return db.promise().query("DELETE FROM projet WHERE id=?", [id]);
  };

module.exports = { findMany, create, delete_ };
