import { useState } from "react";
import { Login } from "./styles";
import { Link } from "react-router-dom";

export const LoginPage = () => {





  const [user, setUser] = useState([])

  function handleOnChange(e) {
    
    setUser({...user, [e.target.name]:e.target.value})

    console.log(user)

  }



  function handleSubmit(e) {
    e.preventDefault();
    try{
      alert("login feito com sucesso")
    }
    catch{
      alert("login dedu erro")
    }

    
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
        <button
          onClick={handleSubmit}
          type="submit"
        >
          Login
        </button>
        <div>
          Não tem conta?<Link to="/cadastro">Cadastre-se</Link>
        </div>
      </form>
    </Login>
  );
};
