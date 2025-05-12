const db = require("../db");

const getAllItems = () => db("items").select();
const createItem = (data) => {
  console.log(data);
  return db("items").insert(data).returning("*");
};

module.exports = {
  getAllItems,
  createItem,
};
