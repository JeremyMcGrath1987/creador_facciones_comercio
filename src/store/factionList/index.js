export default {
  namespaced: true,
  state: {
    data: [{ "name": "Los Santos Custom Enterprise", "id": "9845613212F" },
    { "name": "Badulake Farm", "id": "1603206077L" },
    { "name": "La vieja tienda de Jimmy", "id": "4513789546K" },
    { "name": "Creperia Jones", "id": "8456791249H" },
    { "name": "Mecanico sur", "id": "3465178495P" },
    { "name": "Reparaciones Asher", "id": "7447459776Q" },
    { "name": "La despensa de Janet", "id": "6061696214A" },
    { "name": "Seguridad privada Mel", "id": "3360029023G" },
    { "name": "Taller Ariel Chandler", "id": "7823622408V" },
    { "name": "Tienda Dominik McMillan", "id": "8245640371N" },
    { "name": "Empresa Donavan Schmidt", "id": "9461785780F" },
    { "name": "Licoreria Lina Brewer", "id": "4989110327D" },
    { "name": "Bar Ashly Crabtree", "id": "5935440597E" },
    { "name": "Fruteria Lorena Cormier", "id": "3548832104T" },
    { "name": "Peluqueria Carina O'Leary", "id": "3082909106O" },
    { "name": "Confiteria Austin Ramsey", "id": "8016424577Y" },
    { "name": "Restaurante Finlay Butler", "id": "2169438695W" },
    { "name": "Carpinteria Damien Muir", "id": "9563107938Y" },
    { "name": "Metalurgia Enrique O'Neill", "id": "1910638706I" },
    { "name": "Bufete Armani Garza", "id": "8596771452" },
    { "name": "Concesionario Jacob Peterson", "id": "2603082909R" }]
  },
  actions: {
    SETEMPLOYEES: (context, info) => {
      context.commit("setEmployees", info);
    }
  },
  mutations: {
    setEmployees: (state, info) => {
      state.data = info;
    }

  }
};