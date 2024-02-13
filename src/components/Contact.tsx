import { Container } from "react-bootstrap";
import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Contact() {
    return(
        <Container id = "contact" className = 'Contact'>
            <ContactPage/>
        </Container>
    )
}



function ContactPage() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button
          style={{ backgroundColor: '#0082ca', color: '#ffffff', borderRadius: '10%', marginLeft: '80px' }}
          onClick={() => window.open('https://google.com', '_blank')}
        >
          LinkedIn
        </button>
  
        <button
          style={{ backgroundColor: '#db4437', color: '#ffffff', borderRadius: '10%', marginLeft: '50px' }}
          onClick={() => window.open('mailto:lucizodi@gmail.com', '_blank')}
          title="send mail to me"
        >
          Gmail
        </button>
  
        <button
          style={{ backgroundColor: '#181717', color: '#ffffff', borderRadius: '10%', marginLeft: '50px' }}
          onClick={() => window.open('https://github.com', '_blank')}
        >
          GitHub
        </button>
  
        <button
          style={{ backgroundColor: '#FFA116', color: '#ffffff', borderRadius: '10%', marginLeft: '50px' }}
          onClick={() => window.open('https://leetcode.com', '_blank')}
        >
          Leetcode
        </button>
  
        <button
          style={{ backgroundColor: '#007bff', color: '#ffffff', borderRadius: '10%', marginLeft: '50px'  }}
          onClick={() => window.open('tel:+1234567890', '_blank')}
          title="Call +1234567890"
        >
          Phone
        </button>
      </div>
    );
}
  


export default Contact;