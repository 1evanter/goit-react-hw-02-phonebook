import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { GlobalStyle } from "components/GlobalStyle";

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
        
        <ContactForm onAdd={ this.addContact} />

        <GlobalStyle/>
      </>
  )
}

};
