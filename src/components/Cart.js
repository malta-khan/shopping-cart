import ImageLoader from "./ImageLoader";
import { Link } from "react-router-dom";
const Cart = (props) => {
    //shows title, price and image for all items in cart
    //shows input field to edit qty in cart
    //shows total amount (qty x price)
    //show button to remove item from cart.
    //click on title of item  refs to item details page.
    //shows a grand total on the end of page
    //shows a dummy order button.
    //show title, short description, price per item, qty in cart and ammount
    let grandTotal = 0;
    let completeOrder = props.completeOrder;
    let updateCart = props.updateCart;
    let deleteCartItem = props.deleteCartItem;

    let cartItems = props.cartItems;
    let storeItems = props.storeItems;
    let filterdItems = storeItems.map(item => {
        if (Object.keys(cartItems).includes(item.id)) {
            item.qty = cartItems[item.id];
        }
        return item;
    }).filter(item => item.qty !== undefined)


    if (filterdItems.length === 0) {
        return <div className="max-w-xl w-full  p-24 grow">
            <div className="text-2xl">There are no items in your cart</div>
            <Link className="block w-36 bg-green-700 hover:bg-green-800 active:ring text-neutral-100 shadow p-2  mt-3" to="/shopping-cart/shop">Go to shop page</Link>
        </div>
    }

    filterdItems = filterdItems.map((item) => {

        grandTotal += item.qty * item.price
        return (
            <div className="flex flex-col border p-4  mb-4 rounded-md shadow-md bg-neutral-100 " key = {item.id}>
                <div className="flex">
                    <div className="w-3/4 flex flex-col">
                        <Link to={"/shopping-cart/shop/" + item.id}><h2 className=" text-xl font-semibold text-yellow-700">{item.title}</h2></Link>
                        <div className="text-neutral-700">{item.details.slice(0, 120) + "..."}</div>
                    </div>
                    <div className="w-1/4 ml-6 flex flex-col justify-between">
                        <ImageLoader className="" name={item.id} ></ImageLoader>
                    </div>
                </div>
                <div className="flex w-full justify-between mt-10">
                        <label>Qty:
                            <input className="w-20 p-1 ml-3 mr-5 border rounded-md border-neutral-800 focus:outline-green-600" type="number" min="1" value={item.qty} onChange={(e) => { updateCart(item.id, e.target.value) }}></input>
                        </label>
                        <button className="text-center font-semibold text-yellow-700 hover:text-yellow-500 focus:text-red-500" onClick={() => { deleteCartItem(item.id) }}>Remove from cart</button>
                </div>
                <div className="flex items-center font-semibold w-full justify-center mt-3 bg-neutral-200 rounded-md p-2">
                            <div>{item.qty} qty x {item.price} per item =</div>
                            <div className="w-6 h-6"><ImageLoader name={"emerald"} ></ImageLoader></div>
                            <div className="text-lg text-neutral-800">{item.price * item.qty} Total</div>
                </div> 
                
            </div>
        )
    })

    return (
        <div className="max-w-xl w-full px-4 grow">
        <h2 className="text-2xl text-neutral-600 mt-1 text-center mb-10">Items in your cart</h2>
            {filterdItems}
            <div className="flex flex-col items-end">
                <div className="flex">
                <div className="text-2xl font-semibold text-neutral-700">Total: {grandTotal}</div>
                <div className="w-8 h-8"><ImageLoader name={"emerald"} ></ImageLoader></div>
                </div>
                <Link  className="bg-yellow-700 text-slate-50 p-2 rounded-md shadow mt-2 block w-48 text-center font-semibold" to="/shopping-cart/order-completed" onClick={() => { completeOrder() }}>Complete order</Link>
            </div>
        </div>
    )
}
export default Cart