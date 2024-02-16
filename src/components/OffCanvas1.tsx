import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface canvasProps{
  title:string,
  description:string,
  logo: string
}

function Offcanvas1(props:canvasProps)  {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{marginTop: '-10px', height:'34px', width: '130px'}}>
        Know More
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={props.logo} alt='' style={{ marginRight: '10px', width: '50px', height: '50px' }} />  
            {props.title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.description}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanvas1;