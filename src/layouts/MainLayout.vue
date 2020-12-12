<template>
  <q-layout view="hHh lpR fFf" v-show="init">
    <q-header bordered class="bg-primary text-white" height-hint="98" v-show="false">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer
      reveal
      class="bg-grey-8 text-white"
      v-show="loginUser !== null && $router.currentRoute.path!='/chat'"
    >
      <van-tabbar v-model="active">
        <van-tabbar-item to="/main">
          <template #icon="home">
            <!--img :src="home.active ? icon.active : icon.inactive" /-->
            <img class="on" src="../assets/home_on.svg" />
            <img class="off" src="../assets/home.svg" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/chatlist">
          <template #icon="chat">
            <img class="off" src="../assets/chat.svg" />
            <img class="on" src="../assets/chat_on.svg" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/ParticipationList">
          <template #icon="card">
            <img class="off" src="../assets/card.svg" />
            <img class="on" src="../assets/card_on.svg" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/setting">
          <template #icon="menu">
            <img class="off" src="../assets/menu.svg" />
            <img class="on" src="../assets/menu_on.svg" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { Tabbar, TabbarItem } from "vant";
import { authService } from "../fbase";

export default {
  data() {
    return {
      init: false,
      active: 0,
      icon: {
        active: "../assets/home.svg",
        inactive: "../assets/home_on.svg",
      },
      icon: {
        active: "../assets/chat.svg",
        inactive: "../assets/chat_on.svg",
      },
      icon: {
        active: "../assets/card.svg",
        inactive: "../assets/card_on.svg",
      },
      icon: {
        active: "../assets/menu.svg",
        inactive: "../assets/menu_on.svg",
      },
    };
  },
  computed: {
    ...mapGetters({
      loginUser: "getCurrentUser",
    }),
  },
  mounted() {
    console.log(this.$router.currentRoute.path);
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.user;
      }
      this.init = true;
    });
  },
};
</script>
<style lang="scss">
.q-footer {
  .van-tabbar-item {
    .on {
      display: none;
    }
    .off {
      display: block;
    }
    &--active {
      .on {
        display: block;
      }
      .off {
        display: none;
      }
    }
  }
}
</style>
