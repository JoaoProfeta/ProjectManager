import axios from "axios";
import { QueryClientProvider, useQuery } from "react-query";
import { useEffect } from "react";
import { useState } from "react";





export const ProjectTestes = ()=>{

    const [projects,setProjects] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/projects')
         .then(response => {
           setProjects(response.data) 
        })
     }, [])
      
     


    return (
        <div>
            <ul>
                { projects.map(data =>{
                    return(
                    <li key={data.name}>
                        {data.name}, {data.budget}, {data.category.name}
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}