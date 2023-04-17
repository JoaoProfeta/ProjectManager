
import { Login } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { validarEmail, validarSenha } from "../../Form/validadores/validadores";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {

  const navigate = useNavigate();


  const [log, setLog] = useState([])


  //setar informações de usuários
  const handleOnChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value })
  };//pegando o nome da propriedade e o valor que abriga os inputs(senha e email)



  const handleSubmit = (e) => {
    
    //validador de email e senha|| 
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === log.email && user.password === log.password);


    if (user) {
      // Salva as informações do usuário no localStorage
      return localStorage.setItem('loggedInUser', JSON.stringify(user));

      // Redireciona o usuário para a página de dashboard
    } else {
      // Exibe uma mensagem de erro para o usuário
      alert('Email ou senha incorretos');

    }
    console.log(user)
  
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

