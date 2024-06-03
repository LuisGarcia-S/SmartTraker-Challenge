import React, { useEffect, useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { CRow, CCol, CContainer } from '@coreui/react';

const API_NAME = process.env.API || 'localhost';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your endpoint URL
    const endpoint = `http://${API_NAME}:8080/read_all`;

    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

const varsCard = {
    '--cui-card-spacer-y': 0,
    '--cui-card-spacer-x': 0,
    "--cui-card-border-radius":0,
    "--cui-card-cap-padding-x":0,
    "display":"flex"
}

const varsCardsGroup = {
    "--cui-card-group-margin": 0
}

  return (
      <CContainer fluid>
        <CRow xs={{cols: 1, gutterX:0, gutterY:5}} md={{cols:2}} >
          {data.map((item, index) => (
              <CCol xs style={varsCardsGroup} key={index} >
                  <CCard style={varsCard} >
                    <CCardTitle> {item.title} </CCardTitle>
                    <CCardImage orientation="left" src={"../../logo512.png"} style={{"width":"30%"}} />
                    <CCardBody> 
                        <CCardText>{item.phone} </CCardText>
                    </CCardBody>
                  </CCard>
              </CCol>
          ))}
        </CRow>
      </CContainer>
  );
};

export default DataTable;
