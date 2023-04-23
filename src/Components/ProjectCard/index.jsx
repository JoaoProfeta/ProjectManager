
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Card } from "./styles";
import { Submit } from "../SubmitButton";

export const ProjectCard = ({ id, name, budget, category, handleRemove }) => {

	function handleRemoveProjectsCard(e){
       
		e.preventDefault();
		handleRemove(id);
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

				<Submit onClick={handleRemoveProjectsCard}>
					<BsFillTrashFill /> Excluir
				</Submit>
			</div>
		</Card>
	);
};