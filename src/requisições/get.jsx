import axios from "axios";
import { useEffect, useState } from "react";





export const ProjectTestes = ()=>{

	const [ projects,setProjects ] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/projects")
			.then((response) => {
				setProjects(response.data); 
			});
	}, []);
      
     


	return (
		<div>
			<ul>
				{ projects.map((data) =>{
					return(
						<li key={data.name}>
							{data.name}, {data.budget}, {data.category.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};


// busca usuários existentes no localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];

// adiciona o novo usuário ao array
const updatedUsers = [...users,];
console.log(" verificando", signup);

// salva o novo array no localStorag
localStorage.setItem("users", JSON.stringify(updatedUsers));
//console.log(updatedUsers);
