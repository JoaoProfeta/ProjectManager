import { Link, NavLink } from "react-router-dom";
import { Nav } from "./styles";
import logo from "../../assets/costs_logo.png";
import { Container } from "../Container";

export const NavBar = () => {

  const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"))

  const logged = !!userLoggedIn

  const navLinkNew = [
    { to: "/", name: "Home", id: 1, key: "home", loggedIn: true},
    { to: "/company", name: "Empresa", id: 2, key: "company", loggedIn: true},
    { to: "/projects", name: "Projetos", id: 3, key: "projects", loggedIn: logged },
    { to: "/newproject", name: "Novo Projeto", id: 4, key: "newproject", loggedIn: logged },
    { to: "/login", name: "Login", id: 5, key: "login", loggedIn: !logged },
    { to: "/cadastro", name: "Cadastre-se", id: 6, key: "cadastro", loggedIn: !logged },
    {to:"/user", name: "User",id:7, key: "user", loggedIn:logged}
    
  ].filter(item => item.loggedIn === true)

  return (
    <Nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul>
          {
            navLinkNew.map(({ id, to, name, key }) => {
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


        </ul>

      </Container>
    </Nav>
  );
};