
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
        title: "Amazon",
        desc1: "Software Developement Engineer Intern ",
        desc2: "",
        date: " Jan 2023 - Jun 2023 "
    }
    
    const fourkites :experienceProps = {
        title: "Fourkites",
        desc1: "Software Developer Intern ",
        desc2: "",
        date: " Aug 2022 - Jan 2023 "
    }
    
    const zoho1 :experienceProps = {
        title: "Zoho Corporation",
        desc1: "Summer Intern ",
        desc2: "",
        date: " May 2022 - Jun 2022 "
    }
    
    const zoho2 :experienceProps = {
        title: "Zoho Corporation",
        desc1: " Member Technical Staff Incubation ",
        desc2: "",
        date: " Aug 2023 - Nov 2023 "
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
                        <Card.Text>{experience.desc1}</Card.Text>
                        <Offcanvas1 title={experience.title} description={experience.desc2} logo={getImageSource(experience.title)} />
                    </Card.Body>
                    <Card.Footer className="text-muted">{experience.date}</Card.Footer>
                </Card>
            ))}
        </CardGroup>
    );
}

function getImageSource(title: string): string {
    switch (title) {
        case 'Amazon':
            return amazonLogo;
        case 'Fourkites':
            return fourkitesLogo;
        case 'Zoho Corporation':
            return zohoLogo;
        
        default:
            return ''; 
    }
}


export default Experience;