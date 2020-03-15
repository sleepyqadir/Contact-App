import React, { Component } from "react";
import * as ContactsApi from "./utils/ContactsApi";
import "antd/dist/antd.css";
import "./App.css";
import ListContacts from "./Components/ListContacts";
class App extends Component {
  state = {
    contacts: []
  };

  removeContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(val => {
        return val.id !== contact.id;
      })
    }));
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim
    }));
  };
  componentDidMount() {
    ContactsApi.getAll().then(contacts => {
      this.setState(() => ({
        contacts
      }));
    });
  }
  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
