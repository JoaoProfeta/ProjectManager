<<<<<<< HEAD:src/Components/Navbar/index.jsx
import { Link, NavLink } from "react-router-dom";
import { Nav } from "./styles";
import logo from "../../assets/costs_logo.png";
import { Container } from "../Container";
=======
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledNav } from "./styles";
import logo from "../../assets/costs_logo.png";
import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx"
import { useState } from "react";
import { Button } from "../SubmitButton/SubmitButton";
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/Components/Navbar/NavBar.jsx

export const NavBar = () => {

  const navigate = useNavigate()

  const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"))

  const logged = !!userLoggedIn

<<<<<<< HEAD:src/Components/Navbar/index.jsx
  const navLinkNew = [
    { to: "/", name: "Home", id: 1, key: "home", loggedIn: true},
    { to: "/projects", name: "Projects", id: 3, key: "projects", loggedIn: logged },
    { to: "/newproject", name: "New Project", id: 4, key: "newproject", loggedIn: logged },
=======
  const navPagesLinks = [
    { to: "/", name: "Home", id: 1, key: "home", loggedIn: true },
    { to: "/company", name: "Empresa", id: 2, key: "company", loggedIn: true },
    { to: "/projects", name: "Projetos", id: 3, key: "projects", loggedIn: logged },
    { to: "/newproject", name: "Novo Projeto", id: 4, key: "newproject", loggedIn: logged },
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/Components/Navbar/NavBar.jsx
    { to: "/login", name: "Login", id: 5, key: "login", loggedIn: !logged },
    { to: "/cadastro", name: "Cadastre-se", id: 6, key: "cadastro", loggedIn: !logged },
    { to: "/user", name: "User", id: 7, key: "user", loggedIn: logged }

  ].filter(item => item.loggedIn === true)

  const exitUser = () => {

    localStorage.removeItem('loggedInUser');

    navigate("/")
  
  };
  
  return (
    <StyledNav>
      <Container>
        <Link to="/" className="logo">
          <h1>ManagerProjects</h1>
        </Link>
        
        <ul>
          {
            navPagesLinks.map(({ id, to, name, key }) => {
              return (
                <li key={key} id={id}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? "active" : "link_style"}
                  >
                    {name}
                  </NavLink>
                </li>
              )
            })
          }

          {logged && <Button className="icon_exit" ><RxExit onClick={exitUser} /></Button>}
        </ul>

      </Container>
    </StyledNav>
  );
}
