import { Link } from "react-router-dom";
import styled from "styled-components";
import logoutImg from "./Vector.png";
import AddImg from "./ant-design_plus-circle-outlined.png"
import DeleteImg from "./ant-design_minus-circle-outlined.png"
import AuthContext from "./auth";
import { useContext, useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  let lancamentosFiltrados = []
  const {user, setUser} = useContext(AuthContext)
  const [lancamentos, setLancamentos] = useState([])
  const [saldo, setSaldo] = useState(0)
  function somaSaldo(e){
    let total = 0
    for (let i = 0;i<e.length; i++){
      if(e[i].tipo==="entrada"){
        e[i].valor =+e[i].valor
        total += e[i].valor
      }
      else if(e[i].tipo === "saida"){
        e[i].valor =+e[i].valor
        total -= e[i].valor
      }
    } setSaldo(total)
  }
  useEffect(()=> {
    if (!user){
      return
    }
    const config = {headers:{"Authorization":`Bearer ${user.token}`}}
    axios.get("http://localhost:5000/lancamentos",config)
    .then((res)=> {
      somaSaldo(res.data)
      setLancamentos(res.data)
      setUser({...user,lancamentos:res.data})
      lancamentosFiltrados = lancamentos.filter(e => e.tokensessao == user.token);
    })
    .catch((res)=> alert(res.data))
  },[lancamentos])

  return (
    <Corpo>
      <MensagemHeader>
        <h1>Olá, {user.nome}</h1>
        <img src={logoutImg} />
      </MensagemHeader>
      <ContainerLancamentos>
      {
       lancamentos.map((l)=> (
        <Lancamento color={l.tipo} >
          <h1>{l.data}</h1>
          <h2>{l.descricao}</h2>
          <h3>{l.valor.toString().replaceAll(".",",")}</h3>
        </Lancamento>
        ))}

       
        
      </ContainerLancamentos>
      <TotalLancamentos color={saldo}><h1>SALDO</h1><h2>{saldo.toFixed(2).toString().replaceAll(".",",")}</h2></TotalLancamentos>
      <ContainerBotoes>
        <Link to="/entradas">
          <BotaoEntradas>
            <img src={AddImg}/>
            <h1>
              Nova <br />
              Entrada
            </h1>
          </BotaoEntradas>
        </Link>
        <Link to="/saidas">
          <BotaoEntradas>
            <img src={DeleteImg}/>
            <h1>
              Nova
              <br />
              Saida
            </h1>
          </BotaoEntradas>
        </Link>
      </ContainerBotoes>
    </Corpo>
  );
}



const TotalLancamentos = styled.div`
display: flex;
width: 326px;
background-color: white;
height: 20px;
border-bottom-left-radius: 5px;
border-bottom-right-radius:5px;
margin-top: -5px;
z-index: 1;
position: relative;
h1{
  font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
position: absolute;
left: 5%;
}
h2{
  position: absolute;
  right: 5%;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
font-size: 17px;
line-height: 20px;
color: ${props=>props.color>0?"#03AC00":"red"};
}
`
const ContainerBotoes = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const MensagemHeader = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  h1 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: white;
  }
  img {
    width: 23px;
    height: 24px;
  }
`;
const ContainerLancamentos = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 326px;
  height: 426px;
  border-radius: 5px;
  box-sizing: border-box;
  padding-bottom: 13px;
  position: relative;
  overflow: scroll;
`;

const Lancamento = styled.div`
  display: flex;
  margin-top: 15px;
  width: 90%;
  position: relative;
  h1 {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }
  h2 {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-left: 10px;
  }
  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color:${props=>props.color === "saida"?"red":"#03ac00"};
    position: absolute;
    right: 0%;
  }
`;
const Corpo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BotaoEntradas = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 4.63636px;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 9px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-bottom: 9px;
  position: relative;
  h1 {
    color: white;
    font-size: 17px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    font-family: "Raleway";
  }
  img{
    position: absolute;
    top: 5%;
  }
`;

