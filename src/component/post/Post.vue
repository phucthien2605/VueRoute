<template>
  <div class="mt-3">
    <h1 class="text-center">List Post</h1>
    <p class="text-center">This is area to manage list post of website</p>
    <hr />
    <button class="btn btn-success btn-block" @click="backHome">
      Go to HomePage
    </button>

    <router-view />
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