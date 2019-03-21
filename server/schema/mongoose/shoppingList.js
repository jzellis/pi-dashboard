const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var ShoppingListSchema = new Schema({

name: {type:String, required: true},
isPurchased: {type: Boolean, default: false}
},{timestamps: {createdAt: 'dateAdded',updatedAt: 'dateModified'}});

const ShoppingList = mongoose.model('ShoppingList',ShoppingListSchema);
module.exports = ShoppingList;