import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface CanvasProps {
  title: string;
  description: string;
  logo: string;
}

function Offcanvas1(props: CanvasProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to split the description into points
  const renderPoints = (description: string) => {
    return description.split('.').map((point, index) => (
      <p key={index}>{point}</p>
    ));
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        
      >
        Know More
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={props.logo}
              alt=""
              style={{ marginRight: '10px', width: '50px', height: '50px' }}
            />
            {props.title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{renderPoints(props.description)}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanvas1;
