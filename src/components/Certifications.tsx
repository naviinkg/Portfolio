import { CardGroup, Container } from 'react-bootstrap';
import { Card, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

import '../css/Certifications.css';
import javascript from '../images/hackerrank javascript_basic certificate.png';
import java from '../images/hackerrannk java_basic certificate.png';
import sql from '../images/hackerrank sql_intermediate certificate.png';
import neoCodathon from '../images/Neo-codathon.png';
import springBoot from '../images/Springboot_Certificate.jpg';


interface certificateProps {
    title: string,
    description: string,
    image: string
}


function Certifications() {

    const javaScript : certificateProps= {
        title: 'JavaScript',
        description: '',
        image: javascript
    }

    
    const Sql : certificateProps= {
        title: 'SQL',
        description: '',
        image: sql
    }

    
    const codathon : certificateProps= {
        title: 'Top Five in National Codathon',
        description: '',
        image: neoCodathon
    }

    
    const Java : certificateProps= {
        title: 'Java',
        description: '',
        image: java
    }

    const SpringBoot : certificateProps= {
        title: 'SpringBoot',
        description: '',
        image: springBoot
    }

    const certificateArray: certificateProps[] = [Java, SpringBoot]
    const certificateArray2: certificateProps[] = [codathon, Sql, javaScript]

    return (
        <Container className='certifications' id = 'certifications'>
            <h1> Certifications </h1>
            <Container className='innerContainer'>
                    <BasicExample certificateArray = {certificateArray}/>
                    <BasicExample certificateArray = {certificateArray2}/>
                    {/* <BasicExample/> */}
            </Container>
        </Container>
    )
}



function BasicExample({ certificateArray } : { certificateArray: certificateProps[] }) {
    const [showModals, setShowModals] = useState(Array(certificateArray.length).fill(false));

    const handleShowModal = (index : number) => {
        const newModals = [...showModals];
        newModals[index] = true;
        setShowModals(newModals);
    };

    const handleCloseModal = (index : number) => {
        const newModals = [...showModals];
        newModals[index] = false;
        setShowModals(newModals);
    };

    return (
        <CardGroup>
            {certificateArray.map((certificate, index) => (
                <React.Fragment key={index}>
                    <Card style={{marginBottom:'1%', marginTop:'1%', marginLeft: '2%'}}>
                        <Card.Img
                            variant="top"
                            src={certificate.image}
                            onClick={() => handleShowModal(index)}
                            style={{ cursor: 'pointer', width: '50%', height: '60%', margin: 'auto', marginTop: '3%'}}
                        />
                        <Card.Body >
                            <Card.Title className="text-center">{certificate.title}</Card.Title>
                            <Card.Text>{certificate.description}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Modal show={showModals[index]} onHide={() => handleCloseModal(index)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{certificate.title} Certification</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={certificate.image} style={{ width: '95%', height: '100%', marginLeft: '10px' }} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleCloseModal(index)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </React.Fragment>
            ))}
        </CardGroup>
    );
}



export default Certifications;