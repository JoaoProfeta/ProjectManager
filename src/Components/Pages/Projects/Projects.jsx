import { ProjectPage } from "./styles";
import { Message } from "../../Layout/Message/Message";
import { Container } from "../../Layout/Container/Container";
import { Loading } from "../../Layout/Loading/Loading";
import { LinkButton } from "../../Layout/linkButtom/LinkButtom";
import { ProjectCard } from "../../ProjectCard/ProjectCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BtnSair } from "./btnSair";
import { CardTeste } from "./cardTest";
export const Projects = () => {
  
  const [project, setProject] = useState([]);
  //const [removeLoading, setRemoveLoading] = useState(false);
  //const [projectMessage, setProjectMessage] = useState("");
  //const location = useLocation();
  const { state } = useLocation()

  useEffect(() => {
    if(state === null){
      return console.log("não tem nada aqui")
    }else{
      setProject(state.projects)
    }
    //outra forma: !!state && setProjects(state.projects)
  }, [])

  const handleRemove = ()=>{
    setProject(state)
  }
  

  return (
    <ProjectPage>
      <div className="title_container">
        <h1>Meus projetos</h1>

        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {/*message && <Message msg={message} type="success" />*/}
      {/*projectMessage && <Message msg={projectMessage} type="success" />*/}
      <Container startStyle={true}>

        {project.length > 0 &&
          project.map((projects) => {
            return (
              <CardTeste
                name={projects.name}
                id={projects.id}
                budget={projects.budget}
                key={projects.id}
                
              />
            )
          }
          )}


      </Container>
      <BtnSair onclick={handleRemove}/>
    </ProjectPage>
  );
};
