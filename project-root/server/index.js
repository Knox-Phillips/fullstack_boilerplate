const express = require("express");
const app = express();
const itemRoutes = require("./routes/items");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/items", itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
