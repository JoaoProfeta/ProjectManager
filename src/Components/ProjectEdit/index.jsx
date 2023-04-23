import { EditCard } from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loading } from "../Loading";
import { Container } from "../Container";
import { ProjectForm } from "../ProjectForm";
import { Message } from "../Message";

import { ServiceForm } from "../serviceForm";
import { parse, v4 as uuidv4 } from "uuid";
import { ServiceCard } from "../serviceCard";
export const ProjectEdit = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setEdit(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editPost(project) {
    setMessage("");
    if (project.budget < project.cost) {
      setMessage("O Orçamento não pode ser menor que o custo do projeto!");

      setType("error");

      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        setEdit(data);
        setShowProjectForm(false);

        setMessage("Projeto atualizado!");

        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function createService() {
    setMessage("");
    const lastService = edit.services[edit.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(edit.cost) + parseFloat(lastServiceCost);

    //maximum value validation
    if (newCost > parseFloat(edit.budget)) {
      setMessage("Orçamento Ultrapassado, verifique o valor do serviço");
      setType("error");
      edit.services.pop();
      return false;
    }

    //add service cost to project total cost

    edit.cost = newCost;
    //update edit

    fetch(`http://localhost:5000/projects/${edit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    })
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        setShowServiceForm(!showServiceForm);
        setMessage("Serviço adicionado!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }
  function removeService(id, cost) {
    const servicesUpdated = edit.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = edit;

    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEdit(projectUpdated);
        setServices(servicesUpdated);
        setMessage("Serviço removido com sucesso!");
      });
  }

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };
  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  return (
    <EditCard>
      {edit.name ? (
        <div>
          <Container column={true}>
            {message && <Message type={type} msg={message} />}
            <div className="datails_container">
              <h1>Projetos: {edit.name}</h1>
              <button onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "fechar"}
              </button>
              {!showProjectForm ? (
                <div className="project_info">
                  <p>
                    <span>Categoria: </span>
                    {edit.category.name}
                  </p>
                  <p>
                    <span>total Orçamento: </span>R${edit.budget}
                  </p>
                  <p>
                    <span>Total utilizado </span>R${edit.cost}
                  </p>
                </div>
              ) : (
                <div className="project_info">
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={edit}
                  />
                </div>
              )}
            </div>
            <div className="service_form_container">
              <h2>Adicione um serviço</h2>
              <button onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "fechar"}
              </button>
              <div className="project_info">
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    textBtn="Adicionar Serviço"
                    projectData={edit}
                  />
                )}
              </div>
            </div>

            <h2>Serviços</h2>
            <Container startStyle={true}>
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </EditCard>
  );
};
