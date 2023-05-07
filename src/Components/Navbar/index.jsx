import { RxExit } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container } from "../Container";
import { StyledNav } from "./styles";
export const NavBar = () => {
	const navigate = useNavigate();
	const userLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
	const logged = !!userLoggedIn;
	const navLinkNew = [
		{ to: "/", name: "Home", id: 1, key: "home", loggedIn: true },
		{ to: "/projects", name: "Projects", id: 3, key: "projects", loggedIn: logged },
		{ to: "/newproject", name: "New Project", id: 4, key: "newproject", loggedIn: logged },
		{ to: "/signIn", name: "SignIn", id: 5, key: "signIn", loggedIn: !logged },
		{ to: "/signUp", name: "SignUp", id: 6, key: "signUp", loggedIn: !logged }
	].filter((item) => item.loggedIn === true);
	const exitUser = () => {
		localStorage.removeItem("loggedInUser");
		location.reload();
		navigate("/");
	};
	return (
		<StyledNav>
			<Container >
				<Link to="/" className="logo">
					<h1>ProjectManager</h1>
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
							);
						})
					}
					{logged && <RxExit  className="icon-exit" onClick={exitUser} />}
				</ul>

			</Container>
		</StyledNav>
	);
};
