const db = require("../db");

const createItem = (data) => {
  console.log("POST model hit");
  return db("items").insert(data).returning("*");
};

const getAllItems = () => {
  console.log("GET model hit");
  return db("items").select().orderBy("created_at", "asc");
};

const updateItem = ({ itemId, itemName }) => {
  console.log("Update model hit");
  return db("items")
    .where({ itemId })
    .update({ itemName, updated_at: db.fn.now() })
    .returning("*");
};

const deleteItem = ({ itemId }) => {
  console.log("DELETE model hit");
  return db("items").where({ itemId }).del();
};

module.exports = {
  getAllItems,
  createItem,
  deleteItem,
  updateItem,
};
