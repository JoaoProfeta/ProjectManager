import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuId } from "uuid";
import { ServiceCard } from "../serviceCard";
import { FormForService } from "./styles";
export const ServiceForm = () => {

	const unicId= uuId();
	const location = useLocation();
	const getIdProjectSelected = location.state.userId;
	const [ pickProjects, setPickProjects ] = useState([]);
	const [ usersFind, setUsersFind ] = useState([]);
	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const getProjectsLoggedUser = loggedInUser.projects;
	const { register,handleSubmit	} = useForm({});
	
	useEffect(()=>{
		const users = JSON.parse(localStorage.getItem("users"));
		setUsersFind(users);
		console.log(usersFind);
		const filterProjectsRest = getProjectsLoggedUser.filter((project) => project.id !== getIdProjectSelected);		
		setPickProjects([...filterProjectsRest]);		
	},[]);
	
	const notifySucess = () => {
		toast.success("Project Deleted successfully!!!", {
			position: "top-left",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	const notifyErr = () => {
		toast.error("Project deleted error!!!", {
			position: "top-left",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	function submit({ name,cost,description }) {

		try{
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
			setTimeout(()=>{
				window.location.reload();
			},2800);
			
		} catch(error){
			notifyErr();
		}
	}
	const userLogged = JSON.parse(localStorage.getItem("loggedInUser"));
	const projectSelected = userLogged.projects.find((item)=> item.id === getIdProjectSelected);
	const projectRest = userLogged.projects.filter((item)=> item.id !== getIdProjectSelected);
	const servicesByProjectSelected = projectSelected.services;
	const deleteServices = (e)=>{
		try{
			notifySucess();
			const getIdForDeleteService = e.target.id;
			const filterServiceRest = servicesByProjectSelected.filter((service)=> service.id !== getIdForDeleteService);
			const filterServiceForDelete = servicesByProjectSelected.find((service)=> service.id === getIdForDeleteService);
			const updateProjectAfterServiceDelete = { ...projectSelected, services:filterServiceRest };
			const updateProjects = [ ...projectRest, updateProjectAfterServiceDelete ];
			localStorage.setItem("loggedInUser",JSON.stringify({ ...userLogged, projects:updateProjects }));
			if(usersFind.length > 0){
				const getNewConfigLoggedUser = JSON.parse(localStorage.getItem("loggedInUser")); 
				const filterDifferentUsers = usersFind.filter((user)=> user.id !== getNewConfigLoggedUser.id);
				localStorage.setItem("users",JSON.stringify([ ...filterDifferentUsers,getNewConfigLoggedUser ]));
			}
			setTimeout(()=>{
				window.location.reload();
			},2800);
		}catch(error){
			notifyErr();
		}
	};

	return (
		<FormForService >
			<div id="services-container">
				{!!servicesByProjectSelected &&
					servicesByProjectSelected.map((service)=>{
						return(
							<ServiceCard
								id={service.id}
								key={service.id || service.name}
								name={service.name}
								cost={service.cost}
								description={service.description}
								handleRemove={deleteServices}
							/>
						);
					})
				}
			</div>
			<form onSubmit={handleSubmit(submit)}>
				<label htmlFor="name">
					Name
					<input
						type="text"
						id="name"
						name="name"
						required
						{...register("name")}
					/>
				</label>
				<label htmlFor="Cost">
					Cost
					<input
						id="cost"
						name="cost"
						required
						{...register("cost")}
					
						type="number"
					/>
				</label>
				<label htmlFor="Description" id="description-label">
					Description
					<input
						required
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
					onClick={notifySucess}
				>
						Create service
				</button>
				<ToastContainer
					position="top-left"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover={false}
					theme="light"
					role="alert"
				/>
			</form>
		</FormForService>
	);
};
