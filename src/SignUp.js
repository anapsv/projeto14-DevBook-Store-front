
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react'
import topo from './assets/img/devbookimg.png'
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export default function SignUp() {
    let navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("");
    const [confirmsenha, setConfirmsenha] = useState("")
    function cadastrar(){
        const promise = axios.post('https://localhost:5000/cadastro', {
            name: name,
            email: email,
            password: senha,
            confirmPassword:confirmsenha
        })
        promise.catch(tratarError)
        promise.then(tratarSucesso)
    }
    function tratarError(){
        alert("Preencha os campos corretamente")
       
    }
    function tratarSucesso(){
        navigate("/signin")
    }
    return (
        <>
                <ImgContainer>
                <img src={ topo } alt='DevBook-Store' />
            </ImgContainer>
            <Container>
                <Container main>
                    <h1>Cadastro</h1>
                    <Form>
                        <input type='nome' placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                        <input type='email' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type='password' placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                        <input type='confirmPassword' placeholder="Confirme a senha"value = {confirmsenha} onChange={e => setConfirmsenha(e.target.value)} />
                        <Botao type='submit' onClick={cadastrar}>Entrar</Botao>
                    </Form>
                </Container>
                <StyledLink to='/signin'>Já tem uma conta? Entre agora!</StyledLink>
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