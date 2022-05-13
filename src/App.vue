<script setup>
import Header from "./components/Layout/Header.vue";
import Main from './components/Layout/Main.vue'
import Sidebar from './components/Layout/Sidebar.vue'
import Footer from './components/Layout/Footer.vue'
</script>

<template>
  <Header />
  <Sidebar />
  <Main />
  <Sidebar />
  <Footer />
</template>

<style>
@import './assets/base.css';

body {
  font-family: sans-serif;
  background: #363636;
  color: #ececec;
}

#app {
  color: #363636;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

</style>
