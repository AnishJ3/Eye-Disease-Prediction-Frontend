import './css/Main.css'
import Del from '../images/del.png'
import Edit from '../images/edit.png'
import { useNavigate } from 'react-router-dom'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import Axios from "axios"

const PatientRecords = ({data, setFlag1, setFlag2 , setFlag3, setPName, docEmail}) =>{

    const nav = useNavigate()

    const handleClick = (e) =>{
        setFlag1(false);setFlag2(true);setFlag3(false);
        setPName(e.target.name);
    }

    const handleDelete = (e) =>{

        console.log(e.target.name)
        Axios.post('https://eye-disease-backend-6ion.onrender.com/deletePatient/' + e.target.name)
        .then((res)=>{
            console.log(res)
        })
        .catch((err) =>alert(err))

    }

    const handleEdit = (e) =>{

        nav('/edit', {state: {docEmail:docEmail, id:e.target.id}})
    }

    return(
        <>
        <span className='head-title'>Patient Records</span>
        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Mob. No.</th>
                        <th>Date of Visit</th>
                        <th>Modify</th>
                        <th>Past Result</th>
                        <th>Upload Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, ind)=>{

                            return(
                                <>
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.email}</td>
                                    <td>{val.MobNo}</td>
                                    <td>{val.Date}</td>
                                    
                                    <td className='btns'>
                                        <button onClick={handleDelete} name={val._id}>Delete</button>
                                        <button onClick = {handleEdit} id={val._id}>Edit</button>
                                    </td>
                                    <td>{val.result}</td>
                                    <td className='upload-btn'>
                                        <button name={val.name} onClick={handleClick}>Upload</button>
                                    </td>
                                    
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default PatientRecords;