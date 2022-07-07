import styled from "styled-components";
import topo from './assets/img/devbookimg.png';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Home() {

    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();

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