import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import '../css/Skills.css';


interface TooltipPositionedExampleProps {
    skills: string[];
    proficiency: string[];
  }

function Skills() {

    
  const programming_skills: string[] = ['skill1', 'skill1', 'skill1', 'skill1', 'skill1'];
  const programming_proficiency: string[] = ['good', 'bad', 'okay', 'nice', 'cool'];

    return (
        <Container className='skills' id = 'skills'>
            <h1> Technological Proficiencies </h1>
            <Container className='innerContainer' style={{marginLeft :'220px', backgroundColor: 'white'}}>
                <h6> Programming Proficiencies </h6><TooltipPositionedExample skills={programming_skills} proficiency={programming_proficiency} />
            
                <h6> Programming Proficiencies </h6><TooltipPositionedExample skills={programming_skills} proficiency={programming_proficiency} />
        
                <h6> Programming Proficiencies </h6><TooltipPositionedExample skills={programming_skills} proficiency={programming_proficiency} />
                
                <h6> Programming Proficiencies </h6><TooltipPositionedExample skills={programming_skills} proficiency={programming_proficiency} />
                
                <h6> Programming Proficiencies </h6><TooltipPositionedExample skills={programming_skills} proficiency={programming_proficiency} />
            </Container>
        </Container>
    )
}


function TooltipPositionedExample( {skills , proficiency} : TooltipPositionedExampleProps) {

  return (
    <Container className='random'>
      {skills.map((skills, index) => (
        <OverlayTrigger
          key={skills}
          placement={'top'}
          overlay={
            <Tooltip id={`tooltip-${'top'}`}>
              <strong> {proficiency[index] }</strong>
            </Tooltip>
          }
        >
          <Button variant="secondary" style={{ marginRight: '40px'}}> {skills}</Button>
        </OverlayTrigger>
      ))}
    </Container>
  );
}


export default Skills;