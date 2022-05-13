<template>
  <section class="sidebar">
    <header>
      <h2>Sidebar Header</h2>
      <font-awesome-icon icon="xmark" size="2x"/>
    </header>
    <section>
      <p>lorem ipsum</p>
    </section>
  </section>
</template>

<style scoped>
@import '../../assets/styles/variables.css';

.sidebar {
  background: var(--color-bg-white);
  color: var(--color-black);
}

.sidebar header {
  background: var(--color-heading);
}
</style>
