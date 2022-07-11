import styled from "styled-components";
import topo from './assets/img/devbookimg.png';
import { useState } from 'react';
export default function CheckOut() {
    const [confirmado, setConfirmado] = useState("")

    return (
        (confirmado == "") ?
        <>
         <Header>
                <h1>DevBooK</h1>
            </Header>
            <ImgContainer>
                <img src={ topo } alt='Os melhores livros de programação, você encontra na DevBook' />
            </ImgContainer>
            <Container>
            <Informacoes>
                <Titulo>Confirme os dados do seu pedido</Titulo>
                <Dados>Dados do comprador</Dados>
                <InfoDados>
                    Nome: <p></p>
                    Telefone: <p></p>
                </InfoDados>
                <Dados>Dados da entrega</Dados>
                <InfoDados>
                    Cep:<p></p>
                    Endereço: <p></p>
                </InfoDados>
                <Dados>Dados de pagamento</Dados>
                <InfoDados>
                    Forma de pagamento:<p></p>
                    Total:  <p></p>
                </InfoDados>
                <Sucesso><Confirm onClick={()=> setConfirmado("confirmado")}>Confirmar</Confirm></Sucesso>
            </Informacoes>
        </Container>
        </>
        :
        <>
     <Header>
                <h1>DevBooK</h1>
            </Header>
            <ImgContainer>
                <img src={ topo } alt='Os melhores livros de programação, você encontra na DevBook' />
            </ImgContainer>
            <Container>
            <Thank>
            <TituloT>Obrigado, pedido realizado com sucesso!</TituloT>
            </Thank>
        </Container>
        </>
    );
}
const Header = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    background-color: #c1c1c1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
        font-family: 'Major Mono Display', monospace;
        color: #FFFFFF;
        font-size: 31px;
        margin-left: 5px;
    }

    ion-icon{
        margin-top: 8px;
        color: #FFFFFF;
        font-size: 23px;
        margin-bottom: 5px;
        --ionicon-stroke-width: 23px;
        margin-left: 20px;
    }
`

const ImgContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 86px;
    background-color: #9cd8e2;

    img {
        width: 360px;
        height: 86px;
    }
`

const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #c1c1c1;
    display: flex;
    justify-content: center;
`
const Informacoes = styled.div`
    width: 60%;
    height: 750px;
    margin-top: 140px;
    background-color: #4F4F4F;
    border-radius: 5px;
   
   
`
const Titulo = styled.div`
    font-family: 'Carter One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    text-align: center;
    color: 		#ADD8E6;
    margin-top: 15px;
`
const Dados = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    color: white;
    margin-top: 50px;
    
`
const InfoDados = styled.div`
font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: white;
    margin-top: 30px;
    margin-left: 10px;
`
const Sucesso = styled.div`
    background-color: #ADD8E6;
    width: 70%;
    height: 55px;
    margin-left: 80px;
    border-radius: 7px;
    margin-top: 90px;
`
const Confirm = styled.div`
    background-color: #ADD8E6;
    font-family: 'Carter One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    text-align : center;
    margin-top: 15px;
`
const Thank = styled.div`
    width: 60%;
    height: 200px;
    margin-top: 230px;
    background-color: #4F4F4F;
    border-radius: 5px;
   
   
`
const TituloT = styled.div`
    font-family: 'Carter One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    text-align: center;
    color: 	#ADD8E6;
    margin-top: 60px;
`

