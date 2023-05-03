import { BsFillTrashFill } from "react-icons/bs";
import { CardForServices } from "./styles";

export const ServiceCard = ({ id,name,cost,description, handleRemove })=>{

	const remove=(e)=>{
		e.preventDefault();
		handleRemove(id,cost);
	};
	
	return (
		<CardForServices>
			<h4>{name}</h4>
			<p>
				<span>total cost:</span>R${cost}
			</p>
			<p>
				{description}
			</p>
			<div className="service_card_actions">
				<button onClick={remove}>
					<BsFillTrashFill/>
                    Excluir
				</button>
			</div>
		</CardForServices>
	);
};
