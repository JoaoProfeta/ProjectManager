import { Cont } from "./Style"


export const Container = (props) => {
    return (

        <Cont styleHeight={props.styleHeight} startStyle={props.start} columnStyle={props.column}>

            {props.children}

        </Cont>

    )
}