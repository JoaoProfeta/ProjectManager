import styled from "styled-components";

export const CardForServices = styled.div`
     padding: 1em;
    border: 1px solid #7a7a7a;
    border-radius: 6px;
    width: 24%;
    margin:0.5%;

        h4{
            background-color: #222;
            color:#ffbb33;
            padding: .4em;
            margin-bottom: 1.3em;
            font-size: 1.3em;
            border-radius: 6px;
        }
        p{
            color: #7a7a7a;
            margin-bottom: 1em;
        }
        span{
            font-weight: bold;
        }
        .service_card_actions{
            margin-top: 1.2em;
            display: flex;
            align-items: center;
        }
`