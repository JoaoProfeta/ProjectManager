import { useEffect, useState } from "react"
<<<<<<< HEAD:src/Components/ProjectForm/index.jsx
import { FormForProjects } from "./styles"
import { Input } from "../Input"
import { Select } from "../Select"
import { Submit } from "../SubmitButton"
=======


import { StyledProjectForm } from "./styles"
import { Input } from "../Input/input"
import { Select } from "../Select/Select"

import { Button } from "../SubmitButton/SubmitButton"
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/Components/ProjectForm/ProjectForm.jsx


export const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState({});
    const [userProjects, setUserProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0)

    const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"))

    const logged = !!userLoggedIn

    useEffect(() => {

        if (logged) {
            const getCategories = JSON.parse(localStorage.getItem("categories"));
            setCategories(getCategories);

            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
            const projects = loggedInUser.projects || [];
            setUserProjects(projects);
        }

    }, [])

    function handleChange(e) {

        setProjects({ ...projects, [e.target.name]: e.target.value });

    }

    function handleCategoryProjects(e) {

        setSelectedCategory(e.target.value)

    }

    function handleSubmitForm(e) {

        const categoryFind = categories.find(c => c.id == selectedCategory);

        const newProject = { name: projects.name, budget: projects.budget, id: projects.id, category: categoryFind.name };

        setUserProjects([...userProjects, newProject]);

    }

    useEffect(() => {

        if (logged) {

            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

            const updatedUser = { ...loggedInUser, projects: userProjects };

            localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

            const usersCopied = JSON.parse(localStorage.getItem('users') || []);

            const userFiltrado = usersCopied.find(user => user.email != userLoggedIn.email)

            localStorage.setItem('users', JSON.stringify([userFiltrado, updatedUser]))

        }

    }, [userProjects]);

    return (
        <StyledProjectForm onSubmit={handleSubmitForm}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={projects.name || ""}
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={projects.budget || ""}
            />

            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCStyledProjectForm}
                value={selectedCategory}
            />

<<<<<<< HEAD:src/Components/ProjectForm/index.jsx
            <Submit text="Criar Projeto" />
        </FormForProjects>
=======
            <Button text={btnText} />
        </StyledProjectForm>
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/Components/ProjectForm/ProjectForm.jsx
    );
}