<template>
  <div id="app">
  <section class="section">
  <shopping-list>
  </shopping-list>
  </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import ShoppingList from './components/ShoppingList'
export default {
  name: 'app',
  components: {
		ShoppingList
//    HelloWorld
  }
}
</script>
