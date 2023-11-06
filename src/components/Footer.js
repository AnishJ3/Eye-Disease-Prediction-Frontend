import eye from '../images/insurance.png'
import hospital from '../images/hospital.png'
import checked from '../images/checked.png'
import Call from '../images/call.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.jpg'
import facebook from '../images/facebook.png'


const Footer = () =>{

    return (
        <>
        <div className="footer-container">
            <div className="footer">

                <div className="footer-item">
                    <img className="footer-banner" src={eye}/>

                    <p className="footer-heading">
                        Find an Eye Specialist
                    </p>

                    <p className="footer-text">
                        
                    Find a doctor tool assists you in choosing from our diverse
                     pool of health specialists. Discover better health &amp; 
                     wellness by using our doctor ratings &amp; reviews to make your choice                                    
                    </p>
                    
                    <a className="footer-link"href="">Find an Eye Specialist</a>
                </div>

                <div className="footer-item">
                    <img className="footer-banner" src={hospital}/>

                    <p className="footer-heading">
                        Locate Center For Sight
                    </p>

                    <p className="footer-text">
                        
                    From locating one of our centres across India to booking an appointment, we are just a click away!                                    
                    </p>
                    
                    <a className="footer-link"href="">Locate a Center</a>
                </div>

                <div className="footer-item">
                    <img className="footer-banner" src={checked}/>

                    <p className="footer-heading">
                        Locate Center For Sight
                    </p>

                    <p className="footer-text">
                        
                    From locating one of our centres across India to booking an appointment, we are just a click away!                                    
                    </p>
                    
                    <a className="footer-link"href="">See our all specialities</a>
                </div>

                <div className='footer-item1'>

                    <div className='footer-item-list'>
                        <img className='call' src={Call}/>
                        <div className='footer-foot'>
                            <span>Delhi/NCR</span>
                            <span>78XXXXXXXXX</span>                       
                        </div>

                    </div>

                    <div className='footer-item-list'>
                        <img className='call' src={Call}/>
                        <div className='footer-foot'>
                            <span>Rest of India</span>
                            <span>78XXXXXXXXX</span>                       
                        </div>

                    </div>
                </div>


            </div>

            <div className='social-links'>
                <img className='social' src={linkedin}/>
                <img className='social' src={github}/>
                <img className='social' src={facebook}/>
            </div>

        </div>
        </>

    )
}

export default Footer;