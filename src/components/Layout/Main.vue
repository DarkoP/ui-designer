<template>
  <main>
    <header>
      <h2>
        Main Header
      </h2>
      <nav class="main-header__nav--top">
        <ul class="left">
          <li><button class="nav-button active"><figure class="nav-icon"><font-awesome-icon icon="floppy-disk" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="folder" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="folder-open" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="file-zipper" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="download" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="upload" /></figure></button></li>
        </ul>
        <ul class="center">
          <li><button class="nav-button active"><figure class="nav-icon"><font-awesome-icon icon="clone" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="pencil" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="sliders" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="trash" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="screwdriver-wrench" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="eye" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="eye-slash" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="check" /></figure></button></li>
        </ul>
        <ul class="right">
          <li><button class="nav-button active"><figure class="nav-icon"><font-awesome-icon icon="square-check" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="ellipsis" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="ellipsis-vertical" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="minus" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="plus" /></figure></button></li>
          <li><button class="nav-button"><figure class="nav-icon"><font-awesome-icon icon="pen-to-square" /></figure></button></li>
        </ul>
      </nav>
    </header>
    <section class="content">

      <h1>Page 1</h1>
      <draggable
        class="dragArea list-group"
        :list="debuglist"
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

      <div class="debug-list">
        <RawDisplayer class="col-3" :value="debuglist" title="Page 1" />
      </div>

    </section>
  </main>
</template>

<script>
import draggable from 'vuedraggable'
import RawDisplayer from '../RawDisplayer.vue'

// let idGlobal = 8;

export default {
  name: "App",
  order: 3,
  components: {
    draggable,
    RawDisplayer
},
  data() {
    return {
      debuglist: [
      ]
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },
    cloneDog({ id, name }) {
      return {
        // id: idGlobal++,
        id: `${id}`,
        name: `cat ${id}`
      };
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/base.css";
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
.main-header__nav--top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--yoda-bg-2-thin);
  margin: 0.5rem -0.5rem -0.5rem -0.5rem;
  padding: 0.25rem 0.5rem;
}

.content {
  position: relative;
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

.content {
  padding: 0.5rem;
  height: inherit;
}

.dragArea {
  min-height: 2rem;
  outline: 1px dashed;
}

.list-group-item {
  cursor: move;
}

.debug-list {
  float: right;
  position: absolute;
  top: 0;
  right: 0;
  font-size: x-small;
}


</style>