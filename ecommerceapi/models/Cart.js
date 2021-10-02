const mongoose = require("mongoose");
const Product = require("./Product");
const CartSchema = new mongoose.Schema({

    // userId: { type: String, required:},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "ProductSchema"},
    title: { type: String, required: true },
    price: { type: Number, required: true },
    img: {type: String, required: true},
},
    { timestamps: true }
);
const Cart  = mongoose.model("cart", CartSchema);
module.exports = Cart;

// ///////////////////////////////////////////////////////////////////////////////////

// const mongoose = require("mongoose");
// const Product = require("./Product");
// const CartSchema = new mongoose.Schema({
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: "ProductSchema", required: false },  
//     quantity: { type: Number, required:false, default: 1, },
// },
//     { timestamps: true }
// );
// module.exports = mongoose.model("Cart", CartSchema);
/////////////////////////////////////////////////////////////////////////////////


