import React, { useState } from 'react';
import "./CardPost.css";

const API_NAME = process.env.API || 'localhost';
const API_PORT = process.env.API_PORT || '8080';

const CardComponent = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    email: '',
    phone: '',
    body: '',
});
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your endpoint URL
    const endpoint = `http://${API_NAME}:${API_PORT}/create_post`;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setResponse(data);
        setFormData({
            title: '',
            author: '',
            email: '',
            phone: '',
            body: '',
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className='cardPost'>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="body">Message:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='formGroup'>
          <label htmlFor="phone">Phone:</label>
          <textarea
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {JSON.stringify(response)}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default CardComponent;

