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
      <nav class="sidebar-right__nav--top">
        <ul>
          <li><button class="nav-button active"><figure class="nav-icon"><font-awesome-icon icon="screwdriver-wrench" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="eye" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="eye-slash" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="check" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="square-check" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="ellipsis" size="2x"/></figure></button></li>
        </ul>
      </nav>

      <h3>Komponents</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>

      <!-- Debug -->
      <!-- <RawDisplayer class="col-3" :value="list1" title="List 1" /> -->
      
    </section>
    <section class="sidebar-body closed">
      <nav class="sidebar-right__nav--closed">
        <ul>
          <li><button class="nav-button active"><figure class="nav-icon"><font-awesome-icon icon="screwdriver-wrench" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="eye" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="eye-slash" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="check" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="square-check" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="ellipsis" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="ellipsis-vertical" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="minus" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="plus" size="2x"/></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="pen-to-square" size="2x"/></figure></button></li>
        </ul>
      </nav>
    </section>
  </section>
</template>

<script>
import draggable from 'vuedraggable'
import RawDisplayer from '../RawDisplayer.vue'

let idGlobal = 8;

export default {
  name: 'SidebarRight',

  data() {
    return {
      clicked: true,
      list1: [
        { name: "Accordion", id: 1 },
        { name: "Alert", id: 2 },
        { name: "Badge", id: 3 },
        { name: "Bradcrumb", id: 4 },
        { name: "Button", id: 5 },
        { name: "Card", id: 6 },
        { name: "Checkbox", id: 7 },
        { name: "Data Picker", id: 8 },
        { name: "Time Picker", id: 9 },
        { name: "Icons", id: 10 },
        { name: "Input", id: 11 },
        { name: "List", id: 12 },
        { name: "Modal", id: 13 },
        { name: "Radio", id: 14 },
        { name: "Searchbar", id: 15 },
        { name: "Select", id: 16 },
        { name: "Toast", id: 17 },
        { name: "Toggle", id: 18 },
      ],
    }
  },

  props: {
    toggleRight: Function
  },
  
  methods: {
    // log: function(evt) {
    //   window.console.log(evt);
    // },
    // cloneDog({ id, name }) {
    //   return {
    //     id: idGlobal++,
    //     name: `cat ${id} ${name}`
    //   };
    // }
  },

  components: {
    draggable,
    RawDisplayer
  }
}
</script>

<style scoped>
@import "../../assets/styles/base.css";
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
.sidebar-right__nav--top {
  margin: -0.5rem -0.5rem 0 -0.5rem;
  padding: 0 0.25rem;
  background: rgb(209, 209, 209); /* TODO: temp */ 
}


.sidebar-right__nav--top .nav-button.active {
  position: relative;
  top: 2px;
}
.sidebar-right__nav--top .nav-button.active .nav-icon {
  position: relative;
  bottom: 2px;
}

.sidebar-body {
  padding:0.5rem;
}

.list-group-item {
  cursor: move;
}

</style>
