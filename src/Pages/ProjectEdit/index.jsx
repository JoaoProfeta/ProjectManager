
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "../../Components/Input";
import { ProjectCard } from "../../Components/ProjectsCard";
import { Select } from "../../Components/Select";
import { EditCard } from "./styles";
export const ProjectEdit = () => {
	const location = useLocation();
	const [ name, setName ] = useState(location.state.name || "");
	const [ budget, setBudget ] = useState(location.state.budget || "");
	const [ category, setCategory ] = useState(location.state.category || 0);
	const [ categories, setCategories ] = useState([]);
	const [ pickProjects, setPickProjects ] = useState([]);
	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const getProjectsLoggedUser = loggedInUser.projects;
	const logged = !!loggedInUser;
	useEffect(
		() => {
			setPickProjects(loggedInUser.projects);		
			if (logged) {	
				const getCategories = JSON.parse(localStorage.getItem("categories"));
				setCategories(getCategories);
			}
		},
		[]
	);
	const handleCategoryProjects = (e) => {
		setCategory(e.target.value);
	};
	const handleOnChangeName = (e) => {
		setName(e.target.value);
	};
	const handleOnChangeBudget = (e) => {
		setBudget(e.target.value);
	};	
	const saveChanges = (e)=>{
		e.preventDefault();
		const filterProjectsRest = getProjectsLoggedUser.filter((project) => project.id !== location.state.id);
		const filterProjectAppliesChange = getProjectsLoggedUser.find((project) => project.id === location.state.id);
		console.log();
		const projectAppliesChange = { ...filterProjectAppliesChange, name:name, budget:budget, category:category, id:location.state.id,  };
		setPickProjects([ ...filterProjectsRest,projectAppliesChange ]);
	};
	
	useEffect(()=>{
		const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
		localStorage.setItem("loggedInUser",JSON.stringify({ ...userLoggedIn,projects:pickProjects }));
	},[saveChanges]);
	
	return (
		<EditCard>
			<ProjectCard
				name={name}
				budget={budget}
				category={category}
				disabled={true}
			/>
			<form action="" >
				<Input
					handleOnChange={handleOnChangeName}
					name="name"
					placeholder="Name the project"
					text="Nome do Projeto"
					type="text"
					value={name}
					required
				/>
				<Input
					handleOnChange={handleOnChangeBudget}
					name="budget"
					placeholder="Total budget"
					text="Project budget"
					type="number"
					value={budget}
					required
				/>
				<Select
					name="category"
					text="Select category"
					options={categories}
					handleOnChange={handleCategoryProjects}
					value={category}

				/>

				<button onClick={saveChanges}>Save changes</button>
			</form>
		</EditCard>
	);
};
