import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ProjectCard } from "../../Components/ProjectsCard";
import { StyledProjects, TitleContainer } from "./styles";
export const Projects = () => {

	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const [ project, setProject ] = useState([]);
	useEffect(()=>{
		const getUserLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
		setProject(getUserLoggedIn.projects);
	},[]);
	const notifySucess = () => {
		toast.success("Project Deleted successfully!!!", {
			position:"top-left",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	const notifyErr = () => {
		toast.error("Project deleted error!!!", {
			position: "top-left",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	const deleteProjectCardSelected = (e)=>{
		
		try{
			notifySucess();
			e.preventDefault;
			const getProjectId = e.target.id; //armengue, nem mexa 
			const selectProjects = loggedInUser.projects;
			const filterProjectForDelete = selectProjects.filter((item)=> item.id !== getProjectId);
			localStorage.setItem("loggedInUser",JSON.stringify({ ...loggedInUser, projects:filterProjectForDelete }));
			const updateUser = JSON.parse(localStorage.getItem("loggedInUser"));
			const usersCopied = JSON.parse(localStorage.getItem("users") || []);
			const userFilter = usersCopied.filter((users) => users.email !== loggedInUser.email);
			localStorage.setItem("users",JSON.stringify([ ...userFilter,updateUser ]));
			setTimeout(()=>{
				window.location.reload();
			},2500);
		} catch(error){
			notifyErr();
		}

	};
	return (
		<>
			<TitleContainer>
				<h1>My Projects</h1>
			</TitleContainer>
			<StyledProjects>
			
			
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
				<ToastContainer
					position="top-left"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover={false}
					theme="light"
					role="alert"
				/>
		
			</StyledProjects>
		</>
	);
};
