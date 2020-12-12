<template>
  <q-page class="personality-page">
    <van-nav-bar
      title="성격 선택"
      left-arrow
      @click-left="
        () => {
          $router.push('/user-profile');
        }
      "
    >
    </van-nav-bar>
    <div class="personality">
      <div class="personality-plus">
        <input
          type="text"
          v-model="inputText"
          placeholder="직접입력"
          ref="input"
        />
        <div class="plus" @click="addItems">추가</div>
      </div>
      <div class="personality-content">
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
import { mapGetters } from "vuex";
import { Toast } from "vant";
import some from "lodash/some";
import uniqBy from "lodash/uniqBy";
import uniq from "lodash/uniq";
import { T } from "src/store/module-example/types";

export default {
  data() {
    return {
      inputText: "",
      items: [
        { active: false, data: "내성적이에요" },
        { active: false, data: "적극적이에요" },
        { active: false, data: "자신감 넘쳐요" },
        { active: false, data: "밝아요" },
        { active: false, data: "수줍음이 많아요" },
        { active: false, data: "외향적이에요" },
        { active: false, data: "끈기가 있어요" },
        { active: false, data: "정이 많아요" },
        { active: false, data: "침착해요" },
        { active: false, data: "착해요" },
        { active: false, data: "조용해요" },
        { active: false, data: "사려가 깊어요" },
        { active: false, data: "사교적이에요" },
        { active: false, data: "느긋해요" },
        { active: false, data: "도전을 좋아해요" },
        { active: false, data: "너그러워요" },
        { active: false, data: "다정해요" },
        { active: false, data: "따뜻해요" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  mounted() {
    if (this.loginUser.personalities.length > 0) {
      this.loginUser.personalities.map((personality) => {
        if (
          [
            "내성적이에요",
            "적극적이에요",
            "자신감 넘쳐요",
            "밝아요",
            "수줍음이 많아요",
            "외향적이에요",
            "끈기가 있어요",
            "정이 많아요",
            "침착해요",
            "착해요",
            "조용해요",
            "사려가 깊어요",
            "사교적이에요",
            "느긋해요",
            "도전을 좋아해요",
            "너그러워요",
            "다정해요",
            "따뜻해요",
          ].includes(personality)
        ) {
          this.items = this.items.map((item) => {
            if (item.data === personality) {
              return { active: true, data: personality };
            } else {
              return { ...item };
            }
          });
        } else {
          this.items.push({ active: true, data: personality });
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
          console.log(
            "this.loginUser.personalities",
            this.loginUser.personalities
          );
          if (!item.active) {
            const changedArray = this.loginUser.personalities.concat([
              selectValue,
            ]);
            console.log("changedArray", uniq(changedArray));
            this.$store.dispatch(T.UPDATE_PERSONALITY, {
              data: {
                uid: this.loginUser.uid,
                personalities: uniq(changedArray),
              },
            });
          } else {
            const filterArray = this.loginUser.personalities.filter(
              (personality) => personality !== item.data
            );
            console.log("filterArray", filterArray);
            this.$store.dispatch(T.UPDATE_PERSONALITY, {
              data: { uid: this.loginUser.uid, personalities: filterArray },
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
.personality-page {
  .van-nav-bar .van-icon {
    color: #000;
  }
  .van-hairline--bottom::after {
    border-bottom: none;
  }
  .personality {
    .personality-plus {
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
    .personality-content {
      ul {
        padding: 0 16px;
        display: flex;
        flex-wrap: wrap;
        li {
          padding: 8px 13px;
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
