import { ProjectPage } from "./styles";
import { Message } from "../../Layout/Message/Message";
import { Container } from "../../Layout/Container/Container";
import { Loading } from "../../Layout/Loading/Loading";
import { LinkButton } from "../../Layout/linkButtom/LinkButtom";
import { ProjectCard } from "../../ProjectCard/ProjectCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export const Projects = () => {
  const [project, setProject] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((date) => {
          setProject(date);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  const { state } = useLocation();
  const message = state ? state.message : "";

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(project.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com Sucesso");
      })
      .catch((err) => console.log(err));
  }

  return (
    <ProjectPage>
      <div className="title_container">
        <h1>Meus projetos</h1>

        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      {projectMessage && <Message msg={projectMessage} type="success" />}
      <Container startStyle={true}>
        {project.length > 0 &&
          project.map((projects) => (
            <ProjectCard
              name={projects.name}
              id={projects.id}
              budget={projects.budget}
              category={projects.category.name}
              key={projects.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && project.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </ProjectPage>
  );
};
