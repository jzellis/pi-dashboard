<template>
<div class='is-size-7'>
<h2 class='title is-5'>Shopping List</h2>
<ul class='shopping-list tile is-ancestor is-vertical'>
<li v-for="item in items" class="tile is-parent is-12" :id="item.name"><div class='tile is-child box has-background-light' :class='{HasTextLight:!item.isPurchased}'>{{item.name}} <div class='icon is-small is-pulled-right' @click="removeItem(item)"><i class='fas fa-times-circle'></i></div></div></li>
</ul>
<form id='new-shopping-list-item' @submit.prevent='addItem'>
<div class='field'>
<div class='control'>
<input type='text' class='input is-small' placeholder="Enter new item here" v-model='newItem'>
</div>
</div>
<div class='field'>
<div class='control'>
<button class='button is-primary is-fullwidth is-small'><div class='icon'><i class='fas fa-plus'></i></div> &nbsp; Add New Item</button>
</div>
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
  	item.isPurchased = false;
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
