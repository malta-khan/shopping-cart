import { useParams } from "react-router-dom"
import { useState } from "react";
const Item = (props)=>{
    //get item name from url, scan store for that item.
    //show message if item not exist, else show details
    //add to cart button. it gets a function from app.js to add items to cart.
    //if an item is already in cart, show a message.
    let itemUrl = useParams().item;
    let store = props.storeItems;
    let storeItem = store.find(item => item.id === itemUrl);
    let itemDetails;
    if(storeItem === undefined){
        itemDetails =  <div> Item Not Found</div>;
    } else{
        itemDetails =  <div>
        <div>{storeItem.title}</div>
        <div>{storeItem.details}</div>
        <div>{storeItem.price}</div>
    </div>
    }
    
    let cartInputs = "";
    let addToCart = props.addToCart;
    const [itemQty, setItemQty] = useState(1);
    if(storeItem !== undefined){
        cartInputs =<div>
        <input type= "number" min="1" value={itemQty} onChange = {(e)=>{setItemQty(e.target.value)}}></input>
        <button onClick={()=>{addToCart(storeItem.id, itemQty)}}>Add</button>
        </div>
    }

    let alreadyInCart = "";
    let qtyInCart = props.cartItems[itemUrl];
    if(qtyInCart !== undefined && qtyInCart > 0){
        alreadyInCart = <div>You have {qtyInCart} of this item in your cart.</div>
    }

    return <div>{itemDetails} {cartInputs} {alreadyInCart}</div>
}
export default Item