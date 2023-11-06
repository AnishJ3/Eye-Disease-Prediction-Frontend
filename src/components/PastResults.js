import './css/Main.css'
import { useEffect, useState } from 'react';
import Axios from "axios"
 
 const PastResults = ({docName}) =>{

    const [data, setData] = useState([]);
    const Dname = docName;
    console.log({Dname:Dname})

    useEffect(() =>{

        Axios.get('https://eye-disease-backend-6ion.onrender.com/pastResults', {Dname})
        .then((res) =>{
            if(res.status == 200)
            {
                setData(res.data)
                console.log(res.data)
                console.log(res)
            }
        })
        .catch(err=>alert(err))

    },[])

    return(
        <>
        
        <span className='head-title'>Past Results</span>

        <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Result</th>
             
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, ind)=>{

                            return(
                                <>
                                <tr>
                                    <td>{val.Pname}</td>
                                    <td>{val.Dname}</td>
                                    <td>{val.Result}</td>
                                    
                                    
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        
        </>
    );
 }

 export default PastResults;