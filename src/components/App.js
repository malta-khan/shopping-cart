import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop'
import Cart from './Cart'
import Invalid from './Invalid';
import Item from "./Item";
import { useState } from "react";

let App = ()=>{
    let storeItems = [
        {
            id: "my-pen",
            title: "Pen",
            details: "lorem impsum",
            price: 100,
        },
        {
            id: "my-paper",
            title: "paper",
            details: "lorem impsum",
            price: 50,
        },
        {
            id: "my-mouse",
            title: "Mouse",
            details: "lorem impsum",
            price: 200,
        },
    ]
    let [cartItems, setCartItems] = useState({
        "my-pen": 10,
        "my-mouse": 15,
    });

    let addToCart = (id, qty)=>{
        //if item is not in the cart, add it
        //if item is already there, increase qty;
        qty = Math.abs(qty);
        if(qty === 0){
            qty = 1;
        }
        if(cartItems[id] !== undefined){
            qty += cartItems[id];
        }

        setCartItems({...cartItems, [id]: qty});
    }

    let updateCart = (id,qty)=>{
        qty = Math.abs(qty);
        if(qty === 0){
            qty = 1;
        }
        setCartItems({...cartItems, [id]: qty});
    }
    let deleteCartItem = (id)=>{
        console.log(id)
        let newCartItems = {...cartItems};
        delete newCartItems[id];
        setCartItems(newCartItems);
    }
    return <BrowserRouter>
    <Routes>
    <Route path="*" element = {<Navbar></Navbar>} ></Route>
    </Routes>
    <Routes>
    <Route path="/" element = {<Home></Home>} ></Route>
    <Route path="/shop" element = {<Shop storeItems = {storeItems}></Shop>} ></Route>
    <Route path="/my-cart" element = {<Cart storeItems = {storeItems} cartItems = {cartItems} updateCart = {updateCart} deleteCartItem = {deleteCartItem}></Cart>} ></Route>
    <Route path="/shop/:item" element = {<Item storeItems = {storeItems} cartItems = {cartItems} addToCart = {addToCart}></Item>} ></Route>
    <Route path="*" element = {<Invalid></Invalid>} ></Route>
    </Routes>
</BrowserRouter>
}

export default App