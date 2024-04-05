
const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

//mounting
const products_routes = require("./routes/productRoutes")
app.use("/api/products", products_routes)

const connectDB = require("./config/database");
connectDB();

app.get("/", (req, res) => {
    res.send("Hi, I am live");
})


app.listen(PORT, () => {
    console.log(`Server is Starting at ${PORT}`);
})

