
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signInFormSchema } from "../../Components/validators/signIn";
import { StyledSign } from "./styles";

export function LoginPage () {
	
	const { register,handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(signInFormSchema),
	});
	// Setar informações de usuários


	const handleOnSubmit = ({ email,password }) => {
		
		console.log(email,password);

		// Validador de email e senha||
		const users = JSON.parse(localStorage.getItem("users")) || [];
		
		const user = users.find((user) => user.email === email && user.password === password);
		console.log(user);
		if (user) {
			
			// Salva as informações do usuário no localStorage
			return localStorage.setItem(
				"loggedInUser",
				JSON.stringify(user)
			);
			// Redireciona o usuário para a página de dashboard
		}
		// Exibe uma mensagem de erro para o usuário
		//alert("Email ou senha incorretos");
		//console.log(user);

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
		</StyledSign>
	);

}

