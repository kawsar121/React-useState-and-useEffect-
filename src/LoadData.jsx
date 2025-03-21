import { useEffect, useState } from "react"
import People from "./people";

export default function LoadData(){
    const [person, setPerson] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json()
        .then(data => setPerson(data))
    )
    },[])
    return(
        <div>
            <h2>Users :{person.length}</h2>
            {
                person.map(jonogon => <People manush={jonogon}></People>)
            }
         
        </div>
    )
}