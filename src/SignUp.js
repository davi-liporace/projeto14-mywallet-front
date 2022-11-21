import styled from "styled-components"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function SignUp (){
const [formulario, setFormulario] = useState({nome:"", email:"",senha:""})
const navigate = useNavigate()

function registraUsuario (e){
  setFormulario({...formulario,[e.target.name]:e.target.value})
}

function enviaRegistro (e){
  e.preventDefault()
  if(formulario.senha !== formulario.ConfirmaSenha){
    console.log(formulario)
    alert("As senhas precisam ser iguais")
  }
  else{
    delete formulario.ConfirmaSenha
    const body = {...formulario}
    axios.post("http://localhost:5000/sign-up", body)
    .then((res)=> {
      navigate("/")
    } )
    .catch((res) => alert(res))
  }
}

    return(<Corpo><Titulo>MyWallet</Titulo>
        <ContainerLogin onSubmit={enviaRegistro} >
            <input placeholder="Nome" data-identifier="input-name"
        type="text"
        name="nome"
        value={formulario.nome}
        onChange={registraUsuario}
       
        />
        <input placeholder="e-mail" data-identifier="input-email"
        type="email"
        name="email"
        value={formulario.email}
        onChange={registraUsuario}
        
        />
        <input placeholder="senha" data-identifier="input-password"
        type="password"
        name="senha"
        value={formulario.senha}
        onChange={registraUsuario}
        
        />
                
        <input placeholder="Confirme a senha" data-identifier="input-photo"
        type="password"
        name="ConfirmaSenha"
        value={formulario.ConfirmaSenha}
        onChange={registraUsuario}
        
        />
        <BotaoLogin type="submit" ><h1>Cadastrar</h1></BotaoLogin>
        <Link to = "/"><BotaoSignUp>Já tem uma conta? Entre agora! </BotaoSignUp></Link>


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

const ContainerLogin = styled.form`
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

const BotaoLogin = styled.button`
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