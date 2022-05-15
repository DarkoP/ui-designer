<template>
  <section class="sidebar sidebar-left">
    <header>
      <h3>Sidebar Left</h3>
      <figure class="toggle-sidebar-left opened" @click="toggleLeft()">
        <font-awesome-icon icon="angles-left" />
      </figure>
      <figure class="toggle-sidebar-left closed" @click="toggleLeft()">
        <font-awesome-icon icon="bars" size="2x" bordered />
      </figure>
    </header>
    <section class="sidebar-body opened">
      <p>lorem ipsum</p>
    </section>
    <section class="sidebar-body closed">
      <figure>
        <font-awesome-icon icon="download" />
      </figure>
      <figure>
        <font-awesome-icon icon="download" />
      </figure>
      <figure>
        <font-awesome-icon icon="download" />
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: 'SidebarLeft',

  data() {
    return {
      clicked: true
    }
  },

  props: {
    toggleLeft: Function
  }
}
</script>

<style scoped>
@import '../../assets/styles/variables.css';

.sidebar-left {
  background: var(--yuda-white-trans);
  color: var(--color-black);
  border-radius: 0.25rem;
  left: 1rem;
}

.sidebar header {
  background: var(--color-heading);
  padding: 0.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-body {
  padding: 0.5rem;
}
</style>
