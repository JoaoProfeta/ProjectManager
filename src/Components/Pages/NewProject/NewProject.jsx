import { NewPJ } from "./styles";
import { ProjectForm } from "../../ProjectForm/ProjectForm";
import { useNavigate } from "react-router-dom";

export const NewProject = () => {
  const navigate = useNavigate(); //redrect nas páginas

  function createPost(project) {
    // initialize cost and services

    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/projects", {
          state: { message: "Projeto criado com Sucesso" },
        });

        //redirect
      })
      .catch((err) => console.log(err));
  }

  return (
    <NewPJ>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços</p>

      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </NewPJ>
  );
};
