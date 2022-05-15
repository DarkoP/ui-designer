<script setup>
import Header from "./components/Layout/Header.vue";
import Main from "./components/Layout/Main.vue";
import SidebarLeft from "./components/Layout/SidebarLeft.vue";
import SidebarRight from "./components/Layout/SidebarRight.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<template>
  <Header />
  <section class="content-wrapper show-sidebar-left show-sidebar-right">
    <SidebarLeft />
    <Main />
    <SidebarRight />
  </section>
  <Footer />
</template>

<style>
@import "./assets/styles/base.css";
@import "./assets/styles/variables.css";

body {
  background: var(--color-bg-black);
  color: var(--color-white);
}

.content-wrapper {
  height: 82vh;
} 
.content,
.sidebar-body {
  overflow-y: auto;
  max-height: 70vh;
}

@media (min-height: 44rem) {
  .content-wrapper {
    height: 84vh;
  }
  .content,
  .sidebar-body {
      overflow-y: auto;
      max-height: 75vh;
  }
}

@media (min-height: 50rem) {
  .content-wrapper {
    height: 86vh;
  }

  .content,
  .sidebar-body  {
    overflow-y: auto;
    max-height: 78vh;
  }
}

@media (min-height: 60rem) {
  .content-wrapper {
    height: 88vh;
  }
  .content,
  .sidebar-body {
    overflow-y: auto;
    max-height: 80vh;
  }
}

@media (min-height: 70rem) {
  .content-wrapper {
    height: 90vh;
  }
  .content,
  .sidebar-body {
    overflow-y: auto;
    max-height: 82vh;
  }
}

.sidebar {
  height: 100%;
  width: var(--width-sidebar);
  position: absolute;
  top: 0;
  width: 2.25rem;
  transition: 0.5s;
}

.content-wrapper main {
  margin-left: 6rem;
  margin-right: 6rem;
  transition: 0.5s;
}

/* Closed */
.sidebar h3,
.sidebar-body.opened,
.sidebar-left .opened,
.sidebar-right .opened,
.show-sidebar-left .sidebar-left .closed,
.show-sidebar-right .sidebar-right .closed {
  display: none;
}

/* Opend */
.show-sidebar-left .sidebar-left h3,
.show-sidebar-left .sidebar-left .opened,
.show-sidebar-right .sidebar-right h3,
.show-sidebar-right .sidebar-right .opened {
  display: block;
}

/* Left */
.show-sidebar-left .sidebar-left {
  width: var(--width-sidebar);
  background: var(--yuda-white);
  transition: 0.5s;
}
.show-sidebar-left main {
  margin-left: calc(var(--width-sidebar) + 3rem);
  transition: 0.5s;
}

/* Right */
.show-sidebar-right .sidebar-right {
  width: var(--width-sidebar);
  background: var(--yuda-white);
  transition: 0.5s;
}
.show-sidebar-right main {
  margin-right: calc(var(--width-sidebar) + 3rem);
  transition: 0.5s;
}
</style>
