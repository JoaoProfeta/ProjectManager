import { ProjectForm } from "../../Components/ProjectForm";
import { StyledNewProject } from "./styles";


export function NewProject () {

	return (
		<StyledNewProject>
      	<h1>
        	Create a project
      	</h1>
      	<p>
					Create your project and then add your services
			  </p>
			<ProjectForm />
		</StyledNewProject>
	);

}
