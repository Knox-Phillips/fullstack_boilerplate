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

const deleteItem = async (req, res) => {
  try {
    const { itemId } = req.body;

    if (!itemId) {
      return res.status(400).json({ error: "Missing itemId in request body" });
    }

    const deletedCount = await Item.deleteItem({ itemId });

    if (deletedCount === 0) {
      return res.status(404).json({ error: "Item not found" });
    }

    return res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    return res.status(500).json({ error: "Server error while deleting item" });
  }
};

const updateItem = async (req, res) => {
  try {
    const { itemId, itemName } = req.body;

    if (!itemId) {
      return res.status(400).json({ error: "Missing itemId in request body" });
    }

    const updatedItem = await Item.updateItem({ itemId, itemName });
    console.log(updatedItem);
    if (updatedItem.length === 0) {
      return res.status(404).json({ error: "Item not found" });
    }

    return res.status(200).json({ message: "Item updated successfully" });
  } catch (err) {
    console.error("Update error: ", err);
    return res.status(500).json({ error: "Server error while updating item" });
  }
};
module.exports = {
  getItems,
  createItem,
  deleteItem,
  updateItem,
};
