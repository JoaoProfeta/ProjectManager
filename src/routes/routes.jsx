import { Route, BrowserRouter as Router, Routes as RoutesBase } from "react-router-dom";
import { Container } from "../Components/Container";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/Navbar";
import { Home } from "../Pages/Home";
import { NewProject } from "../Pages/NewProject";
import { ProjectEdit } from "../Pages/ProjectEdit";
import { Projects } from "../Pages/Projects";
import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";
import { Services } from "../Pages/servicePage";
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
					<Route path="/signIn" element={<SignIn />} />
					<Route path="/signUp" element={<SignUp />} />
				</RoutesBase>
			</Container>
			<Footer />
		</Router>
	);

};
