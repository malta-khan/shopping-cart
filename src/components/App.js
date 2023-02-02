import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from "./Footer";
import Home from './Home';
import Shop from './Shop'
import Cart from './Cart'
import Invalid from './Invalid';
import Item from "./Item";
import { useState, useEffect} from "react";
import OrderCompleted from "./OrderCompleted";
import minecraftItems from "./minecraftItems";

let App = ()=>{
    let storeItems = minecraftItems;
    
    let [cartItems, setCartItems] = useStickyState({}, "cartItems")

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
        setCartItems({...cartItems, [id]: undefined});
    }

    let completeOrder = ()=>{
        setCartItems({});
    }
    //https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
    function useStickyState(defaultValue, key) {
        const [value, setValue] = useState(() => {
          const stickyValue = window.localStorage.getItem(key);
          return stickyValue !== null
            ? JSON.parse(stickyValue)
            : defaultValue;
        });
        useEffect(() => {
          window.localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);
        return [value, setValue];
      }

    return <BrowserRouter>
    <Routes>
    <Route path="/shopping-cart/*" element = {<Navbar></Navbar>} ></Route>
    </Routes>
    <Routes>
    <Route path="/shopping-cart" element = {<Home></Home>} ></Route>
    <Route path="/shopping-cart/shop" element = {<Shop storeItems = {storeItems}></Shop>} ></Route>
    <Route path="/shopping-cart/my-cart" element = {<Cart storeItems = {storeItems} cartItems = {cartItems} updateCart = {updateCart} deleteCartItem = {deleteCartItem} completeOrder = {completeOrder}></Cart>} ></Route>
    <Route path="/shopping-cart/order-completed" element = {<OrderCompleted></OrderCompleted>}></Route>
    <Route path="/shopping-cart/shop/:item" element = {<Item storeItems = {storeItems} cartItems = {cartItems} addToCart = {addToCart}></Item>} ></Route>
    <Route path="/shopping-cart/*" element = {<Invalid></Invalid>} ></Route>
    </Routes>
    <Routes>
    <Route path="/shopping-cart/*" element = {<Footer></Footer>} ></Route>
    </Routes>
</BrowserRouter>
}

export default App