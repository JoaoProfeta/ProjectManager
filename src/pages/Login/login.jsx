
import { StyledSign } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input/input";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../Components/SubmitButton/SubmitButton";


export const Sign = () => {

  const navigate = useNavigate();


  const [loggedUser, setLoggedUser] = useState([])


  //setar informações de usuários
  const handleOnChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value })
  };//pegando o nome da propriedade e o valor que abriga os inputs(senha e email)



  const handleSubmit = (e) => {

    //validador de email e senha|| 
    const getUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userFind = getUsers.find(user => user.email === loggedUser.email && user.password === loggedUser.password);
    if (userFind) {
      // Salva as informações do usuário no localStorage
      return localStorage.setItem('loggedInUser', JSON.stringify(userFind));

      // Redireciona o usuário para a página de dashboard
    } else {
      // Exibe uma mensagem de erro para o usuário
      alert('Email ou senha incorretos');

    }

  }




  return (
    <StyledSign>
      <form action="">

      <Input
          type="text"
          name="email"
          id="email"
          onChange={handleOnChange}
          text="E-Mail"
        />
        <Input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
          text="Senha"
        />   
        <Button
          onClick={handleSubmit}
          type="submit"
          text={"Login"}
        />
        <div>
          Não tem conta?<Link to="/cadastro">Cadastre-se</Link>
        </div>
      </form>
    </StyledSign>
  );
};
