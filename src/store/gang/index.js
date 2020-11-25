import moment from "moment";
moment.locale("en", {
  months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
    "_"
  ),
  monthsShort: "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split(
    "_"
  ),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")
});

export default {
  state: {
    data:
    {
      _id: 2,
      _name: "gutang",
      _label: "Taller Gutang",
      _ranks: [
        
      ],
      _spawnVehicles: {
        Station1: []
      },
      _money: 456150,
      _inventory: {
        _name: "Almacén",
        _inventory: {
          _slots: 500,
          _availableSlots: 470,
          _items: [
            {
              name: "Pistola Vintage",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Bolsita María",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Bolsita Coca",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Porra",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Taser",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Dinero Negro",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Bidón Gasolina",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Joyas",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Linterna",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }
          ]
        },
        _maxWeight: 500
      },
      _coords: [
        {
          type: "inventario",
          pos: Object,
          minRank: 0,
          station: false
        }
      ]
    }

  },
  actions: {
    SETGANG: (context, gang) => {
      context.commit("setGang", gang);
    },
    ADDMONEY: (context, money) => {
      context.commit("addMoney", money);
    },
    WITHDRAWMONEY: (context, money) => {
      context.commit("withdrawMoney", money);
    },
    EDITRANK: (context, rank) => {
      context.commit("editRank", rank);
    },
    RANKCREATED: (context, rank) => {
      context.commit("rankCreated", rank);
    }
  },
  mutations: {
    addMoney: (state, money) => {
      state.data._money += money;
    },
    withdrawMoney: (state, money) => {
      if ((state.data._money - money) < 0) {
        return false
      } else {
        state.data._money -= money;
      }

    },
    setGang: (state, gang) => {
      state.data = gang;
    },
    editRank: (state, rank) => {
      state.data._ranks[rank.index].money = rank.money;
      state.data._ranks[rank.index].label = rank.label;
    },
    rankCreated:(state, rank) => {
      state.data._ranks.push(rank);
    }
  }
};
