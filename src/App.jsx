import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';

<<<<<<< HEAD
import { Home } from './Pages/Home'

import { NewProject } from './Pages/NewProject'
import { Projects } from './Pages/Projects'
import { LoginPage } from "./Pages/Login";
import { CadastroPage } from "./Pages/Cadastro";
=======
import { Home } from './pages/Home/Home'
import { Contact } from './pages/Contact/Contact'
import { Company } from './pages/Company/Company'
import { NewProject } from './pages/NewProject/NewProject'
import { Projects } from "./pages/Projects/Projects"
import { Sign } from "./pages/Login/login";
import { SignUp } from "./pages/Cadastro/Cadastro"
import { Footer } from "./Components/Footer/Footer"
import { NavBar } from "./Components/Navbar/NavBar"
import { Container } from "./Components/Container/Container";
import { ProjectEdit } from "./Components/ProjectEdit/ProjectEdit"
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959

import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/Navbar";

import { Container } from "./Components/Container";
import { ProjectEdit } from "./Pages/ProjectEdit";




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

<<<<<<< HEAD
            </Container>
=======
                        <Route path="/" element={<Home/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/company" element={<Company/>} />
                        <Route path="/newproject" element={<NewProject/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/project/:id" element={<ProjectEdit/>}/>
                        <Route path="/login" element={<Sign/>}/>
                        <Route path="/cadastro" element={<SignUp/>}/>
                        
                    </Routes>
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959

            <Footer />

        </Router>
    )
}

export default App;
