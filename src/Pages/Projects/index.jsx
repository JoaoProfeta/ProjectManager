import { useEffect, useState } from "react";
import { Container } from "../../Components/Container";
import { ProjectCard } from "../../Components/ProjectsCard";
import { StyledProjects } from "./styles";

export const Projects = () => {

	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const [ project, setProject ] = useState([]);
	useEffect(()=>{
		const getUserLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
		setProject(getUserLoggedIn.projects);
	},[]);
	const deleteProjectCardSelected = (e)=>{

		e.preventDefault;
		const getProjectId = e.target.id; //armengue, nem mexa 
		const selectProjects = loggedInUser.projects;
		const filterProjectForDelete = selectProjects.filter((item)=> item.id !== getProjectId);
		localStorage.setItem("loggedInUser",JSON.stringify({ ...loggedInUser, projects:filterProjectForDelete }));
		const updateUser = JSON.parse(localStorage.getItem("loggedInUser"));
		const usersCopied = JSON.parse(localStorage.getItem("users") || []);
		const userFilter = usersCopied.filter((users) => users.email !== loggedInUser.email);
		localStorage.setItem("users",JSON.stringify([ ...userFilter,updateUser ]));
		window.location.reload();

	};
	return (
		<StyledProjects>
			<div className="title_container">
				<h1>My Projects</h1>
			</div>
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
        			handleDelete={deleteProjectCardSelected}
          	/>
        	);
        }
        )}
			</Container>
		</StyledProjects>
	);
};
