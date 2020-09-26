<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      bordered
      class="bg-primary text-white"
      height-hint="98"
      v-show="false"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
            /> </q-avatar
          >Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-8 text-white" v-show="true">
      <van-tabbar v-model="active">
        <van-tabbar-item to="/main" icon="home-o">main</van-tabbar-item>
        <van-tabbar-item to="/userList" icon="search">userList</van-tabbar-item>
        <van-tabbar-item to="/ParticipationList" icon="friends-o"
          >ParticipationList</van-tabbar-item
        >
        <van-tabbar-item to="/profileIntroduce" icon="setting-o"
          >setting</van-tabbar-item
        >
      </van-tabbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>