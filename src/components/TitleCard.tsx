

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/TitleCard.css';


function TitleCard() {
    return (
      <div className='Carousel' id = "home">
        <Container className='container1'>
          {/* <img className = 'image1' src='https://images6.alphacoders.com/134/1349782.jpeg'></img> */}
          <h2> Welcome to my Page </h2>

          <p className='TitleContents'>
            Force the contents of your nav to extend the full available width.
            To proportionately fill the space use fill. Force the contents of your nav to extend the full available width.
            To proportionately fill the space use fill. Force the contents of your nav to extend the full available width.
            To proportionately fill the space use fill. Force the contents of your nav to extend the full available width.
            To proportionately fill the space use fill. Force the contents of your nav to extend the full available width.
            To proportionately fill the space use fill. 
          </p>
        </Container>    
     </div>
  );
}




export default TitleCard;