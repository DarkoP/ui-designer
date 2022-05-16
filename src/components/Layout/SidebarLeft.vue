<template>
  <section class="sidebar sidebar-left">
    <header>
      <h3>Sidebar Left</h3>
      <button class="nav-button toggle-sidebar-left opened">
        <figure class="nav-icon" @click="toggleLeft()">
          <font-awesome-icon icon="angles-left" />
        </figure>
      </button>
      <button class="nav-button toggle-sidebar-left closed">
        <figure class="nav-icon" @click="toggleLeft()">
          <font-awesome-icon icon="bars" size="3x" bordered />
        </figure>
      </button>
    </header>
    <section class="sidebar-body opened">
      <nav class="sidebar-left__nav--top">
        <ul>
          <li><button class="nav-button active"><figure class="nav-icon"><font-awesome-icon icon="floppy-disk" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="folder" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="folder-open" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="file-zipper" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="download" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="upload" size="2x"/></figure></button></li>
        </ul>
      </nav>
      
      Sites Tree

    </section>
    <section class="sidebar-body closed">
      <nav class="sidebar-left__nav--closed">
      <ul>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="floppy-disk" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="folder" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="folder-open" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="file-zipper" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="download" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="upload" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="clone" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="pencil" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="sliders" size="2x"/></figure></button></li>
        <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="trash" size="2x"/></figure></button></li>
      </ul>
      </nav>
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
@import "../../assets/styles/base.css";
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

.sidebar-left__nav--top {
  margin: -0.5rem -0.5rem 0 -0.5rem;
  padding: 0 0.25rem;
  background: rgb(209, 209, 209); /* TODO: temp */ 
}

.sidebar-left__nav--top .nav-button.active {
  position: relative;
  top: 2px;
}
.sidebar-left__nav--top .nav-button.active .nav-icon {
  position: relative;
  bottom: 2px;
}

.sidebar-body {
  padding: 0.5rem;
}
</style>
