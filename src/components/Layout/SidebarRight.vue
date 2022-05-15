<template>
  <section class="sidebar sidebar-right">
    <header>
      <figure class="toggle-sidebar-right closed" @click="toggleRight()">
        <font-awesome-icon icon="bars" size="3x" bordered />
      </figure>
      <figure class="toggle-sidebar-right opened" @click="toggleRight()">
        <font-awesome-icon icon="angles-right"/>
      </figure>
      <h3>Sidebar Right</h3>
    </header>
    <section class="sidebar-body opened">
      <p>lorem ipsum</p>
    </section>
    <section class="sidebar-body closed">
      <figure class="nav-icon"><font-awesome-icon icon="screwdriver-wrench" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="eye" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="eye-slash" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="check" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="square-check" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="ellipsis" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="ellipsis-vertical" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="minus" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="plus" /></figure>
      <figure class="nav-icon"><font-awesome-icon icon="pen-to-square" /></figure>
    </section>
  </section>
</template>

<script>
export default {
  name: 'SidebarRight',

  data() {
    return {
      clicked: true
    }
  },

  props: {
    toggleRight: Function
  }
}
</script>

<style scoped>
@import '../../assets/styles/variables.css';

.sidebar-right {
  background: var(--yuda-white-trans);
  color: var(--color-black);
  border-radius: 0.25rem;
  right: 1rem;
}

.sidebar header {
  background: var(--color-heading);
  padding:0.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.svg-inline--fa {
  padding-right: 0.5rem;
}

.sidebar-body {
  padding:0.5rem;
}

.nav-icon {
  padding: 0.5rem 0.25rem;
}
</style>
