import React, { useEffect, useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CRow, CCol, CContainer} from '@coreui/react';
import { CCard, CCardBody, CCardImage, 
    CCardText, CCardTitle, CButton } from '@coreui/react';
import { Link } from 'react-router-dom';

const API_NAME = process.env.API || 'localhost';
const API_PORT = process.env.API || '8080';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your endpoint URL
    const endpoint = `http://${API_NAME}:${API_PORT}/read_all`;

    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
  }, []);

const varsCard = {
    '--cui-card-spacer-y': 0,
    '--cui-card-spacer-x': 0,
    "--cui-card-border-radius":0,
    "--cui-card-cap-padding-x":0,
    "display":"flex"
}

const varsCardsGroup = { "--cui-card-group-margin": 0 }

  return (
    <CContainer 
      fluid
      style={{ "paddingTop":"35px" }}>
      <CRow xs={{
        cols: 1, 
        gutterX:0, 
        gutterY:5
        }} md={{cols:2}} >

        {data.map((item, index) => (
          <CCol 
            xs 
            style={varsCardsGroup} 
            key={index} >
              <CCard style={varsCard} >
                <CRow>
                  <CCol md={3}>
                    <CCardImage src={"../../logo512.png"} />
                  </CCol>
                  <CCol md={6}>
                    <CCardText> {item.author} </CCardText>
                    <CCardTitle> {item.title} </CCardTitle>
                    <CCardBody> 
                      <CCardText> {item.body.substring(0, 50)} </CCardText>
                      <Link to={{ pathname:`/Post/${item._id}`,
                                state:item }}> 
                        <CButton>{'>>'} </CButton>
                      </Link>
                    </CCardBody>
                  </CCol>
                </CRow>
              </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  );
};

export default DataTable;
