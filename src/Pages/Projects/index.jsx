import { useEffect, useState } from "react";
import { Container } from "../../Components/Container";
import { Submit } from "../../Components/SubmitButton";
import { LinkButton } from "../../Components/linkButtom";
import { StyledProjects } from "./styles";
import { ProjectCard } from "../../Components/ProjectsCard";

export const Projects = () => {
  
	const [ project, setProject ] = useState([]);

	useEffect(()=>{
		const getUserLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

		setProject(getUserLoggedIn.projects);
	},[]);
	
	return (
		<StyledProjects>
			<div className="title_container">
				<h1>Meus projetos</h1>

				<LinkButton to="/newproject" text="Criar Projeto" />
			</div>
			{/*message && <Message msg={message} type="success" />*/}
			{/*projectMessage && <Message msg={projectMessage} type="success" />*/}
			<Container startStyle={true}>

				{project.length > 0 &&
        project.map((projects) => {
        	return (
          	<ProjectCard
          		name={projects.name}
          		id={projects.id}
          		budget={projects.budget}
          		key={projects.id}
          		category={projects.category}
                
          	/>
        	);
        }
        )}


			</Container>
			<Submit text="apagar"/>
		</StyledProjects>
	);
};
