import { Link, NavLink } from "react-router-dom";
import { Nav } from "./styles";
import logo from "../../../assets/costs_logo.png";
import { Container } from "../Container/Container";

export const NavBar = () => {
  const navLink = [
    { to: "/", name: "Home", id: 1 },
    { to: "/projects", name: "Projetos", id: 2 },
    { to: "/company", name: "Empresa", id: 3 },
    { to: "/newproject", name: "Novo Projeto", id: 4 },
    { to: "/login", name: "Login", id: 5 },
    { to: "/cadastro", name: "Cadastre-se", id: 6 },
  ];

  return (
    <Nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul>
          {navLink.map(({ to, name, id }) => {
            return (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "active" : "link_style"
                  }>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </Nav>
  );
};
