import { SubmitButton } from "./styles"


export const Submit= ({ text })=>{
    return(
        <SubmitButton>
            <button>{text}</button>
        </SubmitButton>
    )
}