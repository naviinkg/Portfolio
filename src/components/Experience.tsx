
import { CardGroup, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Offcanvas1 from './OffCanvas1';

import '../css/Experiences.css';
import amazonLogo from '../images/amazon.png';
import fourkitesLogo from '../images/fourkites.jpg';
import zohoLogo from '../images/zoho.png';

interface experienceProps{
    title: string,
    desc1: string,
    desc2: string,
    date: string
}


function Experience() {
    const amazon :experienceProps = {
        title: "Amazon, IN",
        desc1: "SDE Intern ",
        desc2: "Enhanced the Amazon seller homepage using React JS, JavaScript, and TypeScript. This webpage now provides visibility into the"
        +"ineligibility of the product for Subscribe and Save. It also provides detailed reasons for each product's ineligibility and guidance on actions"
        +"needed to make them eligible."
        +"Implemented front-end tests using Jest for quality assurance."
        +"Created backend API with Java Spring Boot and Coral, performing backend unit tests with JUnit and Mockito."
        +"Established Cloud Search and Dynamo tables on multiple regions for database management."
        +"Implemented automated synchronization for data changes between Cloud Search and Dynamo across regions."
        +"Optimized system performance, reducing synchronization time from 4 hours to 30 minutes for 300 million data entries."
        +"Collaborated with multiple teams, organized meetings with senior developers, and led several meetings."
        +"Took ownership of projects, resolved issues, and worked closely with the legal team, product managers, and senior SDEs on multiple teams"
        +"on UI data display."
        +"Contributed to migrating the codebase from deprecating databases to new databases."
        +"Formed a team within Amazon and won an inter-org hackathon, impressing judges who were directors from various Amazon organizations.",
        date: "Jan 2023 - June 2023"
    }
    
    const fourkites :experienceProps = {
        title: "Fourkites, IN",
        desc1: "Software Dev Intern ",
        desc2: "Led the migration of the team's EC2 instances to gravitational type A1 instances for cost optimization."
        +"Developed an automated script to regularly scan and eliminate redundant data from S3 buckets."
        +"Engaged in a bug bash, collaborating with the testing team to debug errors and enhance system stability.",
        date: "Aug 2022 - Jan 2023"
    }
    
    const zoho1 :experienceProps = {
        title: "Zoho Corp, IN",
        desc1: "Summer Intern ",
        desc2: "Acquired practical experience in Java multi-threading by developing a sample chat application.",
        date: "May 2022 - Jun 2022"
    }
    
    const zoho2 :experienceProps = {
        title: "Zoho Corp, IN",
        desc1: " MTS Incubation ",
        desc2: "Worked with the team to solve multiple bugs. Mentored fellow collegues on Java. ",
        date: "Aug 2023 - Nov 2023"
    }

    const experienceArray : experienceProps[] = [amazon, fourkites, zoho1, zoho2];

    return (
        <Container className='Experience' id = "experiences">
            <h1> Experiences </h1>
            <HeaderAndFooterExample experienceArray = {experienceArray}/>
            </Container>
    );
}


function HeaderAndFooterExample({ experienceArray }: { experienceArray: experienceProps[] }) {
    return (
        <CardGroup>
            {experienceArray.map((experience, index) => (
                <Card key={index} className="text-center" border='dark'>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title>
                        <img src={getImageSource(experience.title)} alt={experience.title} style={{ marginRight: '10px', width: '50px', height: '50px' }} />
                            {experience.title}
                        </Card.Title>
                        <Card.Text style={{marginTop:'10%'}}>{experience.desc1}</Card.Text>
                        <Offcanvas1 title={experience.title} description={experience.desc2} logo={getImageSource(experience.title)} />
                    </Card.Body>
                    <Card.Footer className="text-muted" style={{fontSize:'70%'}}>{experience.date}</Card.Footer>
                </Card>
            ))}
        </CardGroup>
    );
}

function getImageSource(title: string): string {
    switch (title) {
        case 'Amazon, IN':
            return amazonLogo;
        case 'Fourkites, IN':
            return fourkitesLogo;
        case 'Zoho Corp, IN':
            return zohoLogo;
        
        default:
            return ''; 
    }
}


export default Experience;