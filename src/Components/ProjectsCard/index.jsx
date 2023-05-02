import { useNavigate } from "react-router-dom";
import { StyledProjectCard } from "./styles";


export const ProjectCard = ({ name,id,budget,category,cost, ...rest }) =>{
	const navigate = useNavigate();
	
	
	const editCard = ()=>{

	};
	const deleteCard = ()=>{
		
	};
	return (
		<StyledProjectCard id={id} {...rest}>
			<h1> 
				{name}
			</h1>
			<div className="projects">
				<span>Budget:</span> {budget}
			</div>
			<div className="projects">
				<span>Category:</span>{category}
			</div>
			<div className="projects">
				<span>Total cost used:</span>{cost}
			</div>
			<div className="buttons-container">
				<button onClick={editCard}>Edit</button>
				<button onClick={()=>{
					 navigate(`/services/${id}`,{ state:{ userId: id } });
				}}>Services</button>
				<button onClick={deleteCard}>Delete</button>
				
			</div>
		</StyledProjectCard>
	);
}; 
