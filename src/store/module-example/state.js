export default function () {
  return {
    state: "",
    currentUser: null,
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
