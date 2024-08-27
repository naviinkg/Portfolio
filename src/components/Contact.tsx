import { Container } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Contact() {
    return (
        <Container className='Contact'>
            <h4 id="contact" style={{ textAlign: 'center', color: 'rgb(94, 47, 55)' }}>Reach out to me at</h4>
            <ContactPage />
        </Container>
    );
}

function ContactPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1%' }}>
            <button
                style={{ backgroundColor: '#0082ca', color: '#ffffff', borderRadius: '10%', marginLeft: '1.5%', padding: '10px' }}
                onClick={() => window.open('https://www.linkedin.com/in/naveen-kavitha-gunasekaran-53a996206/', '_blank')}
            >
                <FaLinkedin size={24} />
            </button>

            <button
                style={{ backgroundColor: '#db4437', color: '#ffffff', borderRadius: '10%', marginLeft: '1.5%', padding: '10px' }}
                onClick={() => window.open('mailto:kgnaveen2002@gmail.com', '_blank')}
                title="Send mail to kgnaveen2002@gmail.com"
            >
                <FaEnvelope size={24} />
            </button>

            <button
                style={{ backgroundColor: '#181717', color: '#ffffff', borderRadius: '10%', marginLeft: '1.5%', padding: '10px' }}
                onClick={() => window.open('https://github.com/naviinkg', '_blank')}
            >
                <FaGithub size={24} />
            </button>

            <button
                style={{ backgroundColor: '#FFA116', color: '#ffffff', borderRadius: '10%', marginLeft: '1.5%', padding: '10px' }}
                onClick={() => window.open('https://leetcode.com/u/NaveenZ', '_blank')}
            >
                <SiLeetcode size={24} />
            </button>

            <button
                style={{ backgroundColor: '#007bff', color: '#ffffff', borderRadius: '10%', marginLeft: '1.5%', padding: '10px' }}
                onClick={() => window.open('tel:+18573978326', '_blank')}
                title="Call +1234567890"
            >
                <FaPhoneAlt size={24} />
            </button>
        </div>
    );
}

export default Contact;
