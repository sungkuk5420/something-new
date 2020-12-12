export const getters = {
    getter(state) {
        return state;
    },
    getLoginUser(state) {
        return state.loginUser;
    },
    getUserList(state) {
        return state.userList;
    },
    getChatData(state) {
        return state.chatData;
    },
    getLocations(state) {
        return state.locations;
    }
};
