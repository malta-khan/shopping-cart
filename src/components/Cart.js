import ImageLoader from "./ImageLoader";
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
        return <div>You do not have anything in your cart</div>
    }

    filterdItems = filterdItems.map((item) => {

        grandTotal += item.qty * item.price

        return <div key={item.id} className="flex border p-4  mb-4 rounded-md shadow-md bg-neutral-100">

            <div className="w-3/4 flex flex-col">
                <div className="flex justify-between">
                    <a href={"/shop/" + item.id}>
                        <h2 className=" text-xl font-semibold text-yellow-700">{item.title}</h2>
                    </a>
                </div>
                <div className="text-neutral-700">{item.details.slice(0, 120) + "..."}</div>

                <div className="flex mt-2 ">
                    <div className="flex items-center ">
                        <label>
                            Qty:
                            <input className="w-20 p-2 ml-3 border rounded-md border-neutral-800 focus:outline-green-600" type="number" min="1" value={item.qty} onChange={(e) => { updateCart(item.id, e.target.value) }}></input>
                        </label>
                    </div>
                </div>

                <div className="flex justify-between mt-5  p-2">
                    <div className="flex items-center ">
                        <div className="w-6 h-6">
                            <ImageLoader name={"emerald"} ></ImageLoader>
                        </div>
                        <div className="text-lg text-neutral-800">{item.price} per item</div>
                    </div>

                    <div className="flex items-center font-semibold">
                        <div>{item.qty} x {item.price} =</div>
                        <div className="flex items-center ml-2">
                            <div className="w-6 h-6">
                                <ImageLoader name={"emerald"} ></ImageLoader>
                            </div>
                            <div className="text-lg text-neutral-800">{item.price * item.qty} Total</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 ml-6 flex flex-col justify-between">
            <div >
                <ImageLoader className="" name={item.id} ></ImageLoader>
            </div>
                <button className="p-1 border border-yellow-700 rounded-md shadow text-center font-semibold bg-yellow-200 hover:bg-yellow-400 focus:ring" onClick={() => { deleteCartItem(item.id) }}>Cancel</button>
            </div>
        </div>

    })

    return (
        <div className="max-w-xl w-full px-4">
            {filterdItems}
            <div>
                <div>Total: {grandTotal}</div>
                <a href="/order-completed" onClick={() => { completeOrder() }}>Place order</a>
            </div>
        </div>
    )
}
export default Cart