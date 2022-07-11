import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./contexts/UserContext";
import { css } from "styled-components";

export default function Cart() {

    const cart = JSON.parse(localStorage.getItem('cart'));

    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const { userInfo } = useContext(UserContext);
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');

    const [nameCard, setNameCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    function saveShipmentInfo() {
        let aux = {name, phone, cep, address};
        let shipmentinfo = JSON.parse(localStorage.getItem('shipmentinfo')) ? JSON.parse(localStorage.getItem('shipmentinfo')) : [];
        shipmentinfo.push(aux);
        let strShipmentInfo = JSON.stringify(shipmentinfo);
        localStorage.setItem("shipmentinfo", strShipmentInfo);
    }

    function savePaymentInfo() {
        let aux = {nameCard, cardNumber, expirationDate, cvv};
        let paymentinfo = JSON.parse(localStorage.getItem('paymentinfo')) ? JSON.parse(localStorage.getItem('paymentinfo')) : [];
        paymentinfo.push(aux);
        let strPaymentInfo = JSON.stringify(paymentinfo);
        localStorage.setItem("paymentinfo", strPaymentInfo);
    }

    return (
        <>
            <Header>
                <h1>DevBooK</h1>
                <div>
                    <ion-icon onClick={ () => setDisplay(!display) } name="person-circle-outline"></ion-icon>
                    <SideBar display={ display }>

                        <ion-icon onClick={ () => setDisplay(!display) } name="close-outline"></ion-icon>
                        <h3>{ userInfo ? userInfo.name : "" }</h3>
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
            <Container>
                <Container main>
                    <BooksInCart>
                        <h1>Carrinho</h1>
                        { cart.map((obj, index) => {
                            return (
                                <Book key={ index } id={ obj._id } >
                                    <Link to={ `/book/${obj._id}` }>
                                        <img src={ obj.image } alt="book" />
                                        <p>{ obj.title }, <span>{ obj.author }</span></p>
                                        <p><span>{ obj.price }</span></p>
                                    </Link>
                                </Book>
                            );
                        }) }
                    </BooksInCart>
                    <ShipmentInfo>
                        <h2>Dados de Envio</h2>
                        <input type='name' placeholder="Nome Completo" value={name} onChange={e => setName(e.target.value)} />
                        <input type='phone' placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
                        <input type='cep' placeholder="Cep" value={cep} onChange={e => setCep(e.target.value)} />
                        <input type='address' placeholder="Endereço" value={address} onChange={e => setAddress(e.target.value)} />
                        <button type="submit" onClick={() => saveShipmentInfo()}>Salvar</button>
                    </ShipmentInfo>
                    <PaymentInfo>
                        <h3>Dados de Pagamento</h3>
                        <input type='nameCard' placeholder="Nome no cartão" value={nameCard} onChange={e => setNameCard(e.target.value)} />
                        <input type='cardNumber' placeholder="Número do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                        <input type='expirationDate' placeholder="MM/AA" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />
                        <input type='cvv' placeholder="CVV" value={cvv} onChange={e => setCvv(e.target.value)} />
                        <button type="submit" onClick={() => savePaymentInfo()}>Salvar</button>
                    </PaymentInfo>
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
const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #353535;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${props => props.main && css`
        width: 80%;
        height: 100%;
        background-color: #FFFFFF;
        padding: 0 20px 20px 20px;
  `}
`
const BooksInCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 500px) {
    align-items: flex-start;
  }

          
    h1 {
        font-family: 'Raleway';
        font-size: 25px;
        font-weight: 700;
        color: #353535;
    }
`

const Book = styled.div`
    width: 565px;
    height: 140px;
    display: flex;
    line-height: 25px;
    font-family: 'Raleway';
    border-bottom: 2px solid #c1c1c1;
    position: relative;
    @media (max-width: 500px) {
        width: 300px;
    }
    
    img {
        height: 60px;
        border-width: 8px;
        border-style: solid;
        border-color: #ffffff;
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        margin-right: 80px;
        @media (max-width: 500px) {
        margin-right: 10px;
        }
    }
    
    p{
        margin-top: 11px;
        width: 50%;
        text-align: center;
        font-size: 15px;
        color: #353535;
        margin-right: 55px;
        @media (max-width: 500px) {
        margin-right: 0px;
        }
    }
    
    span {
        font-size: 12px;
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

const ShipmentInfo = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 25px;
    font-family: 'Raleway';
    border-bottom: 2px solid #c1c1c1;
    @media (max-width: 500px) {
        width: 300px;
    }

    h2 {
        font-size: 25px;
        font-weight: 700;
        color: #353535;
        margin-bottom: 10px;
    }

    input {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 70%;
        height: 50px;
        padding-left: 10px;
        font-size: 18px;
    }

    button {
        width: 30%;
        height: 30px;
        border-radius: 5px;
        border: none;
        background-color: #353535;
        font-size: 20px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }
`
const PaymentInfo = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 25px;
    font-family: 'Raleway';
    border-bottom: 2px solid #c1c1c1;
    @media (max-width: 500px) {
        width: 300px;
    }

    h3 {
        font-size: 25px;
        font-weight: 700;
        color: #353535;
        margin-bottom: 10px;
    }

    input {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 70%;
        height: 50px;
        padding-left: 10px;
        font-size: 18px;
    }

    button {
        width: 30%;
        height: 30px;
        border-radius: 5px;
        border: none;
        background-color: #353535;
        font-size: 20px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }
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