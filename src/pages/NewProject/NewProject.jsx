import { StyledNewProject } from "./styles";
import { ProjectForm } from "../../Components/ProjectForm/ProjectForm";


export const NewProject = () => {

  return (
    <StyledNewProject>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços</p>
      <ProjectForm btnText="Criar projeto" />
    </StyledNewProject>
  );
};
