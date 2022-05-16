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

      <h3>Draggable 1</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneDog"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>

      <RawDisplayer class="col-3" :value="list1" title="List 1" />
      
    </section>
    <section class="sidebar-body closed">
      <figure class="nav-icon"><font-awesome-icon icon="screwdriver-wrench" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="eye" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="eye-slash" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="check" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="square-check" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="ellipsis" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="ellipsis-vertical" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="minus" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="plus" size="2x"/></figure>
      <figure class="nav-icon"><font-awesome-icon icon="pen-to-square" size="2x"/></figure>
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
        { name: "dog 1", id: 1 },
        { name: "dog 2", id: 2 },
        { name: "dog 3", id: 3 },
        { name: "dog 4", id: 4 }
      ],
    }
  },

  props: {
    toggleRight: Function
  },
  
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },
    cloneDog({ id }) {
      return {
        id: idGlobal++,
        name: `cat ${id}`
      };
    }
  },

  components: {
    draggable,
    RawDisplayer
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

.list-group-item {
  cursor: move;
}

</style>
