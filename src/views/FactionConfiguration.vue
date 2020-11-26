<template>
  <div class="file flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <div class="file-details-content flex flex-row ">
      <!-- <div class="flex flex-wrap py-4 pl-4">
        <file-menu active="files" />
      </div> -->
      <div class="file-content py-4 pr-2 flex flex-col w-1/2 separation ml-64">
        <div class="file-content p-4 flex flex-col w-full">
          <table class="border-b border-panel-dark">
            <tbody>
              <tr class="border border-panel-dark font-bold bg-panel-dark">
                <td class="px-4 py-2">NOMBRE EMPRESA</td>
              </tr>
              <tr class="border-l border-r border-panel-dark">
                <td class="px-4 py-2">
                  <input
                    class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                    type="text"
                    v-model="labelFaction"
                    placeholder="INTRODUCE NOMBRE RANGO"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="file-content p-4 flex flex-col w-full">
          <table class="border-b border-panel-dark">
            <tbody>
              <tr class="border border-panel-dark font-bold bg-panel-dark">
                <td class="px-4 py-2">NOMBRE EMPRESA abreviado</td>
              </tr>
              <tr class="border-l border-r border-panel-dark">
                <td class="px-4 py-2">
                  <input
                    class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                    type="text"
                    v-model="nameFaction"
                    placeholder="INTRODUCE NOMBRE RANGO ABREVIADO"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div
          class="addmoney input_rank bg-panel-dark border border-panel-light"
        >
          <p class="appearance-none text-white bg-panel-dark w-full p-2">
            crear rango:
          </p>
          <input
            class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
            type="text"
            placeholder="NOMBRE RANGO"
            v-model="rankLabel"
          />
          <input
            class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
            type="text"
            placeholder="RANGO ABREVIADO"
            v-model="rankName"
          />
          <input
            class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
            type="number"
            placeholder="SUELDO RANGO"
            v-model="rankMoney"
          />
          <button
            class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
            @click="rankCreated(rankName, rankLabel, rankMoney)"
          >
            CREAR RANGO
          </button>
        </div> -->
        <div class="file-content p-4 flex flex-col w-full">
          <!-- <label> CREAR RANGO:</label> -->
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
                    placeholder="NOMBRE RANGO"
                    v-model="rankLabel"
                  />
                </td>
                <td class="px-4 py-2 ancho">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                    type="text"
                    placeholder="RANGO ABREVIADO"
                    v-model="rankName"
                  />
                </td>
                <td class="px-4 py-2 ancho">
                  <input
                    class="appearance-none border border-panel-dark p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                    type="number"
                    placeholder="SUELDO RANGO"
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
        <div class="file-content p-4 flex flex-col w-1/2">
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
                <td class="px-4 py-2">Sueldo</td>
                <td></td>
              </tr>
              <tr
                class="border-l border-r border-panel-dark"
                v-for="(rango, index) in singleFaction._ranks"
                :key="index"
              >
                <td class="px-4 py-2">{{ rango.label }}</td>
                <td class="px-4 py-2 w-1/6">{{ rango.money }} $</td>
                <td class="px-4 py-2 w-1/6">
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
                </td>
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
              <div class="px-4 py-2 w-56"><p>no hay rangos creados</p></div>
            </tbody>
          </table>
        </div>
        <div class="w-250 text-center">
          <button
            class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-2 border border-panel-light hover:border-gray-500 w-64"
          >
            ACEPTAR EDITADO
          </button>

          <button
            class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-2 border border-panel-light hover:border-gray-500 w-64 ml-4"
            @click="goto('FactionList')"
          >
            CANCELAR EDITADO
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
      /* rankFaction: [],
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
      rankMoneyFaction5: 0, */
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
    rankCreated: function (name, label, money) {
      if (
        name.trim() !== "" &&
        label.trim() !== "" &&
        parseInt(money.trim()) >= 0
      ) {
        console.log(name, label, parseInt(money));
        const rank = {
          name: name,
          label: label,
          money: parseInt(money),
        };
        this.$store.dispatch("RANKCREATED", rank);
        console.log(JSON.stringify(this.singleFaction._ranks));
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
</style>

