
import { Card } from "./styles"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"
<<<<<<< HEAD:src/Components/ProjectCard/index.jsx
=======
import { Button } from "../SubmitButton/SubmitButton"
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/Components/ProjectCard/ProjectCard.jsx
import { Link } from "react-router-dom"

export const ProjectCard = ({ id, name, budget, category, handleRemove}) => {

    function handleRemoveProjectsCard(e){
       
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <Card>
            <h4>{name}</h4>
            <p>
                <span>Valor total:</span>R${budget}
            </p>
            <p className="category_text">
                <span className={category.toLowerCase()}></span>{category}
            </p>
            <div className="project_card_actions">
                <Link to={`/project/${id}`}> <BsPencil /> Editar</Link>

                <Button onClick={handleRemoveProjectsCard}>
                    <BsFillTrashFill /> Excluir
                </Button>
            </div>
        </Card>
    )
}