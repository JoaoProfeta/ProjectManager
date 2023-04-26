import { ProjectForm } from "../../Components/ProjectForm";
import { StyledNewProject } from "./styles";


export function NewProject () {

	return (
		<StyledNewProject>
      	<h1>
        	Criar Projeto
      	</h1>

      	<p>
      		Crie seu projeto para depois adicionar seus serviços
			  </p>

			<ProjectForm />
		</StyledNewProject>
	);

}
