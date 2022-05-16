<template>
    <!-- <h1>User Name: {{clicked}}</h1> -->
  <Header />
  <section class="content-wrapper" :class="{'show-sidebar-left': clickedLeft, 'show-sidebar-right': clickedRight}">
    <SidebarLeft :toggleLeft="getToggleLeft" />
    <Main />
    <SidebarRight :toggleRight="getToggleRight"/>
  </section>
  <Footer />
</template>

<script>
import Header from "./components/Layout/Header.vue"
import Main from "./components/Layout/Main.vue"
import SidebarLeft from "./components/Layout/SidebarLeft.vue"
import SidebarRight from "./components/Layout/SidebarRight.vue"
import Footer from "./components/Layout/Footer.vue"
import draggable from 'vuedraggable'

export default {
  name: "App",

  data() {
    return {
      clickedLeft: true,
      clickedRight: true
    }
  },

  created() {
    window.addEventListener("resize", this.myEventHandler);
    window.addEventListener("load", this.myEventHandler);
  },

  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
    window.removeEventListener("load", this.myEventHandler);
  },

  methods: {
    getToggleLeft() {
      this.clickedLeft = !this.clickedLeft 
    },

    getToggleRight() {
      this.clickedRight = !this.clickedRight
    },

    myEventHandler(e) {
      if (window.innerWidth < 970 ) {
        this.clickedLeft = false
        this.clickedRight = false
      }
    }
  },

  components: {
    Header,
    Main,
    SidebarLeft,
    SidebarRight,
    Footer,
    draggable
  }
}
</script>

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

.content {
  overflow-y: auto;
  max-height: 67vh;
}

.sidebar-body {
  overflow-y: auto;
  max-height: 70vh;
}

@media (min-height: 44rem) {
  .content-wrapper {
    height: 84vh;
  }
  .content{
      overflow-y: auto;
      max-height: 72vh;
  }

  .sidebar-body {
      overflow-y: auto;
      max-height: 75vh;
  }
}

@media (min-height: 50rem) {
  .content-wrapper {
    height: 86vh;
  }

  .content {
    overflow-y: auto;
    max-height: 75vh;
  }

  .sidebar-body  {
    overflow-y: auto;
    max-height: 78vh;
  }
}

@media (min-height: 60rem) {
  .content-wrapper {
    height: 88vh;
  }
  .content{
    overflow-y: auto;
    max-height: 77vh;
  }

  .sidebar-body {
    overflow-y: auto;
    max-height: 80vh;
  }
}

@media (min-height: 70rem) {
  .content-wrapper {
    height: 90vh;
  }
  .content{
    overflow-y: auto;
    max-height: 79vh;
  }

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
  width: 2.75rem;
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

.sidebar-body.closed {
  overflow: hidden;
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
