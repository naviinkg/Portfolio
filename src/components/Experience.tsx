
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas1 from './OffCanvas1';

import '../css/Experiences.css';


function Experience() {
    return (
        <Container className='Experience' id = "experiences">
            <h1> Experiences </h1>
            <HeaderAndFooterExample/>
            {/* use images of each thing and when clicked use offCanvas to display the contents */}
        </Container>
    );
}


function HeaderAndFooterExample() {
  return (
    <>
        <Card className="text-center" border='dark'>
        <Card.Header></Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Offcanvas1/>
            {/* <Button variant="primary" onClick={handleShow}>Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted">Jan 2012 - Dec</Card.Footer>
        </Card>

        <Card className="text-center" border='dark'>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Offcanvas1/>
                {/* <Button variant="primary" onClick={handleShow}>Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">Jan 2012 - Dec</Card.Footer>
        </Card>

        <Card className="text-center" border='dark'>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Offcanvas1/>
                {/* <Button variant="primary" onClick={handleShow}>Go somewhere</Button> */}    
            </Card.Body>
            <Card.Footer className="text-muted">Jan 2012 - Dec</Card.Footer>
            </Card>
        <Card className="text-center" border='dark'>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Offcanvas1/>
                {/* <Button variant="primary" onClick={handleShow}>Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">Jan 2012 - Dec</Card.Footer>
        </Card>
    
    </>);

}




export default Experience;