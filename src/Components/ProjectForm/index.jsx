import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import { Submit } from "../SubmitButton";
import { StyledProjectForm } from "./styles";


export function ProjectForm ({ handleSubmit, btnText, projectData }) {

	const [
			categories,
			setCategories
		] = useState([]),
	 [
			projects,
			setProjects
		] = useState({}),
	 [
			userProjects,
			setUserProjects
		] = useState([]),
	 [
			selectedCategory,
			setSelectedCategory
		] = useState(0),

	 userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser")),

	 logged = Boolean(userLoggedIn);

	useEffect(
		() => {

			if (logged) {

				const getCategories = JSON.parse(localStorage.getItem("categories"));
				setCategories(getCategories);

				const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")),
			 projects = loggedInUser.projects || [];
				setUserProjects(projects);

			}

		},
		[]
	);

	function handleChange (e) {

		setProjects({ ...projects, [e.target.name]: e.target.value });

	}

	function handleCategoryProjects (e) {

		setSelectedCategory(e.target.value);

	}

	function handleSubmitForm () {

		const categoryFind = categories.find((c) => c.id == selectedCategory),

		 newProject = { "name": projects.name, "budget": projects.budget, "id": projects.id, "category": categoryFind.name };

		setUserProjects([
			...userProjects,
			newProject
		]);

	}

	useEffect(
		() => {

			if (logged) {

				const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")),

			 updatedUser = { ...loggedInUser, "projects": userProjects };

				localStorage.setItem(
					"loggedInUser",
					JSON.stringify(updatedUser)
				);

				const usersCopied = JSON.parse(localStorage.getItem("users") || []),

			 userFiltrado = usersCopied.find((user) => user.email != userLoggedIn.email);

				localStorage.setItem(
					"users",
					JSON.stringify([
						userFiltrado,
						updatedUser
					])
				);

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
    handleOnChange={handleCategoryProjects()}
				name="category_id"
				options={categories}
				text="Selecione a categoria"
				value={selectedCategory}
			/>

			<Submit text="Criar Projeto" />
		</StyledProjectForm>
	);

}
