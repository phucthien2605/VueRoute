<template>
  <div class="text-center">
    <h3>Errors</h3>
    <p>Have some errors.....</p>
    <button class="btn btn-primary" @click="backHome">Back to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "homepage" });
    },
  },
};
</script>

<style>
</style>