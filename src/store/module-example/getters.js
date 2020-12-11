export const getters = {
    getter(state) {
        return state;
    },
    getCurrentUser(state) {
        return state.loginUser;
    },
    getUserList(state) {
        return state.userList;
    },
    getChatData(state) {
        return state.chatData;
    },
};
