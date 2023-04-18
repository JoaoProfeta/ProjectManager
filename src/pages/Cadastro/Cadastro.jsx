
import { useState } from "react";
import { StyledSignup } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid"



export const SignUp = () => {

  const [signup, setSignup] = useState([])

  const handleOnChange = (e) => {
    const projects = []
    const cost = 0
    const services = []
    setSignup({ ...signup, [e.target.name]: e.target.value, projects, cost, services })
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    signup.id = uuid()

    // busca usuários existentes no localStorage
    const getUsers = JSON.parse(localStorage.getItem("users")) || [];
    // adiciona o novo usuário ao array
    const updatedUsers = [...getUsers, signup,];
    console.log(" verificando", signup)
    // salva o novo array no localStorag
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    //console.log(updatedUsers);
  }




  return (
    <StyledSignup>
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
          onClick={handleOnSubmit}
          type="submit"
        >
          Cadastre-se
        </button>
        <div>
          já tem conta?<Link to="/login">Login</Link>
        </div>
      </form>
    </StyledSignup>
  );
};

