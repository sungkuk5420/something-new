import { mapGetters } from "vuex";
import { authService, fireStore } from "src/fbase";
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

    getAllUserByUids(pamasUserUids) {
      return new Promise((resolveMain, rejectMain) => {
        let allUserList = pamasUserUids.slice(0);
        const promiseFuncs = [];

        let returnUsers = []
        console.log("pamasUserUids", pamasUserUids)
        while (allUserList.length) {
          let queryUsers = allUserList.slice(0, 10)
          allUserList.splice(0, 10)
          if (queryUsers.length != 0) {
            promiseFuncs.push(
              new Promise((resolve, reject) => {
                fireStore
                  .collection("users")
                  .where("uid", "in", queryUsers)
                  .get()
                  .then((snapshot) => {
                    const users = snapshot.docs.map((doc) => ({
                      ...doc.data(),
                    }));
                    console.log("query in ", users)
                    users.map(item => {
                      if (returnUsers.map(i => i.uid).indexOf(item.uid) == -1) {
                        returnUsers.push(item)
                      }
                    })
                    resolve(returnUsers);
                  });
              })
            );
          }
        }

        Promise.all(promiseFuncs).then(() => {
          resolveMain(returnUsers);
        });
      })
    },

  }
};
export default myMixin;
