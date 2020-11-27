<template>
  <div class="files2 flex flex-col flex-no-wrap">
    <!-- <topbar /> -->
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">creación de empresa</h1>
    </div>
    <div class="file-details-content flex flex-row my-16">
      <div
        v-if="success"
        class="successContract bg-panel-dark border border-panel-light"
      >
        <p class="appearance-none text-white bg-panel-dark w-full p-2">
          La empresa {{ this.label }} ha sido creada con éxito.
        </p>
        <button
          class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
          @click="(success = false), (label = ''), (name = ''),goto('FactionConfiguration')" 
        >
          ACEPTAR
        </button>
      </div>
      <!-- <div class="flex flex-wrap p-4">
        <file-menu active="citizen" />
      </div> -->
      <div class="file-content p-4 flex flex-col w-full ml-4">
        <table class="border-b border-panel-dark">
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td></td>
              <td></td>
              <td></td>
              <td class="px-4 py-2">introduce nombre completo de la empresa</td>
              <td></td>
              <td></td>
              <td></td>
              <td class="px-4 py-2">
                introduce nombre abreviado de la empresa
              </td>
              <td class="px-4 py-2"></td>
            </tr>
            <tr></tr>
            <tr class="border-l border-r border-panel-dark">
              <td></td>
              <td></td>
              <td></td>
              <td class="px-4 py-2">
                <input
                  class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                  type="text"
                  v-model="label"
                  placeholder="ej. Badulake"
                />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td class="px-4 py-2 ancho inline-block">
                <input
                  class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                  type="text"
                  v-model="name"
                  placeholder="ej. badu"
                />
              </td>
              <td class="px-4 py-2">
                <button
                  class="button-contract border-panel-normal hover:text-gray-500"
                  @click="factionCreated(name, label)"
                >
                  CREAR EMPRESA
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
/* import topbar from "../components/topbar"; */
import singleFaction from "../mixins/singleFaction";
import formatPrice from "../mixins/formatPrice";
/* import fileMenu from "../components/fileMenu"; */
export default {
  name: "citizen",
  components: {
    /* topbar, */
    /* fileMenu */
  },
  mixins: [formatPrice, singleFaction],
  data: () => {
    return {
      rank: "",
      success: false,
      name: "",
      label: "",
    };
  },
  methods: {
    factionCreated: function (name, label) {
      if (name.trim() !== "" && label.trim() !== "") {
        const faction = {
          name: name,
          label: label
        };
        console.log(faction);
        this.$store.dispatch("EDITNAME", faction);
        this.success = true;
        /* // eslint-disable-next-line no-undef
          mp.trigger("callServerEvent","crearFaccion",{name: this.name , label: this.label}); */
      }
    },
    goto: async function(route) {
      if (route !== this.$route.name) {
        /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
        await this.$router.push({ name: route });
      }
    },
  },
};
</script>
<style lang="scss">
.file-details {
  li {
    border: none;
    padding: 0;
    display: block;
  }
}
tr:nth-child(odd) {
  border: 1px solid #000000;
}
.button-contract {
  width: 155px;
  height: 20px;
  border: 1px solid #000000;
}
.button-remove-note:focus {
  outline: none;
}

.successContract {
  font-size: 1.1em;
  padding: 15px;
  text-align: center;
  position: absolute;
  top: 210px;
  left: 300px;
  width: 550px;
}
.ancho {
  width: 26rem;
}
</style>