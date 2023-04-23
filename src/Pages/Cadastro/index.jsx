
import { useState } from "react";
import { Cadastro } from "./styles";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid"



export const CadastroPage = () => {

  const [signup, setSignup] = useState([])



  const handleOnChange = (e) => {
    const projects = []
    const cost = 0
    const services = []
    setSignup({ ...signup, [e.target.name]: e.target.value,projects,cost,services })
  }

  function handleSubmit(e) {
    e.preventDefault();
    signup.id = uuid()
    

    // busca usuários existentes no localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // adiciona o novo usuário ao array
    const updatedUsers = [...users, signup,];
    console.log(" verificando", signup)
    // salva o novo array no localStorag
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    //console.log(updatedUsers);
  }




  return (
    <Cadastro>
      <form action="">
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            name="senha"
            id="senha"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="repetir-senha">
          Repita a senha
          <input
            type="password"
            name="repetir-senha"
            id="repetir-senha"
          />
        </label>
        <button
          onClick={handleSubmit}
          type="submit"
        >
          Cadastre-se
        </button>
        <div>
          já tem conta?<Link to="/login">Login</Link>
        </div>
      </form>
    </Cadastro>
  );
};

