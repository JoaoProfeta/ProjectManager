import { StyledProjects } from "./styles";
import { Message } from "../../Components/Message/Message"
import { Container } from "../../Components/Container/Container";
import { Loading } from "../../Components/Loading/Loading"
import { ProjectCard } from "../../Components/ProjectCard/ProjectCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



export const Projects = () => {
  
  const [project, setProject] = useState([]);
  
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
    <StyledProjects>
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
      
    </StyledProjects>
  );
};
