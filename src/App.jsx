import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';

import { Home } from './Pages/Home'

import { NewProject } from './Pages/NewProject'
import { Projects } from './Pages/Projects'
import { LoginPage } from "./Pages/Login";
import { CadastroPage } from "./Pages/Cadastro";

import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/Navbar";

import { Container } from "./Components/Container";
import { ProjectEdit } from "./Components/ProjectEdit";




function App() {
    return (

        <Router>

            <NavBar />

            <Container styleHeight={true}>

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ProjectEdit />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cadastro" element={<CadastroPage />} />

                </Routes>

            </Container>

            <Footer />

        </Router>
    )
}

export default App;
