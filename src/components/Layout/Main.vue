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
      <p>Main Content</p>
      <a href="#">limk das ist ein link</a>
    </section>
  </main>
</template>

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
</style>