import React, { Component } from 'react';

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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default ContactForm;
