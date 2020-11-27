<template>
  <ul class="file-details mt-4 w-64">
    <li class="my-10">
      <button
      class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 px-4 ml-6 border border-panel-light hover:border-gray-500"
      @click="goto('FactionCreation')"
    >
      CREAR UNA EMPRESA
    </button> 
    </li>
  </ul>
</template>
<script>
export default {
  name: "fileMenu",
  props: {
    active: {
      type: String,
      required: true
    }
  },
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
