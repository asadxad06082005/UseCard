import React, {useContext} from 'react'
import {AppContext} from './context'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import {Routes, Route} from 'react-router-dom'
import About from './components/About/About'
import {CartProvider} from "react-use-cart";
import styled from 'styled-components'
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    const {array} = useContext(AppContext)
    console.log(array);

    return (
        <CartProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/:id" element={<About/>}/>
            </Routes>
        </CartProvider>
    )
}

export default App