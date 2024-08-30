import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/Projects.css';

function Projects(){
    return(
        <Container className="Projects">
            <h1 id="projects">Projects</h1>
            <div className="hint">
              <p>Click on the image to open the project.</p>
            </div>
            <div className="Cards">
                <GroupExample/>
            </div>
        </Container>
    );
}

function GroupExample() {
  return (
    <>
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
          <a href="https://github.com/naviinkg/InstagramClone" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.pixabay.com/photo/2021/10/24/21/23/instagram-6739334_640.jpg"
              style={{
                width: '120px',
                height: '120px',
                marginTop: '10%'
              }}
            />
            </a>
            
          
          </Card.Title>
        <Card.Body>
          <Card.Title>Instagram Clone</Card.Title>
          <Card.Text>
          Developing an Instagram clone using Java, Spring Boot, and DynamoDB, 
          focusing on user authentication, profile management, functionalities, and post operations. 
          Implemented scalable data storage with DynamoDB and utilized BCrypt for password encryption. 
          Integrated user interface interactions with React and Node.js, ensuring seamless user experience and secure data handling, integrated with Amazon SMS (Simple Mail Service) for OTP verification and Redis session management.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Built using <strong>React, Bootstrap, Java SpringBoot, DynamoDB, Redis, Amazon SES</strong>.</small>
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
            
            </Card.Title>
          <Card.Body>
            <Card.Title>Health Indicators Diabetes Prediction</Card.Title>
            <Card.Text>
            This project involves the application of machine learning techniques to analyze health indicators and predict health outcomes based on a dataset. The objective is to build a model that can accurately predict the status of individuals' health based on various input features. 
            The analysis includes preprocessing the data, selecting appropriate features, training models, and evaluating their performance.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Built using <strong>Python, Jupyter Notebook</strong>.</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup style={{ paddingTop: '3%' }}>
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
    </>
  );
}

export default Projects;
