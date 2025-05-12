const Item = require("../models/itemModel");

const getItems = async (req, res) => {
  try {
    const items = await Item.getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to get items" });
  }
};

const createItem = async (req, res) => {
  try {
    const newItem = await Item.createItem(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create item" });
  }
};

module.exports = {
  getItems,
  createItem,
};
