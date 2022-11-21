import { Link } from "react-router-dom";
import styled from "styled-components";
import logoutImg from "./log-out-outline.svg";

export default function Home() {
  return (
    <Corpo>
      <MensagemHeader>
        <h1>Olá Fulano</h1>
        <img src={logoutImg} />
      </MensagemHeader>
      <ContainerLancamentos>
        <Lancamento>
          <h1>14/11</h1>
          <h2>lancamento</h2>
          <h3>18,00</h3>
        </Lancamento>
        <Lancamento>
          <h1>14/11</h1>
          <h2>lancamento</h2>
          <h3>18,00</h3>
        </Lancamento>
      </ContainerLancamentos>
      <ContainerBotoes>
        <Link to="/entradas">
          <BotaoEntradas>
            <h1>
              Nova <br />
              Entrada
            </h1>
          </BotaoEntradas>
        </Link>
        <Link to="/saidas">
          <BotaoSaidas>
            <h1>
              Nova
              <br />
              Saida
            </h1>
          </BotaoSaidas>
        </Link>
      </ContainerBotoes>
    </Corpo>
  );
}

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
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
  height: 446px;
  border-radius: 5px;
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
    color: #03ac00;
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
  h1 {
    color: white;
    font-size: 17px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    font-family: "Raleway";
  }
`;
const BotaoSaidas = styled.div`
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 4.63636px;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-bottom: 9px;
  h1 {
    color: white;
    font-size: 17px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    font-family: "Raleway";
  }
`;
