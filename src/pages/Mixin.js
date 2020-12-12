import { mapGetters } from "vuex";
let myMixin = {
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser"
    }),
  },
  created() { },
  watch: {
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
  }
};
export default myMixin;
