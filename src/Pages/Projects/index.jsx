import { useEffect, useState } from "react";

import { Container } from "../../Components/Container";
import { ProjectCard } from "../../Components/ProjectsCard";
import { StyledProjects } from "./styles";

export const Projects = () => {

	const [ project, setProject ] = useState([]);
	const [ unicIdentifier,setUnicIdentifier ] = useState();
	const [ removeProjects,setRemoveProjects ] = useState([]);
	useEffect(()=>{
		const getUserLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

		setProject(getUserLoggedIn.projects);
	},[]);
	const getUserLogged = JSON.parse(localStorage.getItem("loggedInUser"));

	const getProjectsByUserLogged = getUserLogged.projects;



	const deleteProjectCardSelected = (e)=>{
		const removeItemById = getProjectsByUserLogged.filter((item)=> item.id !== e);
		console.log(removeItemById);
		

	};
	return (
		<StyledProjects>
			<div className="title_container">
				<h1>My Projects</h1>
			</div>
			{/*message && <Message msg={message} type="success" />*/}
			{/*projectMessage && <Message msg={projectMessage} type="success" />*/}
			<Container start={true}>

				{project.length > 0 &&
        project.map((projects) => {
        	return (
          	<ProjectCard
          		name={projects.name}
          		id={projects.id}
          		budget={projects.budget}
          		category={projects.category}
        			key={projects.id}
							
        		
          	/>
        	);
        }
        )}


			</Container>
		</StyledProjects>
	);
};
