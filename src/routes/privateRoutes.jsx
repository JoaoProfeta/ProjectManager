import { Navigate } from "react-router-dom";
export const PrivateRoutes = ({ children })=>{
	const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
	const logged = !!loggedInUser;
	return logged ? children : <Navigate to="/login"/>;
};
