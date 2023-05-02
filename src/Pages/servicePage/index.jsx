
import { ServiceCard } from "../../Components/serviceCard";
import { ServiceForm } from "../../Components/serviceForm";


export const Services = ()=>{
	const getLoggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const getServices = getLoggedUser.projects ;

	return(
		<>
			
			<ServiceForm textBtn="Criar serviço">

			</ServiceForm>
		</>
	);
};
