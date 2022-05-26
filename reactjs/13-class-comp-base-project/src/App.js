import UserFinder from './components/UserFinder';
import UsersContext from './store/user-context';

const DUMMY_USERS = [
  { id: "u1", name: "Dinesh Jsdc" },
  { id: "u2", name: "Mohit Poonia" },
  { id: "u3", name: "Nikhil Bishnoi" },
  { id: "u4", name: "Ajay Sheokand" },
  { id: "u5", name: "Abhishek Singh Dhull" }
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;