<script setup>
import Header from "./components/Layout/Header.vue";
import Main from "./components/Layout/Main.vue";
import Sidebar from "./components/Layout/Sidebar.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<template>
  <Header />
  <Sidebar />
  <Main />
  <Sidebar />
  <Footer />
</template>

<style>
@import "./assets/styles/base.css";
@import "./assets/styles/variables.css";

body {
  background: var(--color-bg-black);
  color: var(--color-white);
}
</style>
