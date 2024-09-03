
import { CardGroup, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Offcanvas1 from './OffCanvas1';

import '../css/Experiences.css';
import amazonLogo from '../images/amazon.png';
import fourkitesLogo from '../images/fourkites.jpg';
import zohoLogo from '../images/zoho.png';
import NEUlogo from '../images/NEU.png';

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
        desc2: "•	Reduced TAT from 6 Days to Seconds:         Implemented a self-serve module that informs FBA Sellers about their products' Subscribe and Save (SnS) eligibility within seconds, eliminating the need for Seller Support intervention and reducing turnaround time from 6 days."
        +"•	Improved Operational Efficiency:            Engineered and launched the Amazon Seller's Product Ineligibility Page using React JS, JavaScript, and TypeScript, providing detailed product eligibility for Subscribe and Save. This tool that reduced Seller Support's monthly contacts by 60% (approximately 800 contacts per month), achieving an estimated annual savings of $45K USD."
        +"•	Backend Development:                   Developed backend API with Java Spring Boot and Coral, integrating Cloud Search and Dynamo tables across multiple regions using AWS SDK."
        +"•	Data Management and Optimization:      Established Cloud Search and Dynamo tables for efficient database management and reduced synchronizing time by 4x by establishing an automated batch processing mechanism of over 300M data from 4 hours to 30 minutes."
        +"•	Ownership:            Took complete ownership of the project and code I wrote, ensuring its stability and functionality. Resolved any bugs related to my project and provided knowledge transfer sessions about my project to teammates."
        +"•	Database migration:            Contributed to migrating the codebase from deprecating databases to new databases."
        +"•	Project Leadership and Collaboration:           Led cross-functional collaboration, organized meetings, and resolved issues by collaborating with legal teams, product managers, and senior SDEs."
        +"•	Inter-organizational Achievement:                 Formed and led a winning team in an inter-org hackathon, impressing judges from various Amazon organizations",
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
    
    // const zoho1 :experienceProps = {
    //     title: "Zoho Corp, IN",
    //     desc1: "Summer Intern ",
    //     desc2: "Acquired practical experience in Java multi-threading by developing a sample chat application.",
    //     date: "May 2022 - Jun 2022"
    // }
    
    // const zoho2 :experienceProps = {
    //     title: "Zoho Corp, IN",
    //     desc1: " MTS Incubation ",
    //     desc2: "Worked with the team to solve multiple bugs. Mentored fellow collegues on Java. ",
    //     date: "Aug 2023 - Nov 2023"
    // }

    const TA :experienceProps = {
            title: "Teaching Assistant",
            desc1: "Foundations of Data Science, Northeastern University",
            desc2: "Evaluated student assignments and provided constructive feedback, ensuring a clear understanding of foundational data science concepts." 
            + "Conducted regular office hours to assist students with course material, assignment queries, and conceptual understanding, fostering a supportive learning environment."
            + "Developed and reviewed solutions for assignment questions, ensuring accuracy and clarity to aid student comprehension and learning."
            + "Offered personalized guidance and mentorship to students, helping them navigate course challenges and achieve academic success.",
            date: "May 2024 - Dec 2024"
        }

    const experienceArray : experienceProps[] = [amazon, fourkites, TA];

    return (
        <Container className='Experience' >
            <h1 id = "experiences"> Experiences </h1>
            <HeaderAndFooterExample experienceArray = {experienceArray} />
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
        case 'Teaching Assistant':
            return NEUlogo;
        
        default:
            return ''; 
    }
}


export default Experience;