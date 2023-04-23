import { StyledProjects } from "./styles";
import { Message } from "../../Components/Message";
import { Container } from "../../Components/Container";
import { LinkButton } from "../../Components/linkButtom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { CardTeste } from "./cardTest";
import { Submit } from "../../Components/SubmitButton";

export const Projects = () => {
  
  const [project, setProject] = useState([]);

  

  useEffect(()=>{
    const getUserLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

  setProject(getUserLoggedIn.projects)
  },[])
  
 

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
                category={projects.category}
                
              />
            )
          }
          )}


      </Container>
      <Submit text="apagar"/>
    </StyledProjects>
  );
};
