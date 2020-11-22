<template>
  <div class="file flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <div class="alertSure bg-panel-dark border border-panel-light" v-if="rank">
      <p class="appearance-none text-white bg-panel-dark w-full p-2">
        Selecciona un rango para {{ name }}:
      </p>
      <div
        class="inline-block mr-4"
        v-for="(rango, key, index) in singleFaction._ranks"
        :key="index"
      >
        <input type="radio" v-model="rankObject" v-bind:value="rango" />
        {{ rango.label }}
      </div>
      <div></div>
      <button
        v-if="rankObject != ''"
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="rankEmployee(id, index, rankObject)"
      >
        ACEPTAR
      </button>
      <button
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="rank = false"
      >
        CANCELAR
      </button>
    </div>
    <div class="alertSure bg-panel-dark border border-panel-light" v-if="show">
      <p class="appearance-none text-white bg-panel-dark w-full p-2">
        ¿Estas segura/o de echar a {{ name }}?
      </p>
      <button
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="dismissEmployee(id, index)"
      >
        ACEPTAR
      </button>
      <button
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="show = false"
      >
        CANCELAR
      </button>
    </div>
    <div class="file-details-content flex flex-row">
      <!-- <div class="flex flex-wrap py-4 pl-4">
        <file-menu active="files" />
      </div> -->
      <div class="file-content py-4 pr-2 flex flex-col w-1/2 separation">
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
      </div>
    </div>
  </div>
</template>
<script>
/* import fileMenu from "../components/fileMenu"; */
import singleFaction from "../mixins/singleFaction";
import formatPrice from "../mixins/formatPrice";
export default {
  name: "information",
  /* components: { fileMenu }, */
  mixins: [singleFaction, formatPrice],
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
};
</script>
<style lang="scss">

</style> */
