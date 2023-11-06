import Axios from "axios";
import { useEffect, useState } from "react";

const Records = () =>
{
    const [arr,setArr] = useState([])

    useEffect( () =>{
        Axios.get('https://eye-disease-backend-6ion.onrender.com/record')
        .then((res) =>
            {
                if(res.status === 200)
                {
                    setArr(res.data);
                }
                else
                {
                    Promise.reject();
                }
            }
        )
        .catch( err => alert(err))
        
        
    },[])

    console.log(arr)

    const ListItems =() =>{
        return arr.map((val ,ind) =>{
            return(
                <>
                    <h1>{val.name}</h1>
                    <h1>{val.email}</h1>
                    <h1>{val.password}</h1>
                </>
            )
        })
    }

    return(
        <>
        <table class="table table-success table-bordered table-striped">
            <thead>
                <tr style={{backgroundColor:"forestgreen"}}>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Password</th>
                    
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
        </>
    )


    
}

export default Records;