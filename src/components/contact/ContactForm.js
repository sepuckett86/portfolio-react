import React, { Component } from 'react';
import styles from './ContactForm.css';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  state = { 
    name: '', 
    email: '', 
    message: '' 
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  handleChange = ({ target }) => {
    this.setState({ 
      [target.name]: target.value 
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <section id="contact" className={styles.ContactForm}>
        <h2>Get in touch!</h2>
        <form onSubmit={this.handleSubmit}>
          
          <label>
            <h3>Your Name:</h3> 
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={this.handleChange} 
            />
          </label>
         
          
          <label>
            <h3>Your Email:</h3>
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={this.handleChange} 
            />
          </label>
          <label>
            <h3>Message:</h3>
            <textarea 
              name="message" 
              value={message} 
              onChange={this.handleChange} 
              placeholder="Write a note here"
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
