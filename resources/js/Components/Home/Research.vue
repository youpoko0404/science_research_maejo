<template>
  <div>
    <p>ผลการค้นหา</p>
    {{ research }}
  </div>
</template>

<script>
export default {
  name: "Research",
  props: {
    research: String,
  },
  data() {
    return {};
  },
};
</script>
