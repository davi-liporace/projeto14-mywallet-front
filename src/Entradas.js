import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import AuthContext from "./auth"

export default function Entradas (){
    const [formulario, setFormulario] = useState({valor:"", descricao:""})
    const {user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
function registraEntrada(e){
    setFormulario({...formulario,[e.target.name]:e.target.value})
}

function enviaEntrada(e){
    e.preventDefault()
    const config = {headers:{Authorization:`Bearer ${user.token}`}}
    axios.post("http://localhost:5000/entradas",formulario,config)
    .then(
        navigate("/home")
    )
}

    return( <Corpo><Titulo>Nova Entrada</Titulo><ContainerLogin onSubmit={enviaEntrada} >           
        <input placeholder="Valor" 
        type="number"
        name="valor"
        value={formulario.valor}
        onChange={registraEntrada}

        
        />
        <input placeholder="Descrição"
        type="text"
        name="descricao"
        value={formulario.descricao}
        onChange={registraEntrada}
        />
                
        <BotaoAdiciona type="submit"><h1>Salvar Entrada</h1></BotaoAdiciona>
      


    </ContainerLogin></Corpo>
    )
}

const Corpo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Titulo = styled.div`
width: 80%;
justify-content: flex-start;
margin-top: 25px;
font-family: 'Raleway';
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: white;
margin-bottom: 40px;
`
const ContainerLogin = styled.form`
    display:flex ;
    flex-direction: column;
    align-items: center;
    input{
        width: 326px;
height: 58px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 13px;
    color: #D4D4D4;
    box-sizing: border-box;
    }
    `
    
    
    const BotaoAdiciona = styled.button`
    width: 326px;
height: 46px;
    background: #a328d6;
    border-radius: 4.63636px;
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
  `;