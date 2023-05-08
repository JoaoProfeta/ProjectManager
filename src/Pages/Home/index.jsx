
import { Section } from "../../Components/section";
import analytic from "../../assets/analytcproject.svg";
import company from "../../assets/company.svg";
import headerlogo from "../../assets/headerlogo.svg";
import magnament from "../../assets/magnamentproject.svg";
import { StyledHome } from "./styles";
export function Home () {

	const category = [
		{ id: 1, name:"Desenvolvimento Front-End" },
		{ id: 2, name:"Desenvolvimento Back-End" },
		{ id: 3, name:"Design" },		
		{ id: 4, name: "Maintenance" },
		{ id: 5, name: "Landing page" },
		{ id: 6, name: "E-Commerce" }
	];
	localStorage.setItem("Category",JSON.stringify(category));
	

	return (
		<StyledHome>
			<div>
				<h1>
          Welcome to your
					<span>
							Project manager
					</span>
				</h1>
			</div>
			
			<Section
				orderSt={1}
				alt="Project Management Header"
				imgProtional={headerlogo}
				textPromotional="Our project management website is the complete solution for your team to manage projects effectively, collaboratively and with real-time visibility. Maximize your productivity and achieve your goals with our platform. Try it now!"
			/>
			<Section
				
				alt="image about site information"
				imgProtional={magnament}
				textPromotional="Add your projects to the system, enter the services and costs related to them, and easily compare them. Keep track of your projects and make informed decisions with our project management platform. Try it now!"
			/>
			<Section
				orderSt={1}
				alt="image promotional"
				imgProtional={company}
				textPromotional="Managing projects efficiently can be challenging for companies of all sizes, especially when costs need to be controlled and deadlines need to be met. That's why we're offering an online platform for companies to add and manage their projects easily and efficiently."
			/>
			<Section
				alt="image promotional"
				imgProtional={analytic}
				textPromotional="Our project management website allows companies to add their projects and monitor their total cost. In addition, companies can add individual services and costs as each phase of the project is completed, ensuring precise control of spending in real time.This means that the project management team can make more informed decisions and implement changes when necessary, to ensure that the project is completed on budget and on time."
			/>
		</StyledHome>
	);

}
