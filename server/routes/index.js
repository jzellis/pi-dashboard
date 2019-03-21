const routes = require('express').Router();
const ShoppingList = require('../schema/mongoose/shoppingList.js');
routes.get('/items', async function(req, res){
  
  let items = await ShoppingList.find({isPurchased:false});

	if(items.length == 0){
	await ShoppingList.create({name:"Milk"});
	}
  
  res.status(200).json({ 
  
  items: items
  
   });
});

routes.post('/items/add', async function(req, res){
  console.log(req.body);
	newItem = await	ShoppingList.findOneAndUpdate({name: req.body.name},{$set: {name: req.body.name,isPurchased:false}},{upsert:true});
  
  res.status(200).json({ 
  
item: newItem
  
   });
});

routes.post('/items/remove', async function(req, res){
  console.log(req.body);
	await ShoppingList.updateMany({name: req.body.name},{$set: {isPurchased:true}});
  
  res.status(200).json({ 
  
status: "OK"
  
   });
});

module.exports = routes;