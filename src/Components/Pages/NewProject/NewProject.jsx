import { NewPJ } from "./styles";
import { ProjectForm } from "../../ProjectForm/ProjectForm";
import { useNavigate } from "react-router-dom";

export const NewProject = () => {

  return (
    <NewPJ>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços</p>

      <ProjectForm btnText="Criar projeto" />
    </NewPJ>
  );
};
