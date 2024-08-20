import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/Projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects(){
    return(
        <Container className="Projects">
            <h1 id="projects">Projects</h1>
            <div className="Cards">
                <GroupExample/>
            </div>
        </Container>
    );
}

function GroupExample() {
  return (
    <CardGroup>

<Card>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <a href="https://github.com/naviinkg/EventFinder" target="_blank" rel="noopener noreferrer">
          <img src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*nWFPcxzUnuGEQxICHfGhSQ.png"
              style={{
                width: '120px',
                height: '120px',
                marginTop: '10%'
              }}
            />
            </a>
            <p className="image-notice">Click the image to view project <FaExternalLinkAlt/></p>
          
          </Card.Title>
        <Card.Body>
          <Card.Title>Event Finder</Card.Title>
          <Card.Text>
          Event Finder is a full-stack web application that allows users to browse, 
          create, and manage events. The application integrates with Auth0 for user authentication, 
          Ticketmaster for gathering more events and provides a seamless experience for managing events, 
          including payment processing, user profiles, event management.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Built using <strong>React, Bootstrap, NodeJs, Prisma, MySQL, Auth0</strong>.</small>
        </Card.Footer>
      </Card>

      <Card>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <a href="https://github.com/naviinkg/Insta-clone" target="_blank" rel="noopener noreferrer">
          <img src="data:image/jpeg;base64,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"
              style={{
                width: '120px',
                height: '120px',
                marginTop: '10%'
              }}
            />
            </a>
            <p className="image-notice">Click the image to view project <FaExternalLinkAlt/></p>
          
          </Card.Title>
        <Card.Body>
          <Card.Title>Instagram Clone</Card.Title>
          <Card.Text>
              Under construction
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Built using <strong>React, Typescript, Bootstrap, Java SpringBoot, DynamoDB</strong>.</small>
        </Card.Footer>
      </Card>


      <Card>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <a href="https://github.com/naviinkg/Health-Indicators-Diabetes" target="_blank" rel="noopener noreferrer">
          <img src="https://copyassignment.com/wp-content/uploads/2022/09/Diabetes-prediction-using-Machine-Learning-768x576.jpg"
              style={{
                width: '120px',
                height: '120px',
                marginTop: '10%'
              }}
            />
            </a>
            <p className="image-notice">Click the image to view project <FaExternalLinkAlt/></p>
          
          </Card.Title>
        <Card.Body>
          <Card.Title>Health Indicators Diabetes Prediction</Card.Title>
          <Card.Text>
          This project involves the application of machine learning techniques to analyze health indicators and predict health outcomes based on a dataset. The objective is to build a model that can accurately predict the status of individuals' health based on various input features. 
          The analysis includes preprocessing the data, selecting appropriate features, training models, and evaluating their performance.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Built using <strong>React, Typescript, HTML, CSS, Bootstrap</strong>.</small>
        </Card.Footer>
      </Card>

      <Card>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <a href="https://github.com/K-Jeyavenkatesh/ISHOP" target="_blank" rel="noopener noreferrer">
              <img src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg"
                style={{
                  width: '120px',
                  height: '120px',
                  marginTop: '10%'
                }}
              />
            </a>
            <p className="image-notice">Click the image to view project <FaExternalLinkAlt/></p>
          </Card.Title>
        <Card.Body>
          <Card.Title>Amazon E-Commerce Desktop Clone</Card.Title>
          <Card.Text>
            An application with a feature to enable direct communication between buyers and sellers using an in-built chat system.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Built using <strong>Java Swing, AWT, MySQL</strong>.</small>
        </Card.Footer>
      </Card>
      <Card>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <a href="https://github.com/Hitzzmuhil/Bootathon2" target="_blank" rel="noopener noreferrer">
              <img src="https://c8.alamy.com/comp/WA0Y19/vector-logo-for-bidding-and-auctions-WA0Y19.jpg"
                style={{
                  width: '120px',
                  height: '120px',
                  marginTop: '10%'
                }}
              />
            </a>
            <p className="image-notice">Click the image to view project <FaExternalLinkAlt/></p>
          </Card.Title>
        <Card.Body>
          <Card.Title>Online Bidding Auction Application</Card.Title>
          <Card.Text>
            A web application where sellers auction their products while customers bid on products, and the highest bidder wins the prize.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Built using <strong>Java, JSP, Servlets, MySQL</strong>.</small>
        </Card.Footer>
      </Card>
      <Card>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <a href="https://github.com/naviinkg/Portfolio" target="_blank" rel="noopener noreferrer">
          <img src="https://banner2.cleanpng.com/20180330/toq/kisspng-portfolio-kitchen-photography-studio-apartment-portfolio-5abe433027c374.8238636815224184801629.jpg"
              style={{
                width: '120px',
                height: '120px',
                marginTop: '10%'
              }}
            />
            </a>
            <p className="image-notice">Click the image to view project <FaExternalLinkAlt/></p>
          
          </Card.Title>
        <Card.Body>
          <Card.Title>My Portfolio</Card.Title>
          <Card.Text>
             You are here
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Built using <strong>React, Typescript, HTML, CSS, Bootstrap</strong>.</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default Projects;
