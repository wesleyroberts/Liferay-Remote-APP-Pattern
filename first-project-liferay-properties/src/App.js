import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = ({ properties }) => {
  const [usersList, setUsersList] = useState([]);

  const title = properties.dynamic_property_test;

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};
export default App;
