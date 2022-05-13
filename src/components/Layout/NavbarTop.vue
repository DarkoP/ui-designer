<script>

</script>

<template>
  <nav>
    <ul>
      <font-awesome-icon icon="floppy-disk" size="2x"/>
    </ul>
    <ul>
      <li>
        <font-awesome-icon icon="desktop" size="3x" />
      </li>
      <li>
        <font-awesome-icon icon="mobile-screen-button" size="3x" />
      </li>
    </ul>
    <ul>
      <li>Link</li>
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
}

li {
  display: inline-block;
  margin: 0.25rem;
}
</style>