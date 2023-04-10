import { useState } from "react";
import { Login } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { validarEmail, validarSenha } from "../../Form/validadores/validadores";

export const LoginPage = () => {

  const handleOnChange = ()=>{

  }
  const handleSubmit = ()=>{
    
  }
  return (
    <Login>
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
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            name="senha"
            id="senha"
            onChange={handleOnChange}
          />
        </label>
        <Button
          onClick={handleSubmit}
          type="submit"
          
          text={"Login"}
        />


        <div>
          Não tem conta?<Link to="/cadastro">Cadastre-se</Link>
        </div>
      </form>
    </Login>
  );
};
