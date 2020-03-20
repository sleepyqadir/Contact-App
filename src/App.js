import React, { Component } from "react";
import * as ContactsApi from "./utils/ContactsApi";
import "antd/dist/antd.css";
import "./App.css";
import ListContacts from "./Components/ListContacts";
import CreateContact from "./Components/CreateContact";
import { Route } from "react-router-dom";
class App extends Component {
  state = {
    contacts: []
  };
  createContact = contact => {
    ContactsApi.create(contact).then(contact => {
      this.setState(prevState => ({
        contacts: prevState.contacts.concat(contact)
      }));
    });
  };
  removeContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(val => {
        return val.id !== contact.id;
      })
    }));

    ContactsApi.remove(contact);
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
        <Route
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
          exact
        />
        {console.log(this.state.contacts)}
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={contact => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
