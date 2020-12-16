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
      <div
        class="file-content py-4 flex flex-col w-1/2 separation margenIzqContenido"
      >
        <div class="containerNames">
          <div class="file-content p-4 flex flex-col containerFloat">
            <table class="border-b border-panel-dark">
              <tbody>
                <tr class="border border-panel-dark font-bold bg-panel-dark">
                  <td class="px-4 py-2">NOMBRE EMPRESA</td>
                  <td></td>
                </tr>
                <tr class="border-l border-r border-panel-dark">
                  <td class="px-4 py-2">
                    <input
                      class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                      type="text"
                      v-model="labelFaction"
                      placeholder="INTRODUCE NOMBRE"
                    />
                  </td>
                  <td class="px-4 py-2">
                    <button
                      class="button-changeNames border-panel-normal hover:text-gray-500"
                      @click="changeLabel(nameFaction, labelFaction)"
                    >
                      ACTUALIZAR NOMBRE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="file-content p-4 flex flex-col w-1/2">
            <table class="border-b border-panel-dark">
              <tbody>
                <tr class="border border-panel-dark font-bold bg-panel-dark">
                  <td class="px-4 py-2">NOMBRE EMPRESA abreviado</td>
                  <td></td>
                </tr>
                <tr class="border-l border-r border-panel-dark">
                  <td class="px-4 py-2">
                    <input
                      class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                      type="text"
                      v-model="nameFaction"
                      placeholder="INTRODUCE NOMBRE ABREVIADO"
                    />
                  </td>
                  <td class="px-4 py-2">
                    <button
                      class="button-changeNames border-panel-normal hover:text-gray-500"
                      @click="changeName(nameFaction, labelFaction)"
                    >
                      ACTUALIZAR ABREVIADO
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="file-content p-4 flex flex-col w-full margenIzq">
          <table class="border-b border-panel-dark">
            <tbody>
              <tr class="border border-panel-dark font-bold bg-panel-dark">
                <td class="px-4 py-2">nombre rango</td>
                <td class="px-4 py-2">rango abreviado</td>
                <td class="px-4 py-2">sueldo rango</td>
                <td></td>
              </tr>
              <tr class="border-l border-r border-panel-dark">
                <td class="px-4 py-2">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                    type="text"
                    placeholder="ej. Jefe de Tienda"
                    v-model="rankLabel"
                  />
                </td>
                <td class="px-4 py-2 ancho">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                    type="text"
                    placeholder="ej. jefe"
                    v-model="rankName"
                  />
                </td>
                <td class="px-4 py-2 ancho">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                    type="number"
                    placeholder="ej. 450"
                    v-model="rankMoney"
                  />
                </td>
                <td class="px-4 py-2">
                  <button
                    class="button-createRank border-panel-normal hover:text-gray-500"
                    @click="rankCreated(rankName, rankLabel, rankMoney)"
                  >
                    CREAR RANGO
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="prueba2">
          <div class="file-content p-4 flex flex-col prueba3">
            <table
              class="border-b border-panel-dark"
              v-if="
                Array.isArray(singleFaction._ranks) &&
                singleFaction._ranks.length > 0
              "
            >
              <tbody>
                <tr class="border border-panel-dark font-bold bg-panel-dark">
                  <td class="px-4 py-2">Rango</td>
                  <td class="px-4 py-2">Id</td>
                  <td class="px-4 py-2">Sueldo</td>
                  <!-- <td></td> -->
                </tr>
                <tr
                  class="border-l border-r border-panel-dark"
                  v-for="(rango, index) in singleFaction._ranks"
                  :key="index"
                >
                  <td class="px-4 py-2">{{ rango.label }}</td>
                  <td class="px-4 py-2">{{ rango.id }}</td>
                  <td class="px-4 py-2 w-1/6">
                    {{ formatPrice(rango.money) }} $
                  </td>
                  <!-- <td class="px-4 py-2 w-1/6">
                    <button
                      class="button_rank border-panel-light hover:text-gray-500"
                      @click="
                        (editRank = true),
                          (categoryRank = rango.id),
                          (labelRank = rango.label),
                          (indice = index)
                      "
                    >
                      EDITAR RANGO
                    </button>
                  </td> -->
                </tr>
              </tbody>
            </table>
            <table class="border-panel-dark" v-else>
              <tbody>
                <tr class="border border-panel-dark font-bold bg-panel-dark">
                  <td class="px-4 py-2">Rango</td>
                  <td class="px-4 py-2">Sueldo</td>
                  <td></td>
                </tr>
                <div class="px-4 py-2 w-56"><p>no hay rangos creados.</p></div>
              </tbody>
            </table>
          </div>
          <div class="file-content p-4 flex flex-col prueba1">
            <table
              class="border-b border-panel-dark"
              v-if="Object.keys(singleFaction._spawnVehicles).length > 0"
            >
              <tbody>
                <tr class="border border-panel-dark font-bold bg-panel-dark">
                  <td class="px-4 py-2">Garajes</td>
                  <td></td>
                </tr>
                <tr
                  class="border-l border-r border-panel-dark"
                  v-for="(value, key, index) in singleFaction._spawnVehicles"
                  :key="index"
                >
                  <td class="px-4 py-2">{{ key }}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table class="border-panel-dark" v-else>
              <tbody>
                <tr class="border border-panel-dark font-bold bg-panel-dark">
                  <td class="px-4 py-2">Garajes</td>
                  <td></td>
                </tr>
                <div class="px-4 py-2 w-56"><p>no hay garajes.</p></div>
              </tbody>
            </table>
          </div>
        </div>
        <div class="file-content p-4 flex flex-col w-full margenIzq">
          <table class="border-b border-panel-dark">
            <tbody>
              <tr class="border border-panel-dark font-bold bg-panel-dark">
                <td class="px-4 py-2">Tipo de punto</td>
                <td v-if="punto === 'garaje'">Nombre del Garaje</td>
                <td class="px-4 py-2">Coord X</td>
                <td class="px-4 py-2">Coord Y</td>
                <td class="px-4 py-2">Coord Z</td>
                <td class="px-4 py-2 ancho">Rango Mínimo</td>
                <td></td>
              </tr>
              <tr class="border-l border-r border-panel-dark">
                <td class="px-2 py-2">
                  <div class="w-32">
                    <input
                      class="inline-block mr-1"
                      type="radio"
                      name="tipo"
                      v-model="punto"
                      v-bind:value="'inventario'"
                    />Inventario
                  </div>
                  <div>
                    <input
                      class="inline-block"
                      type="radio"
                      name="tipo"
                      v-model="punto"
                      v-bind:value="'garaje'"
                    />
                    Garaje
                  </div>
                  <div>
                    <input
                      class="inline-block"
                      type="radio"
                      name="tipo"
                      v-model="punto"
                      v-bind:value="'gestion'"
                    />
                    Gestión
                  </div>
                  <div>
                    <input
                      class="inline-block"
                      type="radio"
                      name="tipo"
                      v-model="punto"
                      v-bind:value="'ropa'"
                    />
                    Ropa
                  </div>
                </td>
                <td v-if="punto === 'garaje'">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700 inputStation"
                    type="text"
                    v-model="station"
                  />
                </td>
                <td class="px-4 py-2">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700 inputCoords"
                    type="number"
                    v-model="x"
                  />
                </td>
                <td class="px-4 py-2 ancho">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700 inputCoords"
                    type="number"
                    v-model="y"
                  />
                </td>
                <td class="px-4 py-2 ancho">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700 inputCoords"
                    type="number"
                    v-model="z"
                  />
                </td>
                <td class="px-4 py-2 ancho">
                  <div
                    class="w-32"
                    v-for="(rango, key, index) in singleFaction._ranks"
                    :key="index"
                  >
                    <input
                      type="radio"
                      v-model="rankId"
                      v-bind:value="rango.id"
                    />
                    {{ rango.label }}
                  </div>
                </td>
                <td class="px-4 py-2">
                  <button
                    class="button-coords border-panel-normal hover:text-gray-500"
                    @click="callTriggerPosition()"
                  >
                    Coordenadas Actuales
                  </button>
                  <button
                    class="button-coords border-panel-normal hover:text-gray-500 mt-4"
                    @click="createPoint(x, y, z, punto, station)"
                  >
                    Crear punto
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- CREAR UN V-FOR DE TABLE CON TODAS LAS _COORDS QUE HAYA-->
        </div>
        <div class="file-content p-4 flex flex-col w-1/2">
          <table class="border-b border-panel-dark">
            <tbody>
              <tr class="border border-panel-dark font-bold bg-panel-dark">
                <td class="px-4 py-2">Tipo</td>
                <td class="px-4 py-2">X</td>
                <td class="px-4 py-2">Y</td>
                <td class="px-4 py-2">Z</td>
                <td class="px-4 py-2">Rango</td>
                <td class="px-4 py-2">Garaje</td>
                <td class="px-4 py-2"></td>
              </tr>
              <tr
                class="border-l border-r border-panel-dark"
                v-for="(coords, key, index) in singleFaction._coords"
                :key="index"
              >
                <td class="px-4 py-2">{{ coords.type }}</td>
                <td class="px-4 py-2">{{ coords.pos.x }}</td>
                <td class="px-4 py-2">{{ coords.pos.y }}</td>
                <td class="px-4 py-2">{{ coords.pos.z }}</td>
                <td class="px-4 py-2">{{ coords.minRank }}</td>
                <td v-if="coords.station !== false" class="px-4 py-2">
                  {{ coords.station }}
                </td>
                <td v-else class="px-4 py-2"></td>
                <td class="px-4 py-2"><button>X</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="w-250 text-center">
          <button
            class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-2 border border-panel-light hover:border-gray-500 w-64"
            @click="goto('FactionList')"
          >
            INICIO
          </button>
        </div>
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
      rankLabel: "",
      rankName: "",
      rankMoney: "",
      x: 0,
      y: 0,
      z: 0,
      punto: undefined,
      rankId: undefined,
      station: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
    return (
      (this.nameFaction = this.singleFaction._name),
      (this.labelFaction = this.singleFaction._label)
    );
  },
  methods: {
    changeName: function (name, label) {
      console.log(name, label);
    },
    changeLabel: function (name, label) {
      console.log(name, label);
    },
    createPoint: async function (x, y, z, punto, station) {

      if(punto !== undefined & x !== "" & y !== "" & z !== "" & this.rankId !== undefined){
        if (punto === "garaje") {
          // eslint-disable-next-line no-undef
          mp.trigger("callServerEvent","crearStation",JSON.stringify({name: this.singleFaction._name, station: station}));
        }
        if (punto !== "garaje") station = false;
        // eslint-disable-next-line no-undef
        mp.trigger("callServerEvent","crearCoords",JSON.stringify({name: this.singleFaction._name, type: punto, pos: {x: x, y: y, z: z}, minRank: this.rankId , station: station}));
      }
      this.station = "";
      this.punto = undefined;
      this.rankId = undefined;
      this.x = 0;
      this.y = 0;
      this.z = 0;
    },
    callTriggerPosition: function () {
      // eslint-disable-next-line no-undef
      mp.trigger("getPosition");
      this.x = this.$store.state.coords.data.x;
      this.y = this.$store.state.coords.data.y;
      this.z = this.$store.state.coords.data.z;
    },
    rankCreated: function (name, label, money) {
      if (
        name.trim() !== "" &&
        label.trim() !== "" &&
        parseInt(money.trim()) >= 0
      ) {
        /* const rank = {
          name: name,
          label: label,
          money: parseInt(money),
        };
        this.$store.dispatch("RANKCREATED", rank); */
        // eslint-disable-next-line no-undef
        mp.trigger("callServerEvent","crearRank",JSON.stringify({factionName: this.singleFaction._name,name: name, label: label, money: money}));
        this.rankLabel = "";
        this.rankName = "";
        this.rankMoney = "";
      }
    },
    goto: async function (route) {
      if (route !== this.$route.name) {
        /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
        await this.$router.push({ name: route });
      }
    },
    formatPrice: function (value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style lang="scss">
button:focus {
  outline: none;
}
.containerNames {
  width: 59rem;
  margin-left: -9rem;
}
.containerFloat {
  float: left;
  width: 28rem;
  margin-left: -1rem;
}

.button-changeNames {
  width: 166px;
  height: 20px;
  border: 1px solid #000000;
}
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
.button-withdraw {
  width: 101px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 65px;
  font-size: 12px;
}
.button-withdraw:focus {
  outline: none;
}
.button-add {
  width: 112px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 15px;
  font-size: 12px;
}
.button-add:focus {
  outline: none;
}
.button-remove-note {
  width: 62px;
  height: 20px;
  border: 1px solid #000000;
}
.button-remove-note:focus {
  outline: none;
}
.input_money {
  font-size: 1.1em;
  padding: 15px;
  text-align: center;
}

.input_rank {
  font-size: 1.1em;
  padding: 15px;
  text-align: center;
}

.addmoney {
  /* position: absolute;
  top: 210px;
  left: 300px; */
  width: 709px;
}

.withdrawMoney {
  /* position: absolute;
  top: 385px;
  left: 300px; */
  width: 550px;
}

.input_money input {
  width: 100%;
  height: 50px;
  text-align: center;
  margin-right: 18px;
}
.input_rank input {
  width: 151px;
  height: 50px;
  text-align: center;
  margin-right: 18px;
  display: inline;
}

.input_money button {
  margin: 15px 15px 0 15px;
}

.input_rank button {
  margin: 15px 15px 0 15px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.button_rank {
  width: 82px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 65px;
  font-size: 12px;
}

.button-createRank {
  width: 155px;
  height: 20px;
  border: 1px solid #000000;
}

.margenIzq {
  margin-left: -9rem;
}

.margenIzqContenido {
  margin-left: 18rem;
}

.inputCoords {
  width: 75px;
}

.button-coords {
  width: 151px;
  height: 20px;
  border: 1px solid #000000;
}
.inputStation {
  width: 138px;
  height: 38px;
  border: 1px solid #000000;
}
.prueba1 {
  width: 17rem;
}
.prueba2 {
  width: 45rem;
  margin-left: -44px;
}
.prueba3 {
  width: 21rem;
  float: left;
}
</style>

