<template>
  <div class="filesemployees flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <topbar />
    </div>
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap py-4 pl-4">
        <file-menu active="files" />
      </div>
      <div class="file-content py-4 pr-2 flex flex-col w-1/2 separation">
        <input
          v-model="search"
          class="mt-2 mb-4 appearance-none border border-recto-light w-full p-2 uppercase focus:outline-none placeholder-gray-300 bg-gray-700"
          type="text"
          placeholder="Buscar empresa"
        />
        <table class="border-b border-panel-dark"
        v-if="
              
              filteredList.length > 0
            "
        >
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td></td>
              <td class="px-1 py-2">Nombre de Empresa</td>
              <td class="px-1 py-2">ID de Empresa</td>
              <td class="px-1 py-2"></td>
            </tr>
            <tr></tr>
            <tr
              class="border-l border-r border-panel-dark"
              v-for="(empresa, index) in filteredList"
              :key="index"
              :file="empresa"
            >
              <td></td>
              <td class="px-2 py-2">{{ empresa.name }}</td>
              <td class="px-2 py-2">{{ empresa.id }}</td>
              <td class="px-8 py-2">
                <button
                  :value="index"
                  class="button-dismiss border-panel-light hover:text-gray-500"
                  @click="
                    factionConfig(empresa.id)
                  "
                >
                  Configurar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="border-panel-dark"
        v-else>
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td></td>
              <td class="px-1 py-2">Nombre de Empresa</td>
              <td class="px-1 py-2">ID de Empresa</td>
              <td class="px-1 py-2"></td>
            </tr>
            <tr></tr>
            <td></td>
            <div class="px-1 py-2"><p>no hay coincidencias en la búsqueda.</p></div>
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</template>
<script>
import formatPrice from "../mixins/formatPrice";
import fileMenu from "../components/fileMenu";
import singleFaction from "../mixins/singleFaction";
import topbar from "../components/topbar";
export default {
  name: "filesemployees",
  components: { fileMenu, topbar },
  mixins: [formatPrice, singleFaction],
  data: () => {
    return {
      search: ""
    };
  },
  async mounted() {
    /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
    /* // eslint-disable-next-line no-undef
    mp.trigger("callServerEvent","getAllFactions"); */
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  computed: {
    filteredList() {
      return this.$store.state.factionList.data.filter((resultado) => {
        let d = resultado.name.toLowerCase() + " " + resultado.id.toLowerCase();
        let s = this.search.toLowerCase();
        return d.includes(s);
      });
    },
  },
  methods: {
    factionConfig: async function (id) {
      /* // eslint-disable-next-line no-undef
      mp.trigger("callServerEvent","getFaccion",{id: id}); */
      /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
      await this.$router.push({ name: "FactionConfiguration"});
      console.log(id);
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
.button-rank {
  width: 110px;
  height: 20px;
  border: 1px solid #000000;
}
.button-rank:focus {
  outline: none;
}
.button-dismiss {
  width: 72px;
  height: 20px;
  border: 1px solid #000000;
}
.button-dismiss:focus {
  outline: none;
}
.separation {
  margin-left: 2.4rem;
}
</style>