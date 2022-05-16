<template>
  <section class="sidebar sidebar-left">
    <header>
      <h3>Sidebar Left</h3>
      <figure class="toggle-sidebar-left opened" @click="toggleLeft()">
        <font-awesome-icon icon="angles-left" />
      </figure>
      <figure class="toggle-sidebar-left closed" @click="toggleLeft()">
        <font-awesome-icon icon="bars" size="3x" bordered />
      </figure>
    </header>
    <section class="sidebar-body opened">
      
      Sites Tree

    </section>
    <section class="sidebar-body closed">
      <figure class="nav-icon"><font-awesome-icon icon="floppy-disk" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="folder" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="folder-open" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="file-zipper" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="download" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="upload" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="clone" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="pencil" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="sliders" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="trash" size="2x"/></figure>
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

.nav-icon {
  padding: 0.5rem 0.25rem;
}
</style>
