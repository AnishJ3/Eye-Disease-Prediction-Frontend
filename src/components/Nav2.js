import logo from '../images/eyeimg.jpeg'
import { useNavigate } from 'react-router-dom'

const Nav2 = () =>{

    const nav = useNavigate();

    const handleClick = () =>{
        nav('/');
    }
    return(
        <>
            <div className="nav2">
                
                <img className="nav2-brand" onClick={handleClick} src={logo}/>
            </div>
        </>
    )
}

export default Nav2;