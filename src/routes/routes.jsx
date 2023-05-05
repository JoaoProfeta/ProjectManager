import { Route, BrowserRouter as Router, Routes as RoutesBase } from "react-router-dom";
import { NavBar } from "../Components/Navbar";
import { Home } from "../Pages/Home";
import { NewProject } from "../Pages/NewProject";
import { ProjectEdit } from "../Pages/ProjectEdit";
import { Projects } from "../Pages/Projects";
import { LoginPage } from "../Pages/SignIn";
import { CadastroPage } from "../Pages/SignUp";
import { Services } from "../Pages/servicePage";
import { Container } from "../Components/Container";
import { Footer } from "../Components/Footer";
import { PrivateRoutes } from "./privateRoutes";

export const Routes=()=>{
	
	return (

		<Router>
			<NavBar />
			<Container styleHeight={true}>
				<RoutesBase>
					<Route path="/" element={<Home />} />
					<Route path="/newproject" element={ <PrivateRoutes><NewProject /> </PrivateRoutes>} />
					<Route path= "/projects" element={<PrivateRoutes><Projects /></PrivateRoutes>} />
					<Route path="/project/:id" element={<PrivateRoutes><ProjectEdit /></PrivateRoutes>}/>
					<Route path="/services/:id" element={<PrivateRoutes><Services/></PrivateRoutes>}/>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/cadastro" element={<CadastroPage />} />
				</RoutesBase>
			</Container>
			<Footer />
		</Router>
	);

};
