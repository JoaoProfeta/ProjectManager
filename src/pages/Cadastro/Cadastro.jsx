
import { useState } from "react";
import { StyledSignup } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid"
import { Input } from "../../Components/Input/input";
import { Button } from "../../Components/SubmitButton/SubmitButton";
import { Text } from "./styles"

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
        <Input
          type="text"
          name="email"
          id="email"
          onChange={handleOnChange}
          text="E-Mail"
        />
        <Input
          type="text"
          name="username"
          id="username"
          onChange={handleOnChange}
          text="Nome"
        />
        <Input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
          text="Senha"
        />

        <Input
          type="password"
          name="repeat-password"
          id="repeat-password"
          onChange={handleOnChange}
          text="Repetir Senha"
        />
        <Button
          onClick={handleOnSubmit}
          type="submit"
          text="Cadastre-se"
        />

        <Text>
          já tem conta?<Link to="/login">Login</Link>
        </Text>
      </form>
    </StyledSignup>
  );
};

