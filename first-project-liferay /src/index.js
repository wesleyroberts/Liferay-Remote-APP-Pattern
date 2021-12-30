import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './index.css';

const App = () => {
  const [usersList, setUsersList] = useState([]);

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
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};
export default App;

class WebComponent extends HTMLElement {
	connectedCallback() {
		ReactDOM.render(<App />,this);
	}
}

const ELEMENT_ID = 'remote-age-app';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, WebComponent);
}
