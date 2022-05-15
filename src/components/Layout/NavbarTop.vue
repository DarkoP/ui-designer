<script>

</script>

<template>
  <nav>
    <ul class="left">
      <li class="nav-icon"><figure><font-awesome-icon icon="floppy-disk" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="floppy-disk" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="floppy-disk" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="floppy-disk" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="floppy-disk" size="2x"/></figure></li>
    </ul>
    <ul class="center">
      <li class="nav-icon"><figure><font-awesome-icon icon="desktop" size="3x" /></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="mobile-screen-button" size="3x" /></figure></li>
    </ul>
    <ul class="right">
      <li class="nav-icon"><figure><font-awesome-icon icon="download" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="download" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="download" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="download" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="download" size="2x"/></figure></li>
      <li class="nav-icon"><figure><font-awesome-icon icon="download" size="2x"/></figure></li>
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