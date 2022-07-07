import styled from "styled-components";
import topo from './assets/img/devbookimg.png'
export default function SignUp() {
    return (
        <>
            <ImgContainer>
                <img src={topo} alt='DevBook-Store' />
            </ImgContainer>
            <Logar><h1>Cadastro</h1></Logar>
            <Form>
                <input type='nome' placeholder="Nome" />
                <input type='email' placeholder="E-mail" />
                <input type='password' placeholder="Senha" />
                <input type='password' placeholder="Confirme a senha"/>
                <Botao>
                    <Entrar>Cadastrar</Entrar>
                </Botao>
                <Cadastro >Já tem uma conta? Entre agora!</Cadastro>
            </Form>
        </>
    );
}
const ImgContainer = styled.div`
    width: 100%;
    height: 120%;
    background-color: #9CD8E2;
    display: flex;
    justify-content: center;
  ;
    img {
        width: 306px;
        height: 160px;
    }
`
const Logar = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    h1{
        font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    margin-top : 80px
    }
`
const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 50px;
  input{
width: 30%;
height: 50px;
align-self:center;
border-radius: 5px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-top: 15px;
  }
  `
const Botao = styled.div`
background: #D3D3D3;
border-radius: 5px;
width: 30%;
height: 50px;
margin-top: 30px;
align-self: center;
display: flex;
justify-content: center;
`
const Entrar = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
color:#FFFFFF;
margin-top: 12px;
`
const Cadastro = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 18px;
text-align: center;
color:#000000;
margin-top: 50px`