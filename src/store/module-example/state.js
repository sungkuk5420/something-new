export default function () {
  return {
    state: "",
    isLogin: false,
    currentUser: '',
    userList: [
      {
        name: 'user1',
        password: '111111'
      },
      {
        name: 'user2',
        password: '111111'
      }
    ],
    chatData: []
  };
}
