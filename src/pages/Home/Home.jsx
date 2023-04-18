import { StyledHome } from "./styles";
import saving from "../../assets/savings.svg";
import { LinkButton } from "../../Components/linkButtom/LinkButtom";
export const Home = () => {
  return (
    <StyledHome>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton
        to="/newproject"
        text="Criar Projeto" //txd={true}
      />
      <img src={saving} alt="Costs" />
    </StyledHome>
  );
};
