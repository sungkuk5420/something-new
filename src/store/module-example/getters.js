export const getters = {
    getter(state) {
        return state;
    },
    getIsLogin(state) {
        return state.isLogin;
    },
    getUserList(state) {
        return state.userList;
    },
    getChatData(state) {
        return state.chatData;
    },
    getCurrentUser(state) {
        return state.currentUser;
    }
};
