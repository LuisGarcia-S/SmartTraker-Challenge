//import React from "react";
import CardComponent from "../../components/CardPost/CardPost";
import "./header.css"  
import '@coreui/coreui/dist/css/coreui.min.css'
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from "@coreui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="topBar">
            <div className="topLeft">
                <Link to="/" style={{
                    "textDecoration":"none",
                    "color":"white"
                }}> Rockr Bloq </Link>
            </div>
            <div className="topCenter">
                <>
                    <CButton color="dark" style={{
                        "--cui-btn-bg":"#2d2d2d",
                        "--cui-btn-font-weight":"50px",
                        "--cui-btn-font-size":"32px",
                        "--cui-btn-border-color": "#2d2d2d",
                        "--cui-btn-font-family":"Rubik, sans-serif"
                    }} onClick={() => setVisible(!visible)}>Post</CButton>
                    <CModal
                      scrollable
                      visible={visible}
                      onClose={() => setVisible(false)}
                      aria-labelledby="ScrollingLongContentExampleLabel2"
                      >
                      <CModalHeader>
                        <CModalTitle id="ScrollingLongContentExampleLabel2"></CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                          <CardComponent/>
                      </CModalBody>
                    </CModal>
                </>
            </div>
            <div className="topRigth">
                Contact
            </div>
        </div>
    )
}

export default TopBar;
