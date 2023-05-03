import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { v4 as uuId } from "uuid";
import { FormForService } from "./styles";
export const ServiceForm = ({ textBtn }) => {

	const unicId= uuId();
	const location = useLocation();

	const getIdProjectSelected = location.state.userId;

	const [ newServices, setNewServices ] = useState([]);
	const [ pickProjects, setPickProjects ] = useState([]);
	const [ userServices, setUserServices ] = useState([]);
	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const logged = !!loggedInUser;
	const getProjectsLoggedUser = loggedInUser.projects;
	const { register,handleSubmit	} = useForm({});
	
	useEffect(()=>{
		const filterProjectsRest = getProjectsLoggedUser.filter((project) => project.id !== getIdProjectSelected);		
		
		setPickProjects([...filterProjectsRest]);		
		console.log(pickProjects);
		
	},[]);
	
	function submit({ name,cost,description }) {
		console.log({ name,cost,description });
		const filterUserForAddServices = getProjectsLoggedUser.find((project) => project.id === getIdProjectSelected);
		const getServicesForUser = filterUserForAddServices.services ;
		const theNewService = { name,cost,description,id:unicId };
		console.log(getServicesForUser);
		const newProjectWithServicesAdd = { ...filterUserForAddServices, services:[ ...filterUserForAddServices.services,theNewService ]};
		const reenderProjects =[ ...pickProjects,newProjectWithServicesAdd ];
		console.log(reenderProjects);
		localStorage.setItem("loggedInUser",JSON.stringify({ ...loggedInUser,projects: reenderProjects }));
		
	}
	
	
	function handleChange(e) {
		setNewServices({ ...newServices, [e.target.name]: e.target.value , });

	}

	return (
		<FormForService >

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
				
				<label htmlFor="Description">
					Description
					<input
						id="description"
						name="description"
						{...register("description")}
						type="text"
					/>
				</label>
				
				<button
					className="sign-button"

					type="submit"
				>
						Criar
				</button>
			</form>
		</FormForService>
	);
};
