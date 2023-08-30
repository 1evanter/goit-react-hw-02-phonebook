import { Component } from "react"

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
  }
  
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
   
    this.setState({ [name]: value });
}

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state)
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              value={this.state.name}
              onChange={this.handleChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
          </label>
          <label>
            <input
              value={this.state.number}
              onChange={this.handleChange}
             
  type="tel"
  name="number"
pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          </label>
          <button type="submit">Submit</button>
        </form>
        
        <ul>
          <li>{this.state.name}</li>
  </ul>
      </>
  )
}

};
