import styled, { css } from "styled-components";
import topo from './assets/img/devbookimg.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Home() {

    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();

    // eslint-disable-next-line
    const [books, setBooks] = useState([
        {
            image: "https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UY218_.jpg",
            title: "código limpo: Habilidades Práticas do Agile Software",
            author: "Robert Cecil Martin",
            price: "R$ 70,00"
        }
    ]);

    useEffect(() => {
        const promise = axios.get('https://devbook-store.herokuapp.com/');
        promise
        .then((res) => {
            setBooks([]);
            setBooks([...res.data]);
        })
        .catch((err) => console.log('Erro ao obter produtos', err));
    }, []);

    return (
        <>
            <Header>
                <h1>DevBooK</h1>
                <div>
                    <ion-icon onClick={ () => setDisplay(!display) } name="person-circle-outline"></ion-icon>
                    <SideBar display={ display }>

                        <p>nome do usuário</p>
                        <ion-icon onClick={ () => setDisplay(!display) } name="close-outline"></ion-icon>

                    </SideBar>
                    <ion-icon name="pause-outline" ></ion-icon>
                    <ion-icon onClick={ () => navigate('/cart') } name="cart-outline"></ion-icon>
                </div>
            </Header>
            <ImgContainer>
                <img src={ topo } alt='Os melhores livros de programação, você encontra na DevBook' />
            </ImgContainer>
            <Container>
                <Container main >
                    <Container line></Container>
                </Container>
            </Container>
        </>
    );
}

const Header = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    background-color: #c1c1c1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0px 0px 5px 5px;

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
    margin-top: 60px;
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
    height: 1500px;
    background-color: #353535;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.main && css`
        width: 70%;
        height: 1500px;
        background-color: #FFFFFF;
  `}

  ${props => props.line && css`
        width: 1px;
        height: 1500px;
        background-color: #c1c1c1;
        margin-top: 30px;
  `}
`
const SideBar = styled.div`
    background-color: #9b9b9b;
    position: fixed;
    right: 0;
    top: 0vh;
    width: 300px;
    height: 90vh;
    z-index: 2;
    border-radius: 10px 0 0 10px;
    display: ${({ display }) => display ? "flex" : "none"};
    padding: 6%;

    ion-icon {
        margin-left: 140px;
        margin-top: 0px;
    }
`