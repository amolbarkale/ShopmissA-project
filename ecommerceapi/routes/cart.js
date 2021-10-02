
const Cart = require("../models/Cart");
const Product = require("../models/Product");

const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");
const router = require("express").Router();

//CREATE
// router.post("/", verifyToken, async (req, res) => {

    router.post("/", async function (req, res) {
        try {
            console.log('req:', req.body)
            
            let newCart = await Cart.create(req.body);
            
            console.log('newCart:', newCart)
          
            res.status(200).json(newCart)
            
        } catch (err) {
            console.log('err:', err)
        
            res.status(500).json(err);
        }
    });

    //UPDATE PRODUCT
    router.put("/:id", verifyTokenAuthorization, async (req, res) => {

        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedCart);
        } catch (err) {
            res.status(500).json(err)
        }
    });


    //DELETE PRODUCT

    // router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
            router.delete("/:id", async (req, res) => {

        try {
            await Cart.findByIdAndDelete(req.params.id);
            res.status(200).json("Cart product has been deleted!");
        } catch (err) {
            res.status(500).json(err)
        };
    });

    //GET USER CART
    router.get("/find/:userId", verifyTokenAuthorization, async (req, res) => {
        try {
            const cart = await Cart.findOne({ userId: req.params.userId });
       
            res.status(200).json(cart);
  
        } catch (err) {
            res.status(500).json(err)
        }
    })

    //GET ALL
    // router.get("/", verifyTokenAdmin, async (req, res) => {
         router.get("/", async (req, res) => {
        try {

            const carts = await Cart.find();
            res.status(200).json(carts)


        } catch (err) {
            res.status(500).json(err)
        }
    })


    module.exports = router;