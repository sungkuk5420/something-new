<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { authService, firebaseDB } from "src/fbase";
import { T } from "./store/module-example/types";
export default {
  name: "App",
  updated() {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log("-----------------로그인성공 ------------------");
        const successCb = (userList) => {
          console.log(userList);
          const currentUserData = userList[0];
          if (currentUserData) {
            this.$store.dispatch(T.SET_USER_DATA_ON_SOTRE, {
              data: {
                loginUser: currentUserData,
              },
              successCb: () => {
                if (this.$router.currentRoute.path == "/") {
                  this.$router.push("/main");
                }
              },
              errorCb,
            });
          }
          this.loading = false;
        };
        const errorCb = (errorMessage) => {
          this.loading = false;
        };
        this.loading = true;
        this.$store.dispatch(T.GET_USER_DATA, {
          data: {
            where: ["email", "==", user.email],
          },
          successCb,
          errorCb,
        });
      } else {
        console.log("-----------------로그아웃 ------------------");
        console.log(user);
        this.$store.dispatch(T.SET_USER_DATA_ON_SOTRE, {
          data: {
            loginUser: null,
          },
          successCb: () => {
            this.$router.push("/");
          },
          errorCb: () => {},
        });
      }
    });
  },
};
</script>
