
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Submit } from "../../Components/SubmitButton";
import { StyledSign } from "./styles";


export function LoginPage () {

	const navigate = useNavigate(),


	 [
			log,
			setLog
		] = useState([]),


		// Setar informações de usuários
	 handleOnChange = (e) => {

			setLog({ ...log, [e.target.name]: e.target.value });

		}, // Pegando o nome da propriedade e o valor que abriga os inputs(senha e email)


	 handleSubmit = () => {

			// Validador de email e senha||
			const users = JSON.parse(localStorage.getItem("users")) || [],
		 user = users.find((user) => user.email === log.email && user.password === log.password);


			if (user) {

				// Salva as informações do usuário no localStorage
				return localStorage.setItem(
					"loggedInUser",
					JSON.stringify(user)
				);

				// Redireciona o usuário para a página de dashboard

			}
			// Exibe uma mensagem de erro para o usuário
			alert("Email ou senha incorretos");
			console.log(user);

		},
	 exitUser = () => {

			localStorage.removeItem("loggedInUser");
			location.reload();
			navigate("/");

		};


	return (
		<StyledSign>
			<form action="">
				<label htmlFor="email">
            E-mail
					<input
						id="email"
						name="email"
						onChange={handleOnChange}
						type="text"
					/>
				</label>

				<label htmlFor="senha">
            Senha
					<input
						id="senha"
						name="senha"
						onChange={handleOnChange}
						type="password"
					/>
				</label>

				<Submit
					disabled
					onClick={handleSubmit}
					text="Login"
					type="submit"
				/>

				<div>
            Não tem conta?
					<Link to="/cadastro">
              Cadastre-se
					</Link>
				</div>
			</form>
		</StyledSign>
	);

}

