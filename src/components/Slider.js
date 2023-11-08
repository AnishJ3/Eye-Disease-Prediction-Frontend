import { useNavigate } from 'react-router-dom'
import './css/Slider.css'

const Slider = () =>{

    const nav = useNavigate()

    const handleLogout = () =>{
        nav('/')
    }

    return(
        <>
        <div className='slider-container'>
            <ul className='slid'>
                <li onClick={handleLogout}>Logout</li>
                <li>Close <span>❌</span></li>
            </ul>
        </div>
        </>
    )

}

export default Slider;