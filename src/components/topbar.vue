<template>
  <div class="tob-bar flex flex-row text-center w-full p-2">

    <!-- <button
      class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 px-4 ml-6 border border-panel-light hover:border-gray-500"
      @click="goto('Citizen')"
    >
      CREAR UNA EMPRESA
    </button> -->
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
