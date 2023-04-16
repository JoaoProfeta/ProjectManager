import { useEffect, useState } from "react"


import { FormForProjects } from "./styles"
import { Input } from "../Form/Input/input"
import { Select } from "../Form/Select/Select"

import { Submit } from "../Form/SubmitButton/SubmitButton"


export const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState({});
    const [userProjects, setUserProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0)
    useEffect(() => {
        const getCategories = JSON.parse(localStorage.getItem("categories"));
        setCategories(getCategories);

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        const projects = loggedInUser.projects || [];
        setUserProjects(projects);
    }, [])

    function handleChange(e) {
        setProjects({ ...projects, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {

        setSelectedCategory(e.target.value)
        
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        const categoryFind = categories.find(c => c.id == selectedCategory);
        
        const newProject = { name: projects.name, budget: projects.budget, id: projects.id, category:categoryFind.name };
        setUserProjects([...userProjects, newProject]);


    }

    useEffect(() => {

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        const updatedUser = { ...loggedInUser, projects: userProjects };

        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        
    }, [userProjects]);
   
    return (
        <FormForProjects onSubmit={handleSubmitForm}>
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
                handleOnChange={handleCategory}
                value={selectedCategory}
            />

            <Submit text={btnText} />
        </FormForProjects>
    );
}