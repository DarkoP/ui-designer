<template>
  <div>
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
  </div>
</template>
<script>
const props = {
  title: {
    required: true,
    type: String
  },
  value: {
    required: true
  }
};
export default {
  name: "raw-displayer",
  props,
  computed: {
    valueString() {
      return JSON.stringify(this.value, null, 2);
    }
  }
};
</script>
<style scoped>
@import "../assets/styles/base.css";
@import "../assets/styles/variables.css";
pre {
  text-align: start;
}
</style>