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

  const programming_skills: string[] = ['Java','SpringBoot', 'SQL','JSP/Servlets' ,'AWT/Swing' ,'Shell Scripting' ,'Python', 'ReactJs'];
  const programming_proficiency: string[] = ['Excellent', 'Excellent', 'Excellent', 'Good', 'Good', 'Good', 'Learning', 'Learning'];

  const tools_skills: string[] = ['Git/Github', 'JIRA', 'POSTMAN', 'AWS SQS', 'AWS Lambda', 'Cloudwatch', 'EC2 Instances'];
  const tools_proficiency: string[] = ['Excellent', 'Excellent', 'Excellent', 'Good', 'Good', 'Good', 'Good'];

  const database_skills: string[] = ['DBMS','Mysql', 'DynamoDB', 'Cloudsearch'];
  const database_proficiency: string[] = ['Excellent', 'Excellent', 'Good', 'Good'];

  const os_skills: string[] = ['Windows', 'Linux', 'MacOS'];
  const os_proficiency: string[] = ['Excellent', 'Excellent', 'Good'];

  const datascience: string[] = ['Python for Data Science', 'Jupyter Notebook', 'Google Colab', 'Supervised Learning', 'Model Evaluation'];
  const datascience_proficiency: string[] = ['Good', 'Excellent', 'Excellent', 'Good', 'Good'];

  return (
    <Container className='skills'>
      <h1 id='skills'>Skills</h1>
      <div className="hint">
        <p>Hover over a skill to see the proficiency level.</p>
      </div>
      <Container className='innerContainerSkills' style={{ marginLeft: '0%', backgroundColor: 'white' }}>
        <h6>Programming Proficiencies</h6>
        <TooltipPositionedExample skills={programming_skills} proficiency={programming_proficiency} />
        
        <h6>Tools Proficiencies</h6>
        <TooltipPositionedExample skills={tools_skills} proficiency={tools_proficiency} />
      
        <h6>Database Proficiencies</h6>
        <TooltipPositionedExample skills={database_skills} proficiency={database_proficiency} />
        
        <h6>Operating System Proficiencies</h6>
        <TooltipPositionedExample skills={os_skills} proficiency={os_proficiency} />

        <h6>Data Science Expertise</h6>
        <TooltipPositionedExample skills={datascience} proficiency={datascience_proficiency} />
      </Container>
    </Container>
  )
}

function TooltipPositionedExample({ skills, proficiency }: TooltipPositionedExampleProps) {

  return (
    <Container className='skillsContainer'>
      {skills.map((skill, index) => (
        <OverlayTrigger
          key={skill}
          placement={'top'}
          overlay={
            <Tooltip id={`tooltip-${index}`}>
              <strong>{proficiency[index]}</strong>
            </Tooltip>
          }
        >
          <Button 
            variant="secondary" 
            style={{ marginRight: '1%', marginTop: '1%' }}
            aria-label={`Click to see proficiency in ${skill}`}
          >
            {skill}
          </Button>
        </OverlayTrigger>
      ))}
    </Container>
  );
}

export default Skills;
