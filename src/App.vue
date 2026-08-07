<script setup>
  import Hello from './components/Hello.vue';
  import Home from './components/Home.vue';
  import Header from './components/Header.vue';
  import Product from './components/Product.vue';
</script>

<template>
  <Hello/>
  <Header/>
  <RouterView/>
</template>

<style scoped></style>