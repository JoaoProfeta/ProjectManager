import { useEffect, useState } from "react"


import { FormForProjects } from "./styles"
import { Input } from "../Form/Input/input"
import { Select } from "../Form/Select/Select"

import { Submit } from "../Form/SubmitButton/SubmitButton"
export const ProjectForm = ({ handleSubmit, btnText, projectData }) => {

    const [categories, setCategories] = useState([])//para setar os dados na variavel


    const [project, setProject] = useState(projectData || {})

    // para evitar o bug de loop
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {

                setCategories(data);
            })
            .catch((err) => console.log(err))
    }, [])



    const submit = (e) => {

        e.preventDefault();

        handleSubmit(project);


    }


    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })

    }

    function handleCategory(e) {
        setProject({
            ...project, category:
            {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,

            }
        })

    }

    return (
        <FormForProjects onSubmit={submit}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name" // é o name do project.name >>> após o name="project.name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ""}
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget" //é o budget do project.budget >>> após o name="project.budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ""}
            />

            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />


            <Submit text={btnText} />
        </FormForProjects>
    )
}