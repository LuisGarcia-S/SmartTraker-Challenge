import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard, CFormInput, CButton } from '@coreui/react';
import { CForm, CCardBody, CFormTextarea, CCardTitle } from '@coreui/react';

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
    <CCard>
      <CCardBody>
      <CCardTitle style={{"color":"rgba(241,161,10,1)"}}> Post </CCardTitle>
      <CForm onSubmit={handleSubmit} style={{
          "marginTop":"15px",
          "textAlign":"left"}}>
          <CFormInput
            type="text"
            id="title"
            name="title"
            label="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <CFormInput
            type="text"
            id="author"
            name="author"
            label="Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <CFormInput
            type="email"
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <CFormInput
            id="phone"
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <CFormTextarea
            id="body"
            name="body"
            label="Post"
            value={formData.body}
            onChange={handleChange}
          ></CFormTextarea>
          
        <CButton color="dark" type="submit" style={{"marginTop":"15px", "marginLeft":"42%"}}>Submit</CButton>
      </CForm>
      {response && <p>Entry post created!</p>}
      {error && <p>Error: {error.message}</p>}
      </CCardBody>
    </CCard>
  );
};

export default CardComponent;

