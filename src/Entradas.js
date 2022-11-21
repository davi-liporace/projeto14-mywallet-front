import styled from "styled-components"

export default function Entradas (){
    return( <Corpo><Titulo>Nova Entrada</Titulo><ContainerLogin >           
        <input placeholder="Valor" data-identifier="input-valor"
        type="email"
        name="email"
        
        />
        <input placeholder="Descrição" data-identifier="input-password"
        type="name"
        name="name"
        
        />
                
        <BotaoAdiciona><h1>Salvar Entrada</h1></BotaoAdiciona>
      


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
const ContainerLogin = styled.div`
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
    
    
    const BotaoAdiciona = styled.div`
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