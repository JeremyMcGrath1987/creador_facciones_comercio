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
        {
          name: "jefe",
          label: "Jefe Taller",
          money: 789,
          id: 45
        },
        {
          name: "jefe",
          label: "JfeTa",
          money: 789,
          id: 5
        },
        {
          name: "jefe",
          label: "er",
          money: 789,
          id: 4
        },
        {
          name: "jefe",
          label: "Taller",
          money: 789,
          id: 1
        },
      ],
      _spawnVehicles: {
        Los_Santos: [],
        Station2: [],
        Station3: []
      },
      _money: 456150,
      _inventory: {
        _name: "Almacén",
        _inventory: {
          _slots: 500,
          _availableSlots: 470,
          _items: [
            
          ]
        },
        _maxWeight: 500
      },
      _coords: [
        {
          type: "inventario",
          pos: {x: 487, y:87978, z:4566456},
          minRank: 0,
          station: false
        },
        {
          type: "garaje",
          pos: {x: 4587, y:8797, z:4556},
          minRank: 0,
          station: false
        }
      ]
    }

  },
  actions: {
    EDITRANK: (context, rank) => {
      context.commit("editRank", rank);
    },
    RANKCREATED: (context, rank) => {
      context.commit("rankCreated", rank);
    },
    EDITNAME: (context, faction) => {
      context.commit("editName", faction);
    },
  },
  mutations: {
    editRank: (state, rank) => {
      state.data._ranks[rank.index].money = rank.money;
      state.data._ranks[rank.index].label = rank.label;
    },
    rankCreated:(state, rank) => {
      state.data._ranks.push(rank);
    },
    editName:(state, faction) => {
      state.data._name = faction.name;
      state.data._label = faction.label;

    }
  }
};
