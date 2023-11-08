import eye from '../images/insurance.png'
import hospital from '../images/hospital.png'
import checked from '../images/checked.png'
import Call from '../images/call.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.jpg'
import facebook from '../images/facebook.png'



const Footer1 = () =>{

    return(
        <>
        <div className="footer1-container">
            <div className="footer">

                <div className="footer-item">
                    <img className="footer-banner" src={eye}/>

                    <p className="footer-heading">
                        Find an Eye Specialist
                    </p>

                    <p className="footer-text">
                        
                    Click on the link below this text to find a eye Specialist
                    near to you and book a appointment wiht him to get your
                    eyes checked.                                 
                    </p>
                    
                    <a className="footer-link"href="https://www.centreforsight.net/doctor/eye-specialist-near-me/">Find an Eye Specialist</a>
                </div>

                <div className="footer-item">
                    <img className="footer-banner" src={hospital}/>

                    <p className="footer-heading">
                        Visit Center For Sight
                    </p>

                    <p className="footer-text">
                        
                    Established in 1996, Centre for Sight has been continuously striving to provide specialized eye care for all. The group is a leading provider of specialized eye care with 50+ centres across 25+ cities in 12 states of India.
                    </p>
                    
                    <a className="footer-link"href="https://www.centreforsight.net/eye-hospitals-in-india/">Locate a Center</a>
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
                <a  href="https://www.linkedin.com/in/anish-joshi-5008b0228" ><img className='social' src={linkedin}/></a>
                <a href="https://github.com/AnishJ3">
                <img className='social' href="https://github.com/AnishJ3" src={github}/>
                </a>
                
            </div>

        </div>
        </>
    )
}

export default Footer1;