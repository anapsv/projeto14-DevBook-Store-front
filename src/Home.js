import styled, { css } from "styled-components";
import topo from './assets/img/devbookimg.png';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useContext} from "react";
import axios from 'axios';
import UserContext from "./contexts/UserContext";

export default function Home() {

    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const {userInfo} = useContext(UserContext);

    // eslint-disable-next-line
    const [books, setBooks] = useState([
        {
            _id: "ObjectId",
            image: "https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UY218_.jpg",
            title: "Código Limpo: Habilidades Práticas do Agile Software",
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

    function addToCart(id){
        let selectedBook = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
        for(let i = 0; i < books.length; i++){
            if(id === books[i]._id){
                selectedBook.push(books[i]);
            }
        }
        let strSelectedBook = JSON.stringify(selectedBook);
        localStorage.setItem("cart", strSelectedBook);
        navigate('/cart');
    };

    console.log(userInfo);

    return (
        <>
            <Header>
                <h1>DevBooK</h1>
                <div>
                    <ion-icon onClick={ () => setDisplay(!display) } name="person-circle-outline"></ion-icon>
                    <SideBar display={ display }>

                        <ion-icon onClick={ () => setDisplay(!display) } name="close-outline"></ion-icon>
                        <h3>{ userInfo ? userInfo.name : ""}</h3>
                        <Link to={ '/signin' }>Faça login</Link>
                        <Link to={ '/signup' }>Cadastre-se</Link>
                        <p>Acompanhe seus pedidos</p>
                        <p>Alterar dados de cadastro</p>
                        <p>Fale conosco</p>
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
                    <BooksList>
                        { books.map((obj, index) => {
                            return (
                                <Book key={ index } id={ obj._id } >
                                    <Link to={ `/book/${obj._id}` }>
                                        <img src={ obj.image } alt="book" />
                                        <p>{ obj.title }, <span>{ obj.author }<br/> {obj.price}</span></p>
                                    </Link>
                                    <AddCart key={index} onClick={() => addToCart(obj._id)} >Comprar</AddCart>
                                </Book>
                            );
                        }) }
                    </BooksList>
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
    z-index: 1;

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
    height: 100%;
    background-color: #353535;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.main && css`
        width: 80%;
        height: 100%;
        background-color: #FFFFFF;
        padding: 0 20px 20px 20px;
  `}
`

const BooksList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500px) {
    align-items: flex-start;
  }
`

const Book = styled.div`
    width: 300px;
    height: 320px;
    display: flex;
    line-height: 25px;
    font-family: 'Raleway';
    border-bottom: 2px solid #c1c1c1;
    position: relative;
    
    img {
        height: 160px;
        border-width: 8px;
        border-style: solid;
        border-color: #ffffff;
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
    
    p{
        margin-top: 11px;
        width: 50%;
        text-align: center;
        font-size: 20px;
        color: #353535;
    }
    
    span {
        font-size: 16px;
        font-weight: 700;
        color: black;
    }
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-top: 10px;
    }
`

const AddCart = styled.button`
    width: 300px;
    height: 43px;
    border-radius: 5px;
    &hover{
        border-radius: 0px;
    }
    background-color: #353535;
    border: none;
    font-family: 'Raleway';
    font-size: 20px;
    color: white;
    position: absolute;
    bottom: 5px;
    left: 0px;
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
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 6% 0 6%;
    font-family: 'Raleway';

    h3 {
        font-size: 26px;
        margin-top: 20px;
    }

    a {
        font-size: 20px;
        text-decoration: none;
        margin-top: 40px;
        color: #353535;
    }

    p {
        font-size: 20px;
        text-decoration: none;
        margin-top: 40px;
        color: #353535;
    }

    ion-icon {
        position: relative;
        left: 130px;
        top: 15px;
    }
`