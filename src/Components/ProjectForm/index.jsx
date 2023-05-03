import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import { Submit } from "../SubmitButton";
import { StyledProjectForm } from "./styles";
import { v4 as uuid } from "uuid";

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
		<StyledProjectForm onSubmit={handleSubmitForm}>
			<Input
    		handleOnChange={handleChange}
				name="name"
				placeholder="Insira o nome do projeto"
				text="Nome do Projeto"
				type="text"
				value={projects.name || ""}
			/>

			<Input
				handleOnChange={handleChange}
				name="budget"
				placeholder="Insira o orçamento total"
				text="Orçamento do projeto"
				type="number"
				value={projects.budget || ""}
			/>

			<Select
				name="category_id"
				text="Selecione a categoria"
				options={categories}
				handleOnChange={handleCategoryProjects}
				value={selectedCategory}
			/>

			<Submit text="Criar Projeto" />
		</StyledProjectForm>
	);

}
