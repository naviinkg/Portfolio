import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import '../css/Projects.css';



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
          <Card.Title>
            <a href = "https://github.com/K-Jeyavenkatesh/ISHOP" target="_blank" rel="noopener noreferrer">
              <img src = "https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg"
                style={{
                  width:'120px',
                  height: '120px',
                  marginLeft: '140px',
                  marginTop: '25px'
                }}
              />
            </a>
          </Card.Title>
        <Card.Body>
          <Card.Title>Amazon E-Commerce Desktop Clone </Card.Title>
          <Card.Text>
            An application with a feature to enable direct communication between buyers and sellers using in-built chat system. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> Built using <strong>Java Swing, AWT, MySQL</strong>. </small>
        </Card.Footer>
      </Card>
      <Card>
          <Card.Title>
            <a href = "https://github.com/Hitzzmuhil/Bootathon2" target="_blank" rel="noopener noreferrer">
              <img src = "https://c8.alamy.com/comp/WA0Y19/vector-logo-for-bidding-and-auctions-WA0Y19.jpg"
                style={{
                  width:'120px',
                  height: '120px',
                  marginLeft: '140px',
                  marginTop: '25px'
                }}
              />
            </a>
          </Card.Title>
        <Card.Body>
          <Card.Title> Online Bidding Auction Application </Card.Title>
          <Card.Text>
            A web application where sellers auctions their product while customers bids on products, and the highest bidder gets the prize.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> Built using <strong> Java, JSP, Servlets, MySQL </strong>. </small>
        </Card.Footer>
      </Card>
      <Card>
          <Card.Title>
            <img src = "https://banner2.cleanpng.com/20180330/toq/kisspng-portfolio-kitchen-photography-studio-apartment-portfolio-5abe433027c374.8238636815224184801629.jpg"
            style={{
              width:'120px',
              height: '120px',
              marginLeft: '140px',
              marginTop: '25px'
            }}
            />
          </Card.Title>
        <Card.Body>
          <Card.Title> My Portfolio </Card.Title>
          <Card.Text>
             You are here
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> Built using <strong>React, Typescript, HTML, CSS, Bootstrap</strong>. </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}



export default Projects;