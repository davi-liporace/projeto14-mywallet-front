import styled from "styled-components"
import { Link } from "react-router-dom";

export default function SignUp (){
    return(<Corpo><Titulo>MyWallet</Titulo>
        <ContainerLogin >
            <input placeholder="Nome" data-identifier="input-name"
        type="text"
        name="name"
       
        />
        <input placeholder="e-mail" data-identifier="input-email"
        type="email"
        name="email"
        
        />
        <input placeholder="senha" data-identifier="input-password"
        type="password"
        name="password"
        
        />
                
        <input placeholder="Confirme a senha" data-identifier="input-photo"
        type="password"
        name="password"
        
        />
        <BotaoLogin><h1>Cadastrar</h1></BotaoLogin>
        <Link to = "/"><BotaoSignUp>Primeira vez? Cadastre-se! </BotaoSignUp></Link>


    </ContainerLogin></Corpo>
    )
}

const Titulo = styled.div`
  font-size: 32px;
  font-family: "Saira Stencil One";
  color: white;
  margin-top: 45%;
  justify-content: center;
`;
const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerLogin = styled.div`
display:flex ;
flex-direction: column;
align-items: center;
input{
    width: 326px;
height: 58px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 10px;
color: #D4D4D4;
}
`

const BotaoLogin = styled.div`
width: 303px;
  height: 45px;
  background: #a328d6;
  border-radius: 4.63636px;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    font-family: "Raleway";
  }
`

const BotaoSignUp = styled.div`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: white;
  margin-top: 36px;
`;