import Container from 'react-bootstrap/Container';
import '../css/TitleCard.css'; // Import your image

function TitleCard() {
    return (
        <div className='Carousel' id="home">
          <h2 style={{ textAlign: 'center', marginTop: '5%', paddingLeft: '5%', paddingRight: '5%' }}>Welcome to my Page</h2>
            <Container className='container1'>
            <div className='leftContent' style={{ marginBottom: '20%', textAlign: 'center', marginRight:'10%' }}>
                    <p className='TitleContents'>
                        Hey there, I'm Naveen and you're looking at my portfolio webpage. 
                        This page was, is, and will be under construction as I tend to pick up new things and test them here (at least for now).
                    </p>

                    <p className='TitleContents'>
                        I am a Data Science graduate student with a Computer Science undergraduate degree. I don't want to bore you with anything else. Just have a look around and do hit me up 
                        if there is anything to improve in this webpage or you're in need of my services. Well that's all have fun looking around. 
                    </p>
                </div>

                <div className='rightContent' style={{marginBottom:'-10%'}}>
                    <img src={'https://w0.peakpx.com/wallpaper/961/507/HD-wallpaper-sung-jin-woo-solo-leveling-thumbnail.jpg'} alt="Profile" className="profileImage" />
                </div>
            </Container>    
        </div>
    );
}

export default TitleCard;
