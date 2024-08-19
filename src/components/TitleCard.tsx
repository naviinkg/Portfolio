import Container from 'react-bootstrap/Container';
import '../css/TitleCard.css'; // Import your image

import profile from '../images/cartoonize_IMG_4002.jpg'
import PortfolioText from './PortfolioText';

function TitleCard() {
    return (
        <div className='Carousel' id="home" style={{display:'flex', justifyContent:'center'}}>
          <Container className='container1'>
            <div className='leftContent' style={{ marginBottom: '20%', textAlign: 'center', marginRight:'10%' }}>
                    <PortfolioText/>
                    <p className='TitleContents'>
                        Hey there, This is Naveen and you're looking at my portfolio webpage. 
                        This page was, is, and will be under construction as I tend to pick up new things and test them here (atleast for now) 
                        <br/>PS: try clicking on every component.
                    </p>
                    <br/>

                    <p className='TitleContents'>
                        I am a Data Science graduate student with a Computer Science undergraduate degree. Have fun looking around and do hit me up 
                        if there is anything to improve in this webpage or you're in need of my services.
                    </p>
                </div>

                <div className='rightContent' style={{marginTop:'10%'}}>
                    <img src={profile} alt="Profile" className="profileImage" />
                </div>
            </Container>    
        </div>
    );
}

export default TitleCard;
