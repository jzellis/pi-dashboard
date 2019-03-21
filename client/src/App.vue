<template>
  <div id="app">
  <section class="section">
  <div class='container'>
  <div class='columns'>
  <div class='column is-one-quarter'>
  <shopping-list>
  </shopping-list>
  </div>
  </div>
  </div>
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
  }
}
</script>
