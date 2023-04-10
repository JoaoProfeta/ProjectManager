

import { Cadastro } from "./styles";
import { Link } from "react-router-dom";

export const CadastroPage = () => {
  function handleSubmit(e) {
    e.preventDefault();
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
          />
        </label>
        <label htmlFor="user">
          Nome
          <input
            type="text"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            name="senha"
            id="senha"
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

