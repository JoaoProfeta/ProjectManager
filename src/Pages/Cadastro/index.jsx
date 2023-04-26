import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { StyledSignUp } from "./styles";



export function CadastroPage() {

	const [ signup, setSignup ] = useState([]);



	const handleOnChange = (e) => {
		const projects = [];
		const cost = 0;
		const services = [];
		setSignup({ ...signup, [e.target.name]: e.target.value, projects, cost, services });
	};

	function handleSubmit(e) {
		e.preventDefault();
		signup.id = uuid();


		// busca usuários existentes no localStorage
		const users = JSON.parse(localStorage.getItem("users")) || [];
		// adiciona o novo usuário ao array
		const updatedUsers = [ ...users, signup, ];
		console.log(" verificando", signup);
		// salva o novo array no localStorag
		localStorage.setItem("users", JSON.stringify(updatedUsers));
		//console.log(updatedUsers);
	}




	return (
		<StyledSignUp>
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

				<label htmlFor="nome">
					Nome
					<input
						id="nome"
						name="nome"
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

				<label htmlFor="repetir-senha">
					Repita a senha
					<input
						id="repetir-senha"
						name="repetir-senha"
						type="password"
					/>
				</label>

				<button
					onClick={handleSubmit}
					type="submit"
				>
					Cadastre-se
				</button>

				<div>
					já tem conta?
					<Link to="/login">
						Login
					</Link>
				</div>
			</form>
		</StyledSignUp>
	);
}

