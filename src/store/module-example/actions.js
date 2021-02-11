import { T } from "./types";
import { authService, fireStore } from "src/fbase";
import { Toast } from "vant";

export const actions = {
  async [T.UPDATE_HEIGHT]({ commit }, { data }) {
    try {
      await fireStore.collection("users").doc(data.uid).update({
        height: data.height,
      });
      commit(T.UPDATE_HEIGHT, data.height);
    } catch (e) {
      console.log("T.UPDATE_HEIGHT error", e);
    }
  },
  async [T.UPDATE_LOCATION]({ commit }, { data }) {
    try {
      await fireStore.collection("users").doc(data.uid).update({
        location: data.location,
      });
      commit(T.UPDATE_LOCATION, data.location);
    } catch (e) {
      console.log("T.UPDATE_LOCATION error", e);
    }
  },
  async [T.UPDATE_HOBBIES]({ commit }, { data }) {
    try {
      await fireStore.collection("users").doc(data.uid).update({
        hobbies: data.hobbies,
      });
      commit(T.UPDATE_HOBBIES, data.hobbies);
    } catch (e) {
      console.log("T.UPDATE_HOBBIES error", e);
    }
  },
  async [T.UPDATE_PERSONALITY]({ commit }, { data }) {
    try {
      await fireStore.collection("users").doc(data.uid).update({
        personalities: data.personalities,
      });
      commit(T.UPDATE_PERSONALITY, data);
    } catch (e) {
      console.log("T.UPDATE_PERSONALITY error", e);
    }
  },
  async [T.UPDATE_SMOKING]({ commit }, { data }) {
    try {
      await fireStore.collection("users").doc(data.uid).update({
        smoking: data.smoking,
      });
      commit(T.UPDATE_SMOKING, data);
    } catch (e) {
      console.log("T.UPDATE_SMOKING error", e);
    }
  },
  async [T.UPDATE_DRINKING]({ commit }, { data }) {
    try {
      await fireStore.collection("users").doc(data.uid).update({
        drinking: data.drinking,
      });
      commit(T.UPDATE_DRINKING, data);
    } catch (e) {
      console.log("T.UPDATE_DRINKING error", e);
    }
  },
  async [T.USER_LOGIN]({ commit }, { data, successCb, errorCb }) {
    console.log(`store action [T.USER_LOGIN] data`);
    console.log(data);
    try {
      const loginResult = await authService.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      if (loginResult) {
        successCb(loginResult);
      }
    } catch (e) {
      if (e.code !== "auth/user-not-found")
        Toast.fail("입력하신 회원정보를 다시 확인해주시기 바랍니다.");
      errorCb(e.code);
    }
  },
  async [T.USER_LOG_OUT]({ commit }, { data = {}, successCb, errorCb }) {
    console.log(`store action [T.USER_LOG_OUT] data`);
    console.log(data);
    try {
      const logOutResult = await authService.signOut();
      if (logOutResult) {
        successCb();
      }
    } catch (e) {
      errorCb();
    }
  },
  [T.CHAT_ADD_DATA]({ commit }, data) {
    console.log(`store action [T.CHAT_ADD_DATA] data`);
    console.log(data);

    commit(T.CHAT_ADD_DATA, data);
  },
  [T.GET_USER_DATA]({ commit }, { data, successCb, errorCb }) {
    console.log(`store action [T.GET_USER_DATA] data`);
    console.log(data);
    //where 데이터를 넣으면 해당 데이터 == 값을 찾는다.
    //ex) data:{where:["email","==",email]}

    const where = data.where || ["email", "!=", ""];
    fireStore
      .collection("users")
      .limit(10)
      .where(...where)
      .get()
      .then((querySnapshot) => {
        let userList = [];
        console.log("success");
        if (querySnapshot.empty) {
          successCb([]);
          return false;
        }
        querySnapshot.forEach((doc) => {
          let id = doc.id;
          userList.push({
            id,
            ...doc.data(),
          });
          //commit(GET_USER_LIST, userList);
        });
        successCb(userList);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  },

  async [T.REGISTER_USER]({ dispatch, commit }, { data, successCb, errorCb }) {
    console.log(
      `store action [T.REGISTER_USER] data : ${JSON.stringify(data)}`
    );
    const registerUserData = data.registerUserData;
    try {
      const registerResult = await authService.createUserWithEmailAndPassword(
        registerUserData.email,
        registerUserData.password
      );
      console.log(registerResult);
      if (registerResult) {
        let userData = { ...registerUserData, uid: registerResult.user.uid };
        delete userData.password;
        if (registerResult.additionalUserInfo.isNewUser) {
          //새로운 유저가입완료. 파이어스토어쪽에도 등록하기.
          dispatch(T.UPSERT_USER_INTO_FIRESTORE, {
            data: {
              userData,
            },
            successCb: () => {
              successCb(userData);
              //원래페이지로 돌아가서 스토리지에 이미지 파일 등록.
            },
            errorCb: () => {
              //파이어 스토어 등록실패. 나중에 기본 인증시스템에서도 제거해볼것.
            },
          });
        }
        return false;

        console.log(
          `store action [T.REGISTER_USER] success data : ${JSON.stringify(
            registerResult
          )}`
        );
      }
    } catch (e) {
      console.log(
        `store action [T.REGISTER_USER] error : ${JSON.stringify(e)}`
      );
      errorCb(e.message || "");
    }
  },
  [T.UPSERT_USER_INTO_FIRESTORE]({ commit }, { data, successCb, errorCb }) {
    console.log(
      `store action [T.UPSERT_USER_INTO_FIRESTORE] data : ${JSON.stringify(
        data
      )}`
    );
    const userData = data.userData;
    fireStore
      .collection(`users`)
      .doc(userData.uid)
      .set(userData)
      .then(function (docRef) {
        console.log(docRef);
        // context.commit(SET_LOGIN_USER, insertedUser);
        if (successCb) {
          successCb();
        }
      })
      .catch(function (error) {
        if (errorCb) {
          errorCb();
        }
      });
  },
  [T.SET_USER_DATA_ON_SOTRE]({ commit }, { data, successCb, errorCb }) {
    console.log(
      `store action [T.SET_USER_DATA_ON_SOTRE] data : ${JSON.stringify(data)}`
    );
    commit(T.SET_USER_DATA_ON_SOTRE, data.loginUser);
    if (successCb) {
      successCb();
    }
  },
  [T.ADD_VOTE_HISTORY]({ commit }, { data, successCb, errorCb }) {
    console.log(
      `store action [T.ADD_VOTE_HISTORY] data : ${JSON.stringify(data)}`
    );
    console.log(data)
    fireStore
      .collection(`voteHistories`)
      .add(data)
      .then(function (docRef) {
        if (successCb) {
          successCb();
        }
      })
      .catch(function (error) {
        if (errorCb) {
          errorCb(error);
        }
      });
  },
};
