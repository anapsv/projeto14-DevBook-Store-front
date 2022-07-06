import styled from "styled-components";
import topo from './assets/img/topo.png'

export default function Home() {
    return (
        <>
            <Header>
                <h1>DevBook-Store</h1>
                <p>|</p>
                <p>Login</p>
                <p>|</p>
                <p>Cadastre-se</p>
                <p>|</p>
                <ion-icon name="cart-outline"></ion-icon>
            </Header>
            <ImgContainer>
                <img src={ topo } alt='Os melhores livros de programação você encontra na DevBook-Store' />
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
    background-color: #969696;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
        margin-top: 10px;
        font-family: 'Ubuntu Condensed', sans-serif;
        font-weight: 700;
        color: #FFFFFF;
        font-size: 18px;
        margin-left: 5px;
    }

    p {
        margin-top: 10px;
        font-family: 'Ubuntu Mono', monospace;
        color: #FFFFFF;
        font-size: 15px;
    }

    ion-icon {
        margin-top: 10px;
        color: #FFFFFF;
        font-size: 16px;
        margin-left: 5px;
    }
`

const ImgContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 160px;
    background-color: #9cd8e2;

    img {
        width: 306px;
        height: 160px;
    }
`

const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #969696;
`