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
    {}

  },
  actions: {
    SETFACTION:(context, faction) => {
      context.commit("setFaction", faction);
    },
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
    setFaction: (state, faction) => {
      state.data = faction;
    },
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
