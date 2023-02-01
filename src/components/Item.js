import { useParams } from "react-router-dom"
import { useState } from "react";
import ImageLoader from "./ImageLoader";
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
        <ImageLoader name = {storeItem.id}></ImageLoader>
        <div className="flex flex-col">
            <h2 className=" text-xl font-semibold text-yellow-700">{storeItem.title}</h2>
            <div className="flex items-center">
                <div className="w-6 h-6">
                <ImageLoader  name = {"emerald"} ></ImageLoader> 
                </div>
                <div className="text-lg font-semibold font-mono text-neutral-800">{storeItem.price} <span className="text-neutral-500">/per item</span></div>
            </div>
        </div>
        {/* <div>{storeItem.details}</div> */}
    </div>
    }
    
    let cartInputs = "";
    let addToCart = props.addToCart;
    const [itemQty, setItemQty] = useState(1);
    if(storeItem !== undefined){
        cartInputs =<div className="flex">
        <label className="font-semibold">Qty:
        <input className="w-20 p-2 ml-3 border rounded-md border-neutral-800 focus:outline-green-600" type= "number" min="1" value={itemQty} onChange = {(e)=>{setItemQty(e.target.value)}}></input>
        </label>
        <button className="bg-yellow-700 text-neutral-100 shadow-sm p-2 rounded-md ml-5" onClick={()=>{addToCart(storeItem.id, itemQty)}}>Add to cart</button>
        </div>
    }

    let alreadyInCart = "";
    let qtyInCart = props.cartItems[itemUrl];
    if(qtyInCart !== undefined && qtyInCart > 0){
        alreadyInCart = <div>You have {qtyInCart} of this item in your cart.</div>
    }

    return <div className="max-w-xl w-full px-4">{itemDetails} {cartInputs} {alreadyInCart}</div>
}
export default Item