const mongoose = require("mongoose");

const { Schema } = mongoose;

const subcategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
);

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

module.exports = Subcategory;




