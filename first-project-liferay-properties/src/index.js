import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './index.css';

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

class WebComponent extends HTMLElement {
  connectedCallback() {
    const properties = {
      dynamic_property_test: this.getAttribute('dynamic_property_test'),
    };

    ReactDOM.render(<App properties={properties} />, this);
  }
}

const ELEMENT_ID = 'remote-age-app';

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}
