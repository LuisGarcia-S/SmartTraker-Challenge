import '@coreui/coreui/dist/css/coreui.min.css'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardImage, CCardText, 
    CCardTitle, CContainer, CRow, CCol
    } from '@coreui/react';

const API_NAME = process.env.API || 'localhost';
const API_PORT = process.env.API || '8080';

const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
 
  useEffect(() => {
  const endpoint = `http://${API_NAME}:${API_PORT}/read/${id}`;
      fetch(endpoint)
        .then( response => {
            if(!response.ok) {throw new Error ("Network response was not ok")}
            return response.json()
            })
        .then( data => {setData(data);})
  }, []);

  const date = new Date(data.createAt);

  // Options for formatting the date
  const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' };

  // Format the date
  const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <CContainer 
      fluid 
      style={{
          "width":"90%", 
          "paddingTop":"35px"
      }}>
      <CCard className='mb-3' >
        <CRow>
         <CCol md={3}>
         <CCardImage src={"../../logo512.png"} />
         </CCol>
         <CCol md={6} >
         {formattedDate}
         <CCardText> {data.author}</CCardText>
         <CCardTitle> {data.title} </CCardTitle>
         </CCol>
        </CRow>
        <CCardBody style={{
            "width":"70%",
            "margin":"0 auto"}}> 
           <CCardText> {data.body} </CCardText>
      </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default Post;
