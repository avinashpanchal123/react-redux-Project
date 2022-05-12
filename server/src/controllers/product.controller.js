const express = require("express");

const router = express.Router()

const Product = require("../models/product.model");

// create product -- admin
router.post("", async(req, res)=>{
    try{
        const product = await Product.create(req.body);
        return res.status(201).json({
            success : true,
            product
        })
    }
    catch(e){
        return res.status(500).json({ message: e.message, status: "failed" });
    }
});



// get all products
router.get("", async(req, res)=>{
    try{
        const products = await Product.find()
        .sort({price : 1})
        .lean().exec();
        return  res.status(201).json({
            success : true,
            products
        })
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})


//update product-- admin

router.patch("/:id", async(req, res)=>{
    try{
        let product = await Product.findById(req.params.id);

        if( !product){
            return res.status(404).json({
                success : false, 
                message : "Product not found"
            })
        }

        product = await Product.findByIdAndUpdate(req.params.id,
            req.body, {
                new:true
            })
            .lean()
            .exec();

            res.status(200).json({
                success : true,
                product
            })
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})



// delete a single product -- admin

router.delete("/:id", async(req, res)=>{
    try{
        let product = await Product.findById(req.params.id);

        if( !product){
            return res.status(404).json({
                success : false, 
                message : "Product not found"
            })
        }

        product = await Product.findByIdAndDelete(req.params.id)
            .lean()
            .exec();

            res.status(200).json({
                success : true,
                product
            })
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})

// get a single product details


router.get("/single/:id", async(req, res)=>{
    try{
        let product = await Product.findById(req.params.id);
        console.log(product);

        if( !product){
            return res.status(404).json({
                success : false, 
                message : "Product not found"
            })
        }

      

          return  res.status(200).json({
                success : true,
                product
            })
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})



// get searched query products results

router.get("/search/", async(req, res)=>{
    try{

        let product = await Product.find(
          { "title": { "$regex": req.query.keyword, "$options": "i" }}
          
        );
        console.log(req.query, "line 135");

        if( !product){
            return res.status(404).json({
                success : false, 
                message : "Product not found"
            })
        }

      

          return  res.status(200).json({
                success : true,
                product
            })
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})


module.exports = router;