import styled, { css } from "styled-components";
import topo from './assets/img/devbookimg.png'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <ImgContainer>
                <img src={ topo } alt='DevBook-Store' />
            </ImgContainer>
            <Container>
                <Container main>
                    <h1>Login</h1>
                    <Form>
                        <input type='email' placeholder="E-mail" />
                        <input type='password' placeholder="Senha" />
                        <Botao type='submit'>Entrar</Botao>
                    </Form>
                </Container>
                <StyledLink to='/signup'>Primeira vez ? Cadastre-se!</StyledLink>
            </Container>
        </>
    );
}
const ImgContainer = styled.div`
    width: 100%;
    height: 86px;
    background-color: #9cd8e2;
    display: flex;
    justify-content: center;
  ;

    img {
        width: 360px;
        height: 86px;
    }

`
const Container = styled.div`
    width: 100%;
    height: 1500px;
    background-color: #353535;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    ${props => props.main && css`
        width: 70%;
        height: 1500px;
        background-color: #FFFFFF;
  `}

  h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        margin-top : 65px
    }
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
  
    input{
        width: 70%;
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

const Botao = styled.button`
    background: #353535;
    border-radius: 5px;
    border: none;
    width: 30%;
    height: 50px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color:#FFFFFF;
`

const StyledLink = styled(Link)`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #353535;
    margin-top: 50px
`