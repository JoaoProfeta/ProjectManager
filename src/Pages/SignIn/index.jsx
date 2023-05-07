
import { yupResolver } from "@hookform/resolvers/yup";
import bcrypt from "bcryptjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signInFormSchema } from "../../services/validators/signIn";
import { StyledSign } from "./styles";
export function SignIn () {
	const navigate = useNavigate();
	const notifyErr = () => {
		toast.error("Verify that the password and email are correct!!", {
			position: "top-left",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	const { register,handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(signInFormSchema),
	});
	const handleOnSubmit = ({ email,password }) => {
		const users = JSON.parse(localStorage.getItem("users")) || [];
		const pickingUpPasswordSignIn = password;
		
		const decryptPassword = (passwordFind,storedPassword) => {
			return bcrypt.compareSync(passwordFind,storedPassword);
		};
	
		const emailVerification = users.find((user)=> user.email === email ? true : false);
		
		const passwordVerification = users.find((user)=> user.email === email);
		
		
		if(!!emailVerification === true){
			if(decryptPassword(pickingUpPasswordSignIn,passwordVerification.token) === true){
				const user = users.find((user) => user.email === email && decryptPassword(pickingUpPasswordSignIn,user.token)=== true);
				navigate("/");
				if (user) {
					return localStorage.setItem(
						"loggedInUser",
						JSON.stringify(user)
						
					);
					
				}
				
			}else{

				notifyErr();
			}
		}else{
			notifyErr();

		}

	};
	const [ change,setChange ] = useState(false);
	const onSubmit = () => {
		setChange(false);
	};
	return (
		<StyledSign>
			<form onSubmit={handleSubmit(handleOnSubmit)}>

				<label htmlFor="email">
          E-mail
					<input
						type="text"
						name="email"
						id="email"
						{...register("email")}
						onBlurCapture={()=>{
							if(change === false){
								setChange(true);
							}
						}}	
					/>
					
				</label>
				<p className="error">
					{change ? undefined : errors.email?.message}
				</p>
				<label htmlFor="senha">
          Password
					<input
						type="password"
						name="senha"
						id="senha"
						onBlurCapture={()=>{
							if(change === false){
								setChange(true);
							}
						}}
						{...register("password")}
					/>
					
				</label>
				<p className="error">
					{change ? undefined : errors.password?.message}
				</p>
				<button 
					type="submit"
					onClick={onSubmit}
					className="sign-button"
				>
					Login
				</button>

				<div>

					Don't have an account?<Link to="/cadastro">SignUp</Link>
				</div>

			</form>
			<ToastContainer
				position="top-left"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				theme="light"
				role="alert"
			/>
		</StyledSign>
	);

}

