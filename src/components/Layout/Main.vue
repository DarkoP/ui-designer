<template>
  <main>
    <header>
      <h2>
        Main Header
      </h2>
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
  padding:0.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
}

.content {
  padding: 0.5rem;
}
</style>