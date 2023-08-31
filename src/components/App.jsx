import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {

  state = {
    contacts: [],
  }
  
//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
   
//     this.setState({ [name]: value });
// }

//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(this.state)
//   }
  
  render() {
    return (
      <>
        
        <ContactForm/>
        {/* <ContactForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> */}
      </>
  )
}

};
