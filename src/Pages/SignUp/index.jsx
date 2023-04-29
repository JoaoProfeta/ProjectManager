import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { signUpFormSchema } from "../../Components/validators/signUp";
import { StyledSignUp } from "./styles";
// eslint-disable-next-line no-unused-vars
import bcrypt from "bcryptjs";

export function CadastroPage() {
	
	const { register,formState : { errors }, handleSubmit } = useForm({
		resolver: yupResolver(signUpFormSchema)
	});

	const handleOnSubmit=({ email,userName,password, id })=> {
		const projects = [];
		const cost = 0;
		const services = [];

		id=uuid();
		const getPassword = password;
		const encryptPassword= (PasswordFind) => {
			const salt = bcrypt.genSaltSync(10);
			return bcrypt.hashSync(PasswordFind, salt);
		};
		const passwordUser = encryptPassword(getPassword);
		console.log(passwordUser);

		




		const UserFindLocalStorage = { email,userName,passwordUser,id,projects,cost,services };

		const getUsers = JSON.parse(localStorage.getItem("users")) || []; 

		const userAddInLocalStorage	= [ ...getUsers, UserFindLocalStorage ];

		localStorage.setItem("users", JSON.stringify(userAddInLocalStorage));
	};
	const [ change,setChange ] = useState(false);
	const onSubmit = () => {
		setChange(false);
	};



	return (
		<StyledSignUp>
			<form action="" onSubmit={handleSubmit(handleOnSubmit)}>
				<label htmlFor="email">
					E-mail
					<input
						id="email"
						name="email"
						{...register("email")}
						onBlurCapture={()=>{
							if(change === false){
								setChange(true);
							}
						}}	
						type="text"
					/>
				</label>
				<p className="error">
					{change ? undefined : errors.email?.message}
				</p>
				<label htmlFor="user-name">
					User name
					<input
						id="user-name"
						name="user-name"
						{...register("userName")}
						onBlurCapture={()=>{
							if(change === false){
								setChange(true);
							}
						}}	
						type="text"
					/>
				</label>
				<p className="error">
					{change ? undefined : errors.userName?.message}
				</p>
				<label htmlFor="password">
					Password
					<input
						id="password"
						name="password"
						{...register("password")}
						onBlurCapture={()=>{
							if(change === false){
								setChange(true);
							}
						}}
						type="password"
					/>
				</label>
				<p className="error">
					{change ? undefined : errors.password?.message}
				</p>
				<label htmlFor="repeat-password">
					Repeat password
					<input
						id="repeat-password"
						name="repeat-password"
						{...register("repeatPassword")}
						onBlurCapture={()=>{
							if(change === false){
								setChange(true);
							}
						}}	
						type="password"
					/>
				</label>
				<p className="error">
					{change ? undefined : errors.repeatPassword?.message}
				</p>
				<button
					className="sign-button"
					onClick={onSubmit}
					type="submit"
				>
					SignUp
				</button>

				<div>
					Already have an account?
					<Link to="/login">
						SignIn
					</Link>
				</div>
			</form>
		</StyledSignUp>
	);
}
