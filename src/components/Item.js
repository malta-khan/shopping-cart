import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageLoader from "./ImageLoader";
const Item = (props) => {
    //get item name from url, scan store for that item.
    //show message if item not exist, else show details
    //add to cart button. it gets a function from app.js to add items to cart.
    //if an item is already in cart, show a message.
    let itemUrl = useParams().item;
    let store = props.storeItems;
    let storeItem = store.find(item => item.id === itemUrl);
    let addToCart = props.addToCart;
    let [itemQty, setItemQty] = useState(1);
    let qtyInCart = props.cartItems[itemUrl];

    if (storeItem === undefined) {
        return <div className="max-w-xl w-full  p-24 grow">
            <div className="text-2xl">Invalid URL. Item not found</div>
            <Link className="block w-36 bg-green-700 hover:bg-green-800 active:ring text-neutral-100 shadow p-2  mt-3" to="/shopping-cart/shop">Go to shop page</Link>
        </div>
    }

    return (
        <div className="max-w-xl w-full px-4">

            <div className="border w-full h-96" >
                <ImageLoader name={storeItem.id}></ImageLoader>
            </div>

            <h2 className=" text-xl bg-yellow-700 text-neutral-50 p-2">{storeItem.title}</h2>

            <div className="flex items-center mt-10">
                <div className="w-6 h-6">
                    <ImageLoader name={"emerald"} ></ImageLoader>
                </div>
                <div className="text-lg font-semibold font-mono text-neutral-800">{storeItem.price} <span className="text-neutral-500">/per item</span></div>
            </div>

            <div className="flex flex-col border p-5 mt-1 rounded-md shadow-sm">
                <div className="flex">
                    <label className="font-semibold">Qty:
                        <input className="w-20 p-2 ml-3 border rounded-md border-neutral-800 focus:outline-green-600" type="number" min="1" value={itemQty} onChange={(e) => { setItemQty(e.target.value) }}></input>
                    </label>
                    <button className="bg-green-700 hover:bg-green-800 active:ring text-neutral-100 shadow-sm p-2 rounded-md ml-5" onClick={() => { addToCart(storeItem.id, itemQty) }}>Add to cart</button>
                </div>

                {qtyInCart !== undefined && qtyInCart > 0 &&
                    <div className="mt-1">You have {qtyInCart} of this item in your cart. 
                    <Link className="underline ml-1 text-green-700" to="/shopping-cart/my-cart">Go to Cart</Link>
                    </div>
                }
            </div>

            <h2 className=" text-xl font-semibold text-yellow-700 mt-10">Item Details</h2>
            <div className="text-neutral-800">{storeItem.details}</div>
        </div>
    )


}
export default Item