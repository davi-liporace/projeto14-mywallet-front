import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "./auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Saidas() {
  const [formulario, setFormulario] = useState({ valor: "", descricao: "" });
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  function registraSaida(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  }

  function enviaSaida(e) {
    e.preventDefault();
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    axios
      .post("http://localhost:5000/saidas", formulario, config)
      .then(navigate("/home"));
      console.log(formulario.email)
  }

  return (
    <Corpo>
      <Titulo>Nova Saida</Titulo>
      <ContainerLogin onSubmit={enviaSaida}>
        <input
          placeholder="Valor"
          type="number"
          name="valor"
          value={formulario.valor}
          onChange={registraSaida}
        />
        <input
          placeholder="Descrição"
          type="text"
          name="descricao"
          value={formulario.descricao}
          onChange={registraSaida}
        />

        <BotaoAdiciona type="submit">
          <h1>Salvar Saída</h1>
        </BotaoAdiciona>
      </ContainerLogin>
    </Corpo>
  );
}

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Titulo = styled.div`
  width: 80%;
  justify-content: flex-start;
  margin-top: 25px;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: white;
  margin-bottom: 40px;
`;
const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 326px;
    height: 58px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 13px;
    color: #d4d4d4;
    box-sizing: border-box;
  }
`;

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
