import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetCSS from './assets/ResetCSS';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Cart from './Cart';
import CheckOut from './CheckOut';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

export default function App() {

    const [userInfo, setUserInfo] = useState();

    return (
        <>
            <UserContext.Provider value={ { userInfo, setUserInfo } } >
                <ResetCSS />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/signin' element={ <Login /> } />
                        <Route path='/signup' element={ <SignUp /> } />
                        <Route path='/cart' element={ <Cart /> } />
                        <Route path='/checkout' element={ <CheckOut /> } />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}
