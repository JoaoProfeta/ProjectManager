import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';

import { Home } from './Components/Pages/Home/Home'
import { Contact } from './Components/Pages/Contact/Contact'
import { Company } from './Components/Pages/Company/Company'
import { NewProject } from './Components/Pages/NewProject/NewProject'
import { Projects } from './Components/Pages/Projects/Projects'
import { LoginPage } from "./Components/Pages/Login/login";
import { CadastroPage } from "./Components/Pages/Cadastro/Cadastro";

import { Footer } from "./Components/Layout/Footer/Footer";
import { NavBar } from "./Components/Layout/Navbar/NavBar";
import { Container } from "./Components/Layout/Container/Container";
import { ProjectEdit } from "./Components/Pages/ProjectEdit/ProjectEdit";
import { ProjectTestes } from "./requisições/get";




function App(){
    return(
        
        <Router>

            <NavBar/>

                <Container styleHeight = {true}>

                    <Routes>

                        <Route path="/" element={<Home/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/company" element={<Company/>} />
                        <Route path="/newproject" element={<NewProject/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/project/:id" element={<ProjectEdit/>}/>
                        <Route path="/testes" element={<ProjectTestes/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/cadastro" element={<CadastroPage/>}/>
                    </Routes>

                </Container>

            <Footer/>
            
        </Router>
    )
}

export default App;
