import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import ListContacts from "./Components/ListContacts";
class App extends Component {
  state = {
    contacts: [
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "@tylermcginnis",
        avatarURL: "/home/ayin_qoph/github/Contact-App/public/icons/avatar1.png"
      },
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "@karen_isgrigg",
        avatarURL: "http://localhost:5001/public/icons/avatar1.png"
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "@richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg"
      },
      {
        id: "mark",
        name: "mark Kalehoff",
        handle: "@markkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg"
      }
    ]
  };

  removeContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(val => {
        return val.id !== contact.id;
      })
    }));
  };

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
