import { NewPJ } from "./styles";
import { ProjectForm } from "../../Components/ProjectForm";


export const NewProject = () => {

  return (
    <NewPJ>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços</p>

      <ProjectForm/>
    </NewPJ>
  );
};
