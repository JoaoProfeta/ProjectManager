import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Input } from "../Input";
import { Select } from "../Select";
import { Submit } from "../SubmitButton";
import { StyledProjectForm } from "./styles";

export function ProjectForm (){
	const unicId = uuid();
	const [	categories,setCategories ] = useState([]);
	
	const [ projects,setProjects	] = useState({});
		
	 const [ userProjects,setUserProjects ] = useState([]);
		
	 const [ selectedCategory,setSelectedCategory ] = useState(0);
	
	const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
	
	const logged = !!userLoggedIn;
	
	useEffect(
		() => {

			if (logged) {

				const getCategories = JSON.parse(localStorage.getItem("categories"));
				
				setCategories(getCategories);

				const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];
			 	const getProjects = loggedInUser.projects || [];
				setUserProjects(getProjects);
				
			}

		},
		[]
	);
	
	function handleChange (e) {

		setProjects({ ...projects, [e.target.name]: e.target.value });

	}

	const handleCategoryProjects =(e)=> {

		setSelectedCategory(e.target.value);


	};

	function handleSubmitForm (e) {
		e.preventDefault();
		const categoryFind = categories.find((c) => c.id == selectedCategory);

		 const newProject = { name: projects.name, budget: projects.budget, id: unicId, category: categoryFind.name,services:[]};
		
		setUserProjects([
			...userProjects,
			newProject
		]);

	}

	useEffect(
		() => {

			if (logged) {

				const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

				const updatedUser = { ...loggedInUser, projects: userProjects };

				localStorage.setItem(
					"loggedInUser",
					JSON.stringify(updatedUser)
				);

				const usersCopied = JSON.parse(localStorage.getItem("users") || []);

				const userFiltrado = usersCopied.find((user) => user.email != userLoggedIn.email);

				localStorage.setItem("users",JSON.stringify([ userFiltrado,updatedUser ]));

			}

		},
		[userProjects]
	);
	
	return (
		<StyledProjectForm >
			
			<form action="" onSubmit={handleSubmitForm}>
				<Input
					handleOnChange={handleChange}
					name="name"
					placeholder="Name the project"
					text="Nome do Projeto"
					type="text"
					value={projects.name || ""}
					required
				/>
				<Input
					handleOnChange={handleChange}
					name="budget"
					placeholder="Total budget"
					text="Project budget"
					type="number"
					value={projects.budget || ""}
					required
				/>
				<Select
					name="category"
					text="Select category"
					options={categories}
					handleOnChange={handleCategoryProjects}
					value={selectedCategory}
					
				/>
				<button>Create project</button>
			</form>

		</StyledProjectForm>
	);

}
