export default {
  computed: {
    singleFaction: function() {
      return this.$store.state.gang.data;
    }
  }
};
