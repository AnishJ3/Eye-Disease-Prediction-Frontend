import { useEffect, useState } from "react";
import Logo from "../images/eye.png"
import User from "../images/user.png"
import Slider from "./Slider";


const Navbar = ({id,name}) =>{

    const [_id,setID] = useState();
    const [_name,setName] = useState();
    const [slider, setSlider] = useState(false);
    
    useEffect(()=>{
        setID(id);
        setName(name);
    })

    const handleClick = () =>{
        setSlider(!slider)
    }

    const handleClick1 = () =>{
        setSlider(false)
    }

  

    return(

        <>
            <div className="navbar" >
                <div className="navbar-brand" >
                    <img className="logo" src={Logo}/>
                    <span>EYECARE</span>
                </div>

                <ul className="nav-items">
                    
                    <li>Hello {_name}</li>
                    <li><button className="user-btn" onClick={handleClick}>
                        
                        <img className="user-pic" src={User} />
                        {slider && <Slider />}</button></li>
                    
                </ul>
            </div>
        </>

    );
}

export default Navbar;