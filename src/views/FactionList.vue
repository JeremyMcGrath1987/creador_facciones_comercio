<template>
  <div class="filesemployees flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <topbar />
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
        <table class="border-b border-panel-dark">
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td></td>
              <td class="px-1 py-2">Nombre de Empresa</td>
              <td class="px-1 py-2">ID de Empresa</td>
              <td class="px-1 py-2">Rango en la banda</td>
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
                  @click=" id=empresa.id, goto('FactionConfiguration') "
                >
                  Configurar
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
      search: "",
      rankObject: "",
      rank: false,
      show: false,
      id: "",
      index: -1,
      name: "",
    };
  },
  async mounted() {
    /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
    /* // eslint-disable-next-line no-undef
    mp.trigger("callServerEvent","getFaccion",{id: this.id}); */
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  computed: {
    filteredList() {
      return this.$store.state.employees.data.filter((resultado) => {
        let d = resultado.name.toLowerCase() + " " + resultado.id.toLowerCase();
        let s = this.search.toLowerCase();
        return d.includes(s);
        
      });
    },
  },
  methods: {
    goto: async function(route) {
      if (route !== this.$route.name) {
        /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
        await this.$router.push({ name: route });
      }
    },
    showSure: function (id, index, name) {
      return (
        (this.show = true),
        (this.id = id),
        (this.index = index),
        (this.name = name)
      );
    },
    showRank: function (id, index, name) {
      return (
        (this.rank = true),
        (this.id = id),
        (this.index = index),
        (this.name = name)
      );
    },
    rankEmployee: function (id, index, rank) {
      /* // eslint-disable-next-line no-undef
      mp.trigger("changeRankGang", id, rank.id); */
      const info = {
        index: index,
        rank: rank.label,
      };
      this.$store.dispatch("employees/ASCENDEMPLOYEE", info);

      return (this.rank = false);
    },
    dismissEmployee: function (id, index) {
      /* // eslint-disable-next-line no-undef
      mp.trigger("despedirGang", id); */
      this.$store.dispatch("employees/DISMISSEMPLOYEE", index);
      return (this.show = false);
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