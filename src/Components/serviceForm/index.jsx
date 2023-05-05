import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { v4 as uuId } from "uuid";
import { ServiceCard } from "../serviceCard";
import { FormForService } from "./styles";
export const ServiceForm = () => {
	
	const unicId= uuId();
	const location = useLocation();

	const getIdProjectSelected = location.state.userId;

	const [ pickProjects, setPickProjects ] = useState([]);
	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const getProjectsLoggedUser = loggedInUser.projects;
	const { register,handleSubmit	} = useForm({});

	useEffect(()=>{
		const filterProjectsRest = getProjectsLoggedUser.filter((project) => project.id !== getIdProjectSelected);		
		setPickProjects([...filterProjectsRest]);		

	},[]);
	
	function submit({ name,cost,description }) {

		console.log({ name,cost,description });

		const filterUserForAddServices = getProjectsLoggedUser.find((project) => project.id === getIdProjectSelected);
		const newService = { name,cost,description,id:unicId };
		const newProjectWithServicesAdd = { ...filterUserForAddServices, services:[ ...filterUserForAddServices.services,newService ]};
		const reenderProjects =[ ...pickProjects,newProjectWithServicesAdd ];
		localStorage.setItem("loggedInUser",JSON.stringify({ ...loggedInUser,projects: reenderProjects }));

		const logged = JSON.parse(localStorage.getItem("loggedInUser"));
		const getUsersLocalStorage = JSON.parse(localStorage.getItem("users") || []);
		const filterUserChangeProperties = getUsersLocalStorage.filter((user)=> user.id !== logged.id);
		localStorage.setItem("users", JSON.stringify([
			...filterUserChangeProperties,
			logged
		]));
	}
	const userLogged = JSON.parse(localStorage.getItem("loggedInUser"));
	const projectSelected = userLogged.projects.find((item)=> item.id === getIdProjectSelected);
	const servicesByProjectSelected = projectSelected.services;
	console.log(servicesByProjectSelected);
	return (
		<FormForService >
			<div id="services-container">
				
				{!!servicesByProjectSelected &&
					servicesByProjectSelected.map((service)=>{
						return(
							<ServiceCard
								key={service.id || service.name}
								name={service.name}
								cost={service.cost}
								description={service.description}
							/>
				
						);
					})
				}
			</div>
			<form onSubmit={handleSubmit(submit)}>
				<label htmlFor="name">
					Name
					<input
						id="name"
						name="name"
						{...register("name")}
					/>
				</label>
				
				<label htmlFor="Cost">
					Cost
					<input
						id="cost"
						name="cost"
						{...register("cost")}
					
						type="text"
					/>
				</label>
				
				<label htmlFor="Description" id="description-label">
					Description
					<input
						id="description"
						name="description"
						size=""
						{...register("description")}
						type="text"
					/>
				</label>
				
				<button
					className="create-service"

					type="submit"
				>
						Create service
				</button>
			</form>
		</FormForService>
	);
};
