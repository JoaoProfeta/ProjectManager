import { Link, NavLink } from "react-router-dom";
import { StyledNav } from "./styles";
import logo from "../../assets/costs_logo.png";
import { Container } from "../Container";

export const NavBar = () => {

  const navigate = useNavigate()

  const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"))

  const logged = !!userLoggedIn


  const navLinkNew = [
    { to: "/", name: "Home", id: 1, key: "home", loggedIn: true},
    { to: "/projects", name: "Projects", id: 3, key: "projects", loggedIn: logged },
    { to: "/newproject", name: "New Project", id: 4, key: "newproject", loggedIn: logged },
    { to: "/login", name: "SignIn", id: 5, key: "login", loggedIn: !logged },
    { to: "/cadastro", name: "SignUp", id: 6, key: "cadastro", loggedIn: !logged },
    {to:"/user", name: "User",id:7, key: "user", loggedIn:logged}
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

          {logged && <Button className="icon_exit" ><RxExit onClick={exitUser} /></Button>}
        </ul>

      </Container>
    </StyledNav>
  );
}
