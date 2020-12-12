<template>
  <q-page class="hobby-page">
    <van-nav-bar
      title="취미 선택"
      left-arrow
      @click-left="
        () => {
          $router.push('/user-profile');
        }
      "
    >
    </van-nav-bar>
    <div class="hobby">
      <div class="hobby-plus">
        <input
          type="text"
          placeholder="직접입력"
          v-model="inputText"
          ref="input"
        />
        <div class="plus" @click="addItems">추가</div>
      </div>
      <div class="hobby-content">
        <ul>
          <li
            v-for="item in items"
            :class="{ 'is-active': item.active }"
            @click="() => toggleItem(item.data)"
          >
            {{ item.data }}
          </li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import some from "lodash/some";
import uniqBy from "lodash/uniqBy";
import uniq from "lodash/uniq";
import { mapGetters } from "vuex";
import { Toast } from "vant";
import { T } from "src/store/module-example/types";
export default {
  data() {
    return {
      inputText: "",
      items: [
        { active: false, data: "게임" },
        { active: false, data: "낚시" },
        { active: false, data: "여행" },
        { active: false, data: "캠핑" },
        { active: false, data: "전시 감상" },
        { active: false, data: "독서" },
        { active: false, data: "춤" },
        { active: false, data: "패션" },
        { active: false, data: "악기 연주" },
        { active: false, data: "권투" },
        { active: false, data: "달리기" },
        { active: false, data: "사격" },
        { active: false, data: "암벽등반" },
        { active: false, data: "요리" },
        { active: false, data: "배드민턴" },
        { active: false, data: "축구" },
        { active: false, data: "야구" },
        { active: false, data: "자전거" },
        { active: false, data: "등산" },
        { active: false, data: "수영" },
        { active: false, data: "테니스" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  mounted() {
    if (this.loginUser.hobbies.length > 0) {
      this.loginUser.hobbies.map((hobby) => {
        if (
          [
            "게임",
            "낚시",
            "여행",
            "캠핑",
            "전시 감상",
            "독서",
            "춤",
            "패션",
            "악기 연주",
            "권투",
            "달리기",
            "사격",
            "암벽등반",
            "요리",
            "배드민턴",
            "축구",
            "야구",
            "자전거",
            "등산",
            "수영",
            "테니스",
          ].includes(hobby)
        ) {
          this.items = this.items.map((item) => {
            if (item.data === hobby) {
              return { active: true, data: hobby };
            } else {
              return { ...item };
            }
          });
        } else {
          this.items.push({ active: true, data: hobby });
        }
      });
    }
  },
  methods: {
    addItems() {
      if (!this.inputText) {
        Toast.fail("입력된 값이 없습니다");
        this.$refs.input.focus();
        return;
      }
      if (some(this.items, { data: this.inputText })) {
        Toast.fail("리스트에 이미 있는 취미입니다");
        this.$refs.input.focus();
        return;
      }
      const inputArray = [{ active: false, data: this.inputText }];
      const addArray = this.items.concat(inputArray);
      this.inputText = "";
      this.items = uniqBy(addArray, "data");
    },
    toggleItem(selectValue) {
      this.items = this.items.map((item) => {
        if (item.data === selectValue) {
          if (!item.active) {
            const changedArray = this.loginUser.hobbies.concat([selectValue]);
            this.$store.dispatch(T.UPDATE_HOBBIES, {
              data: {
                uid: this.loginUser.uid,
                hobbies: uniq(changedArray),
              },
            });
          } else {
            const filterArray = this.loginUser.hobbies.filter(
              (hobby) => hobby !== item.data
            );
            this.$store.dispatch(T.UPDATE_HOBBIES, {
              data: { uid: this.loginUser.uid, hobbies: filterArray },
            });
          }
          return { active: !item.active, data: item.data };
        } else {
          return { ...item };
        }
      });
    },
  },
};
</script>

<style lang="scss">
.hobby-page {
  .van-nav-bar .van-icon {
    color: #000;
  }
  .van-hairline--bottom::after {
    border-bottom: none;
  }
  .hobby {
    &-plus {
      padding: 24px 16px 16px 16px;
      display: flex;
      border-bottom: 1px solid #ece8e8;
      margin-bottom: 20px;
      input {
        padding-left: 10px;
        background: #f9f8f8;
        border-radius: 8px;
        border: none;
        flex: 8;
        height: 38px;
        &::placeholder {
          font-family: Noto Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 127.3%;
          color: #d2cdcd;
        }
      }
      .plus {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 127.3%;
        color: #fe7f8e;
      }
    }

    .hobby-content {
      ul {
        padding: 0 16px;
        display: flex;
        flex-wrap: wrap;
        li {
          padding: 8px 16px;
          background: #f9f8f8;
          border-radius: 8px;
          margin-right: 8px;
          margin-bottom: 8px;
          font-family: Apple SD Gothic Neo;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 127.3%;
          color: #bebbbb;
          &.is-active {
            background: #fe7f8e;
            color: white;
          }
        }
      }
    }
  }
}
</style>
