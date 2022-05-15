<template>
  <section class="sidebar sidebar-right">
    <header>
      <figure class="toggle-sidebar-right closed" @click="toggleRight()">
        <font-awesome-icon icon="bars" size="2x" bordered />
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
      <figure><font-awesome-icon icon="download" /></figure>
      <figure><font-awesome-icon icon="download" /></figure>
      <figure><font-awesome-icon icon="download" /></figure>
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
</style>
