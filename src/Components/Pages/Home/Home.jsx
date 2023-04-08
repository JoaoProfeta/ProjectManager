import { HomePage } from "./styles"
import saving from '../../../assets/savings.svg'
import { LinkButton } from "../../Layout/linkButtom/LinkButtom"
export const Home = ()=>{
    return(
        <HomePage>
            <h1>
                Bem vindo ao <span>Costs</span>
            </h1>
            <p>
                Comece a gerenciar seus projetos agora mesmo!
            </p>
            <LinkButton to="/newproject" text="Criar Projeto" //txd={true}
            />
            <img src={saving} alt="Costs" />
            
        </HomePage>
    )
}

