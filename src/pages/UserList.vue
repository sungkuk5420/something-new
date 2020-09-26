<template>
  <q-page class="user-list-page">
    <input type="text" v-model="searchText" @input="userSearch" />
    <div class="user-list-wrap" style="margin-top: 30px">
      <ul v-for="(user, index) in searchList" :key="index">
        <li>
          <p>{{ user.name }}</p>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
import { Field } from "vant";

export default {
  data() {
    return {
      searchText: "",
      userList: [
        { name: "김성국" },
        { name: "서현동" },
        { name: "이주열" },
        { name: "안동현" },
        { name: "김승태" },
        { name: "최양락" },
        { name: "팽현숙" },
        { name: "이미숙" },
        { name: "이지혜" },
        { name: "박준형" },
        { name: "이봉원" },
        { name: "장도연" },
        { name: "사나" },
        { name: "나연" },
        { name: "다현" },
        { name: "모모" },
        { name: "미나" },
        { name: "정연" },
        { name: "쯔위" },
        { name: "지효" },
        { name: "채영" }
      ],
      searchList: [
        { name: "김성국" },
        { name: "서현동" },
        { name: "이주열" },
        { name: "안동현" },
        { name: "김승태" },
        { name: "최양락" },
        { name: "팽현숙" },
        { name: "이미숙" },
        { name: "이지혜" },
        { name: "박준형" },
        { name: "이봉원" },
        { name: "장도연" },
        { name: "사나" },
        { name: "나연" },
        { name: "다현" },
        { name: "모모" },
        { name: "미나" },
        { name: "정연" },
        { name: "쯔위" },
        { name: "지효" },
        { name: "채영" }
      ]
    };
  },
  methods: {
    userSearch() {
      let searchText = this.searchText;

      this.searchList = this.userList.filter(function(user) {
        return user.name.indexOf(searchText) != -1;
      });
    }
  }
};
</script>

<style lang="scss">
.user-list-page {
}
</style>
