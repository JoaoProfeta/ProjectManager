import { useNavigate } from "react-router-dom";
import { StyledProjectCard } from "./styles";

export const ProjectCard = ({ name,id,budget,category,cost,handleDelete,handleEdit,...rest }) =>{
	const navigate = useNavigate();

	

	const editCard = (e)=>{
		e.preventDefault();
		console.log("aaaaa");
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
				<button onClick={()=>{
					navigate(`/project/${id}`,{ state:{ projectId: id } });
				}} id={id}>Edit</button>
				
				<button onClick={()=>{
					 navigate(`/services/${id}`,{ state:{ userId: id } });
				}}>Services</button>

			
				<button id={id}
					onClick={handleDelete}

				>Delete</button>
		
				
			</div>
		</StyledProjectCard>
	);
}; 
