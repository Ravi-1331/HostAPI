const ProductModel = require("../models/productModel")

const getAllProducts = async (req, res) => {
    
    const{ company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if(company) {
        queryObject.company = company;
    }
    if(name) { 
        queryObject.name = { $regex: name, $options: "i"}; //ye kiye is se hota ye h ki agr naam kuch search kiye us se milta jo jo naam hoga sb aa jayega
    }
    if(featured) {
        queryObject.featured = featured;
    }

    let apiData = ProductModel.find(queryObject);

    //sorting ke liye
    if(sort){
        let sortFix = sort.replace(",", " "); //jb url pr search krenge to , lga kr karna hoga hai jb do chij ko karte ak time hi pr code me sort without "," hogt is liye aisa kiye ki jb code me aaye to wo "," ht jae or result de de
        apiData = apiData.sort(sortFix); //ye kiye q ki jb user sort likhe tb hi sort kro aise nhi
    }

    //select wala functinality ke liye
    if(select){
        let selectFix = select.split(",").join(" "); //jb url pr search krenge to , lga kr karna hoga hai jb do chij ko karte ak time hi pr code me "select" without "," hogt is liye aisa kiye ki jb code me aaye to wo "," ht jae or result de de
        apiData = apiData.select(selectFix); //ye kiye q ki jb user sort likhe tb hi sort kro aise nhi
    }

    const ProductsAPI = await apiData; //req.query kiye filterering ke liye aise se-- http://localhost:4000/api/products/testing?price=154
  
    res.status(200).json({
        ProductsAPI
    });
}


const getAllProductsTesting = async (req, res) => {

    const ProductsAPI = await ProductModel.find(req.query);

    res.status(200).json({
        ProductsAPI
    });
}

module.exports = {getAllProducts, getAllProductsTesting};