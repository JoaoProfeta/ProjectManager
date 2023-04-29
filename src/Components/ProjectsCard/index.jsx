import { StyledProjectCard } from "./styles";




export const ProjectCard = ({ name,id,budget,category,cost }) =>{
	return (
		<StyledProjectCard id={id}>
			<h1 id="name-project">{name}</h1>
			<div id="budget-project"><span>Budget:</span> {budget}</div>
			<div id="category-project"><span>Category:</span>{category}</div>
			<div id="cost"><span>Total cost:</span>{cost}</div>
		</StyledProjectCard>
	);
};
