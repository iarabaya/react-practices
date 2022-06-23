import './App.css';

// components imports
import Profile from './components/Profile';
import UserList from './components/UserList';

// CONTEXT
import UserState from './context/User/UserState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserState>
      <Profile/>
      <UserList/>
    </UserState>
  );
}

export default App;
