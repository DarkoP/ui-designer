<template>
  <main>
    <header>
      <h2>
        Main Header
      </h2>
      <nav class="header-nav">
        <ul class="left">
          <li class="nav-icon"><figure><font-awesome-icon icon="floppy-disk" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="folder" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="folder-open" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="file-zipper" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="download" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="upload" /></figure></li>
        </ul>
        <ul class="center">
          <li class="nav-icon"><figure><font-awesome-icon icon="clone" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="pencil" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="sliders" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="trash" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="screwdriver-wrench" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="eye" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="eye-slash" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="check" /></figure></li>
        </ul>
        <ul class="right">
          <li class="nav-icon"><figure><font-awesome-icon icon="square-check" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="ellipsis" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="ellipsis-vertical" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="minus" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="plus" /></figure></li>
          <li class="nav-icon"><figure><font-awesome-icon icon="pen-to-square" /></figure></li>
        </ul>
      </nav>
    </header>
    <section class="content">


      <div class="row">
        <!-- <div class="col-3">
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
        </div> -->

        <div class="col-3">
          <h3>Draggable 2</h3>
          <draggable
            class="dragArea list-group"
            :list="list2"
            group="people"
            @change="log"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>

        <RawDisplayer class="col-3" :value="list2" title="List 2" />
      </div>


    </section>
  </main>
</template>

<script>
import draggable from 'vuedraggable'
import RawDisplayer from '../RawDisplayer.vue'

let idGlobal = 8;

export default {
  name: "App",
  order: 3,
  components: {
    draggable,
    RawDisplayer
},
  data() {
    return {
      list2: [
      ]
    };
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
  }
};
</script>

<style scoped>
@import '../../assets/styles/variables.css';

main {
  background: var(--color-bg-white);
  color: var(--color-black);
  margin-left: 3rem;
  margin-right: 3rem;
  height: 100%;
  border-radius: 0.25rem;
  min-width: 22.5rem;
}

header {
  background: var(--yoda-bg-2);
  color: var(--color-white);
  padding: 0.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
}
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--yoda-bg-2-thin);
  margin: 0.5rem -0.5rem -0.5rem -0.5rem;
  padding: 0.25rem 0.5rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul.left {
  text-align: start;
}
ul.right {
  text-align: end;
}
ul.center {
  text-align:center;
}

li {
  display: inline-block;
  padding: 0.25rem;
}

.content {
  padding: 0.5rem;
}

.list-group-item {
  cursor: move;
}
</style>