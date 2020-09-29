export default function () {
  return {
    state: "",
    isLogin: false,
    currentUser: '',
    userList: [
      {
        uid: '1',
        name: 'user1',
        password: '111111'
      },
      {
        uid: '2',
        name: 'user2',
        password: '111111'
      }
    ],
    chatData: []
  };
}
