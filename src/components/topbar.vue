<template>
  <div class="tob-bar flex flex-row text-center w-full p-2">
    <h1 class="mx-auto font-bold text-2xl">
      Creador y Gestión de empresas de san andreas
    </h1>
    </div>
</template>
<script>
export default {
  name: "topbar",
  methods: {
    goto: async function(route) {
      if (route !== this.$route.name) {
        /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
        await this.$router.push({ name: route });
      }
    }
  }
};
</script>
<style lang="scss">
</style>
