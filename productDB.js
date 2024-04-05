const connectDB = require("./config/database");
const Products = require("./models/productModel");

require("dotenv").config();

const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB();
        await Products.deleteMany();  //is se delete hota koi data do bar aa gya h to wo ya phir kuch edit karte or run karte us file ko to phele or tha or edit hone ke baad dono wala rahata to usko v shi karta ye phele wala delete kr deta
        await Products.create(ProductJson);
        console.log("Success")
        
    } catch (error) {
        console.log(error);
    }
}

start();
 