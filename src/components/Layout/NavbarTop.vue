<script>

</script>

<template>
  <nav>
    <ul class="left">
      <li class="nav-icon"><figure><font-awesome-icon icon="floppy-disk" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="folder" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="folder-open" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="file-zipper" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="download" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="upload" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="clone" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="pencil" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="sliders" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="trash" size="2x"/></figure></li>
    </ul>
    <ul class="center">
      <li class="nav-icon"><figure><font-awesome-icon icon="desktop" size="3x" /></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="mobile-screen-button" size="3x" /></figure></li>
    </ul>
    <ul class="right">
      <li class="nav-icon"><figure><font-awesome-icon icon="screwdriver-wrench" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="eye" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="eye-slash" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="check" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="square-check" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="ellipsis" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="ellipsis-vertical" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="minus" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="plus" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="pen-to-square" size="2x"/></figure></li>
    </ul>
  </nav>
</template>

<style scoped>
@import '../../assets/styles/variables.css';

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>