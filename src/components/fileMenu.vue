<template>
  <ul class="file-details mt-4 w-48">
    <!-- <li class="my-10">
      <a
        @click="goto('Information')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'information'
        }"
        >Información General</a
      >
    </li> -->
    <li class="my-10">
      <a
        @click="goto('FilesEmployees')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'files'
        }"
        >Lista Empresas</a
      >
    </li>
    <!-- <li class="my-10">
      <a
        @click="goto('MoneyManagement')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{ 'border-b-2 border-panel-normal': active === 'moneymanagement' }"
        >Gestión Dinero</a
      >
    </li> -->
    <!-- <li class="my-10">
      <a
        @click="goto('Citizen')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'citizen'
        }"
        >Contratar Miembro</a
      >
    </li> -->
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
