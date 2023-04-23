<<<<<<< HEAD:src/Pages/NewProject/index.jsx
import { NewPJ } from "./styles";
import { ProjectForm } from "../../Components/ProjectForm";
=======
import { StyledNewProject } from "./styles";
import { ProjectForm } from "../../Components/ProjectForm/ProjectForm";
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/pages/NewProject/NewProject.jsx


export const NewProject = () => {

  return (
    <StyledNewProject>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços</p>
<<<<<<< HEAD:src/Pages/NewProject/index.jsx

      <ProjectForm/>
    </NewPJ>
=======
      <ProjectForm btnText="Criar projeto" />
    </StyledNewProject>
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/pages/NewProject/NewProject.jsx
  );
};
