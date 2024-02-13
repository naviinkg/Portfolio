import { CardGroup, Container } from 'react-bootstrap';
import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import '../css/Certifications.css';

function Certifications() {
    return (
        <Container className='certifications' id = 'certifications'>
            <h1> Certifications </h1>
            <Container className='innerContainer'>
                    <BasicExample/>
                    <BasicExample/>
            </Container>
        </Container>
    )
}



function BasicExample() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
  return (
    <CardGroup>
        <Card style={{ width: '20rem', marginRight:'20px', border:'0px', marginBottom:'20px', marginTop: '20px'}}>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1128426035/vector/elegant-blue-and-gold-diploma-certificate-template.jpg?s=612x612&w=0&k=20&c=u6nl2YC0OfpYpcNS3C97EZhgaJKs4IVh-Tc0a55M-wc=" 
                onClick={handleShowModal} 
                style={{cursor: 'pointer', width: '40%', height: 'auto', 
                display: 'block', margin:'auto', marginTop: '20px'}}/>

            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>

        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Full Size Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src="https://media.istockphoto.com/id/1128426035/vector/elegant-blue-and-gold-diploma-certificate-template.jpg?s=612x612&w=0&k=20&c=u6nl2YC0OfpYpcNS3C97EZhgaJKs4IVh-Tc0a55M-wc=" alt="Full Size" style={{ width: '100%', height: 'auto' }} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        <Card style={{ width: '20rem', marginRight:'20px', border:'0px', marginBottom:'20px', marginTop: '20px'}}>
            <Card.Img variant="top" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-design-5f025ee08bc0113e858606aa3b7e6e16_screen.jpg?ts=1654841501" 
                onClick={handleShowModal} 
                style={{cursor: 'pointer', width: '40%', height: 'auto', 
                display: 'block', margin:'auto', marginTop: '20px'}}/>

            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>

        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Full Size Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-certificate-template-design-5f025ee08bc0113e858606aa3b7e6e16_screen.jpg?ts=1654841501" alt="Full Size" style={{ width: '100%', height: 'auto' }} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        
        
    </CardGroup>
  );
}



export default Certifications;