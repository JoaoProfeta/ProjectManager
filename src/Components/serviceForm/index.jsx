import { FormForService } from "./styles"
import { useState } from "react"
import { Input } from "../Input"
import { Submit } from "../SubmitButton"

export const ServiceForm = ({ handleSubmit, textBtn, projectData }) => {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }
    return (
        <FormForService onSubmit={submit}>

            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="escreva o serviço"
                handleOnChange={handleChange}
            />
            <Button
                className="btn"
                text={textBtn}
                onClick={submit} />
        </FormForService>
    )
}