import React, { Component } from 'react';
import Button from '../Button/Button';
import { v4 as unId } from 'uuid';
import {CustomForm,Input} from './Form.style';

export class Form extends Component {
  state = {
    name: '',
    number:'',
  };
  nameInputId = unId();
  numInputId = unId();

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
     this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number:'',
    });
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <CustomForm onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <Input
            id={this.nameInputId}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label htmlFor={this.numInputId}>
          <Input
            id={this.numInputId}
            placeholder="Tel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>
      <Button text="Add contact" type="submit"/>
    </CustomForm>
    )
  }
}

export default Form
