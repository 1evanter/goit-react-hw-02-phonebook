import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { GlobalStyle } from "components/GlobalStyle";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {

  state = {
    contacts: [],
  }
  
  
  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    }

    )
    console.log(newContact)
    console.log("vse ok")
  }
  
  render() {
    return (
      <>
        
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <ContactList items={this.state.contacts} />
        <GlobalStyle/>
      </>
  )
}

};
