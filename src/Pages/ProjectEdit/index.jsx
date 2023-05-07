
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "../../Components/Input";
import { ProjectCard } from "../../Components/ProjectsCard";
import { Select } from "../../Components/Select";
import { EditCard } from "./styles";
export const ProjectEdit = () => {
	const location = useLocation();
	const [ name, setName ] = useState(location.state.name || "");
	const [ budget, setBudget ] = useState(location.state.budget || "");
	const [ category, setCategory ] = useState(location.state.category || 0);
	const [ categories, setCategories ] = useState([]);
	const [ pickProjects, setPickProjects ] = useState([]);
	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const getProjectsLoggedUser = loggedInUser.projects;
	const logged = !!loggedInUser;
	const notifySucess = () => {
		toast.success("Service Update successfully!!!", {
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
		toast.error("Service Update error!!!", {
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
			setPickProjects(loggedInUser.projects);		
			if (logged) {	
				const getCategories = JSON.parse(localStorage.getItem("categories"));
				setCategories(getCategories);
			}
		},
		[]
	);

	const handleCategoryProjects = (e) => {
		setCategory(e.target.value);
	};
	const handleOnChangeName = (e) => {
		setName(e.target.value);
	};
	const handleOnChangeBudget = (e) => {
		setBudget(e.target.value);
	};	
	const saveChanges = (e)=>{
		try{
			notifySucess();
			e.preventDefault();
			const filterProjectsRest = getProjectsLoggedUser.filter((project) => project.id !== location.state.id);
			const filterProjectAppliesChange = getProjectsLoggedUser.find((project) => project.id === location.state.id);
			console.log();
			const projectAppliesChange = { ...filterProjectAppliesChange, name:name, budget:budget, category:category, id:location.state.id,  };
			setPickProjects([ ...filterProjectsRest,projectAppliesChange ]);
		}catch(error){
			notifyErr();
		}
	};
	useEffect(()=>{
		const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
		localStorage.setItem("loggedInUser",JSON.stringify({ ...userLoggedIn,projects:pickProjects }));
	},[saveChanges]);
	
	return (
		<EditCard>
			<ProjectCard
				name={name}
				budget={budget}
				category={category}
				disabled={true}
			/>
			<form action="" >
				<Input
					handleOnChange={handleOnChangeName}
					name="name"
					placeholder="Project Name"
					text="Project Name"
					type="text"
					value={name}
					required
				/>
				<Input
					handleOnChange={handleOnChangeBudget}
					name="budget"
					placeholder="Project budget"
					text="Project budget"
					type="number"
					value={budget}
					required
				/>
				<Select
					name="category"
					text="Select category"
					options={categories}
					handleOnChange={handleCategoryProjects}
					value={category}
				/>
				<button className="button-save-change"onClick={saveChanges}>Save changes</button>
			</form>
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
		</EditCard>
	);
};
