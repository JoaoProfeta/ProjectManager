import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "../Input";
import { Submit } from "../SubmitButton";
import { FormForService } from "./styles";
export const ServiceForm = ({  textBtn }) => {
	const location = useLocation();
	
	const getIdProjectSelected = location.state.userId ;
	

	const [ newServices, setNewServices ] = useState([]);
	const [ projects,setProjects ] = useState([]);
	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


	


	function submit(e) {
		e.preventDefault();
		
	}
	useEffect(()=>{
		const getProjectsLoggedUser = loggedInUser.projects;

		const filterProjectsRest = getProjectsLoggedUser.filter((project) => project.id !== getIdProjectSelected);


		
		const filterUserForService = getProjectsLoggedUser.filter((project) => {

			if(project.id === getIdProjectSelected){

				const newProjectWithServices = { ...project,services:[newServices]};
				
				setProjects([ ...filterProjectsRest,newProjectWithServices ]);


			}

		});

	},[]);
	
	
	function handleChange(e) {
		setNewServices({ ...newServices, [e.target.name]: e.target.value });

	}

	return (
		<FormForService onSubmit={submit}>

			<form action="">
				<Input
					type="text"
					text="Nome do Serviço"
					name="name"
					placeholder="Insira o nome do serviço"
					handleOnChange={handleChange}
				/>
				<Input
					type="number"
					text="Custo do serviço"
					name="cost"
					placeholder="Insira o valor total"
					handleOnChange={handleChange}
				/>
				<Input
					type="text"
					text="Descrição do serviço"
					name="description"
					placeholder="escreva o serviço"
					handleOnChange={handleChange}
				/>
				<Submit

					className="btn"
					text={textBtn}
				/>
			</form>
		</FormForService>
	);
};
