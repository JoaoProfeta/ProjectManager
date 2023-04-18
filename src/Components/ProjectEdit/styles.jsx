import styled from "styled-components";


export const EditCard = styled.div`
    padding: 2em;

    .div_container{
        width: 100%;
    }
    h1,h2,p{
        margin-bottom: .5em;
    }

    h1{
        background-color: #222;
        color: #ffbb33;
        padding: .4em;
    }
    span{
        font-weight: bold;
    }
    .datails_container{
        width: 100%;
    }
    .datails_container,
    .service_form_container{
        width: 100% ;
        border-bottom: 1px solid #7a7a7a;
        margin-bottom: 1.2em;
        padding-bottom: 1.2em;
        display: flex;
        justify-content: space-between;flex-wrap:wrap;
    }
    button{
        background-color: #222;
        color: #fff;
        padding: .5em 1em;
        text-decoration: none;
        transition: .5s;
        cursor: pointer;
        max-height:40px;
        border: none;
    }
    button:hover{
        color: #ffbb33;
    }
    .project_info{
        width: 100%;
    }


    
`