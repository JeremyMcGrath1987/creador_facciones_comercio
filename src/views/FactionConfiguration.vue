<template>
  <div class="file flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <div class="file-details-content flex flex-row">
      <!-- <div class="flex flex-wrap py-4 pl-4">
        <file-menu active="files" />
      </div> -->
      <div class="file-content py-4 pr-2 flex flex-col w-1/2 separation">
      <label>Nombre Empresa</label>
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="labelFaction"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="nameFaction"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankNameFaction1"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankNameFaction2"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankNameFaction3"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankNameFaction4"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankNameFaction5"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankLabelFaction1"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankLabelFaction2"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankLabelFaction3"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankLabelFaction4"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankLabelFaction5"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankMoneyFaction1"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankMoneyFaction2"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankMoneyFaction3"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankMoneyFaction4"
          placeholder="INTRODUCE NOMBRE RANGO"
        />
        <input
          class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
          type="text"
          v-model="rankMoneyFaction5"
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
  data: () => {
    return {
      nameFaction: "",
      labelFaction: "",
      rankFaction: [],
      rankNameFaction1: "",
      rankNameFaction2: "",
      rankNameFaction3: "",
      rankNameFaction4: "",
      rankNameFaction5: "",
      rankLabelFaction1: "",
      rankLabelFaction2: "",
      rankLabelFaction3: "",
      rankLabelFaction4: "",
      rankLabelFaction5: "",
      rankMoneyFaction1: 0,
      rankMoneyFaction2: 0,
      rankMoneyFaction3: 0,
      rankMoneyFaction4: 0,
      rankMoneyFaction5: 0,
      
    };
  },
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
    return this.nameFaction=this.singleFaction._name, this.labelFaction=this.singleFaction._label, this.rankNameFaction1=this.singleFaction._ranks[0].name, this.rankNameFaction2=this.singleFaction._ranks[1].name, this.rankNameFaction3=this.singleFaction._ranks[2].name, this.rankNameFaction4=this.singleFaction._ranks[3].name, this.rankNameFaction5=this.singleFaction._ranks[4].name, this.rankLabelFaction1=this.singleFaction._ranks[0].label, this.rankLabelFaction2=this.singleFaction._ranks[1].label, this.rankLabelFaction3=this.singleFaction._ranks[2].label, this.rankLabelFaction4=this.singleFaction._ranks[3].label, this.rankLabelFaction5=this.singleFaction._ranks[4].label, this.rankMoneyFaction1=this.singleFaction._ranks[0].money, this.rankMoneyFaction2=this.singleFaction._ranks[1].money, this.rankMoneyFaction3=this.singleFaction._ranks[2].money, this.rankMoneyFaction4=this.singleFaction._ranks[3].money, this.rankMoneyFaction5=this.singleFaction._ranks[4].money ;
  },
};
</script>
<style lang="scss">

</style>
