const {model, Schema} = require('mongoose');

const itemSchema = new Schema (
    {
        name:{type: String, required: true},
        quantity: {type: Number, required: true},
        completed: Boolean
    }
)

const Item = model('Item', itemSchema);

module.exports = Item;
