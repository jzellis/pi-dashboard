<template>
<div class='container'>
<h2 class='title is-5'>Shopping List</h2>
<ul class='shopping-list tile is-ancestor'>
<li class='tile is-vertical is-parent is-3' v-for="item in items" :id="item.name"><div class='tile has-background-light box is-child'>{{item.name}} <div class='icon is-small is-pulled-right' @click="removeItem(item)"><i class='fas fa-times-circle'></i></div></div></li>
</ul>
<form id='new-shopping-list-item' class='is-4' @submit.prevent='addItem'>
<div class='control'>
<input type='text' class='input' placeholder="Enter new item here" v-model='newItem'>
</div>
<div class='control'>
<button class='button'>Add New Item</button>
</div>
</form>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ShoppingList',
  data: function(){return{
  newItem: "",
  	items: [
  	]
  }
  },
  methods: {
	getItems(){
	
	var self = this;
	axios.get('http://192.168.0.16:8081/items')
	.then( function(response){
	self.items = response.data.items;
	})
	
	},  
	
	addItem(){
	
	var self=this;
	axios.post('http://192.168.0.16:8081/items/add',{name: self.newItem})
	.then(function(response){
	self.newItem = "";
	self.getItems();
	
	});
	
	},
  removeItem(item){
  
  	var self=this;
	axios.post('http://192.168.0.16:8081/items/remove',{name: item.name})
	.then(function(response){
	self.getItems();

});  
  //this.items.splice(this.items.indexOf(item),1);
	
  }
  
  },
  mounted(){
  this.getItems()
  }
}
</script>
