import { Container } from "react-bootstrap";
import '../css/Projects.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function Projects(){
    return(
        <Container className="Projects" id="projects">
            <h1> Projects </h1>
            <div className="Cards">
                <GroupExample/>
            </div>
        </Container>
    )
}




function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>
            <img src = "data:image/jpeg;base64,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"/>
          </Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}



export default Projects;