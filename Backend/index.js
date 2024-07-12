const express = require("express");
const app = express();
const productRoutes = require("./routes/product");
const cors = require("cors");

const PORT = 5000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(productRoutes);
app.listen(PORT, (req, res) => {
  console.log(`Server Started At Port ${PORT}`);
});
