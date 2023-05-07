import { useNavigate } from "react-router-dom";
import { StyledProjectCard } from "./styles";

export const ProjectCard = ({ name,id,budget,category,handleDelete,disabled,...rest }) =>{
	const navigate = useNavigate();

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
			<div className="buttons-container">
				<button 
					disabled={disabled}
					onClick={()=>{
						navigate(`/project/${id}`,{ state:{ id: id,name:name,budget:budget,category:category } });
					}} id={id}>Edit</button>
				<button 
					disabled={disabled}
					onClick={()=>{
					 navigate(`/services/${id}`,{ state:{ userId: id } });
					}}>Services</button>
				<button 
					id={id}
					disabled={disabled}
					onClick={handleDelete}
				>Delete</button>		
			</div>
		</StyledProjectCard>
	);
}; 
