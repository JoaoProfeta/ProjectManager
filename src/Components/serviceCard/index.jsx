import { BsFillTrashFill } from "react-icons/bs";
import { CardForServices } from "./styles";

export const ServiceCard = ({ id,name,cost,description, handleRemove })=>{

	const remove=(e)=>{
		e.preventDefault();
		handleRemove(id,cost);
	};
	
	return (
		<CardForServices>
			<h1> 
				{name}
			</h1>
			<div className="services">
				<span>Service Cost:</span>{cost}
			</div>
			<div className="services" id="description">
				<span>Description:</span> 
				<p>{description}</p>
			</div>
			
			
			<div className="services-button">
				<button onClick={remove}>
					<BsFillTrashFill/>
                    Excluir
				</button>
			</div>
		</CardForServices>
	);
};
