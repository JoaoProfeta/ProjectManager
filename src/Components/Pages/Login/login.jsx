import { Login } from "./styles";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  function handleSubmit(e) {
    e.preventDefault();
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
