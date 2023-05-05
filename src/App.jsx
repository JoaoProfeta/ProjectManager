import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container } from "./Components/Container";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { NewProject } from "./Pages/NewProject";
import { ProjectEdit } from "./Pages/ProjectEdit";
import { Projects } from "./Pages/Projects";
import { LoginPage } from "./Pages/SignIn";
import { CadastroPage } from "./Pages/SignUp";
import { Services } from "./Pages/servicePage";
import "./index.css";




function App() {
	return (

		<Router>

			<NavBar />

			<Container styleHeight={true}>

				<Routes>

					<Route path="/" element={<Home />} />
					<Route path="/newproject" element={<NewProject />} />
					<Route path= "/projects" element={<Projects />} />
					<Route path="/project/:id" element={<ProjectEdit />}/>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/cadastro" element={<CadastroPage />} />
					<Route path="/services/:id" element={<Services/>}/>

				</Routes>

			</Container>

			<Footer />

		</Router>
	);
}

export default App;
