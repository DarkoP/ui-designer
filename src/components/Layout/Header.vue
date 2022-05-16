<script setup>
import Logo from './Logo.vue';
import NavbarTop from './NavbarTop.vue';
</script>

<template>
  <header>
    <Logo />
    <NavbarTop />
  </header>
</template>

<style scoped>
@import "../../assets/styles/base.css";
@import '../../assets/styles/variables.css';

header {
  margin: 0 1rem;
}

</style>