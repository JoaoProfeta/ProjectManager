import { useState } from "react";
import { Login } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { validarEmail, validarSenha } from "../../Form/validadores/validadores";
import { useCallback } from "react";
export const LoginPage = () => {

  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])

  function handleOnChange(e) {

    setForm({ ...form, [e.target.name]: e.target.value })

    console.log(form)

  }





  // const handleValidatorInput = useCallback(() => {
  //
  //   if (validarEmail(form.email) && validarSenha(form.senha) === //true) {
  //     return "form está Válido"
  //   } else {
  //     return "form está inválido"
  //   }
  // }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(handleValidatorInput())
    try {
      setLoading(true)
      alert("login feito com sucesso")
     
    }
    catch {
      alert("login dedu erro")
    }
  }
  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.senha)
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
          disabled={loading === true || !validadorInput()}
          text={"Login"}
        />


        <div>
          Não tem conta?<Link to="/cadastro">Cadastre-se</Link>
        </div>
      </form>
    </Login>
  );
};
