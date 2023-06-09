import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from "uuid";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledProjectForm } from "./styles";
export function ProjectForm (){
	const unicId = uuid();
	const [	category,setCategory ] = useState([]);
	const [ projects,setProjects	] = useState({});
	const [ userProjects,setUserProjects ] = useState([]);
	const [ selectedCategory,setSelectedCategory ] = useState(0);
	const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
	const logged = !!userLoggedIn;
	const notifySucess = () => {
		toast.success("Project create successfully!!!", {
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
		toast.error("Project create error!!!", {
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
	useEffect(
		() => {
			if (logged) {
				const getCategory = JSON.parse(localStorage.getItem("Category"));
				setCategory(getCategory);
				const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];
			 	const getProjects = loggedInUser.projects || [];
				setUserProjects(getProjects);
			}
		},
		[]
	);
	function handleChange (e) {
		setProjects({ ...projects, [e.target.name]: e.target.value });
	}
	const handleCategoryProjects =(e)=> {
		setSelectedCategory(e.target.value);
	};
	function handleSubmitForm (e){
		e.preventDefault();
		try{
			notifySucess();
			const categoryFind = category.find((c) => c.name == selectedCategory);
		 const newProject = { name: projects.name, budget: projects.budget, id: unicId, category: categoryFind.name,services:[]};
			setUserProjects([ ...userProjects,newProject ]);
			
		} catch (err) {
			notifyErr();
		}
	}
	useEffect(
		() => {
			if (logged) {
				const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
				const updatedUser = { ...loggedInUser, projects: userProjects };
				localStorage.setItem("loggedInUser",JSON.stringify(updatedUser));
				const usersCopied = JSON.parse(localStorage.getItem("users") || []);
				const userFiltrado = usersCopied.filter((user) => user.email != userLoggedIn.email);
				localStorage.setItem("users",JSON.stringify([ ...userFiltrado,updatedUser ]));
			}
		},
		[userProjects]
	);
	return (
		<StyledProjectForm >
			
			<form action="" onSubmit={handleSubmitForm}>
				<Input
					handleOnChange={handleChange}
					name="name"
					placeholder="Name the project"
					text="Nome do Projeto"
					type="text"
					value={projects.name || ""}
					required
				/>
				<Input
					handleOnChange={handleChange}
					name="budget"
					placeholder="Total budget"
					text="Project budget"
					type="number"
					value={projects.budget || ""}
					required
				/>
				<Select
					name="category"
					text="Select category"
					options={category}
					handleOnChange={handleCategoryProjects}
					value={selectedCategory}		
				/>
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
				<button className="button-create">Create project</button>
			</form>
		</StyledProjectForm>
	);

}
