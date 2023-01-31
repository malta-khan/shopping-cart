const Cart = (props)=>{
    //shows title, price and image for all items in cart
    //shows input field to edit qty in cart
    //shows total amount (qty x price)
    //show button to remove item from cart.
    //click on title of item  refs to item details page.
    //shows a grand total on the end of page
    //shows a dummy order button.
    let cartItems = props.cartItems;
    let updateCart = props.updateCart;
    let deleteCartItem = props.deleteCartItem;
    let storeItems = props.storeItems;
    let completeOrder = props.completeOrder;
    let filterdItems = storeItems.map(item => {
        if(Object.keys(cartItems).includes(item.id)){
            item.qty = cartItems[item.id];
        }
        return item;
    }).filter(item=> item.qty !== undefined)
    let grandTotal = 0;
    let filterdItemsDetails = <div>You do not have anything in your cart</div>
    if(filterdItems.length > 0){
        filterdItemsDetails = filterdItems.map((item)=>{
            grandTotal += item.qty * item.price
            return <div key={item.id}>
                <a href={"shop/" + item.id}>{item.title}</a>
                <div>{item.details}</div>
                <div>${item.price} x {item.qty} = ${item.price*item.qty}</div>
                <div>
                <input type= "number" min="1" value={item.qty} onChange={(e) => {updateCart(item.id , e.target.value)}}></input>
                <button onClick={()=>{ deleteCartItem(item.id) }}>Remove Item</button>
                </div>
            </div>
        })
    }
    let orderSection = "";
    if(grandTotal > 0){
        orderSection = <div>
            <div>Total: {grandTotal}</div>
            <a href= "/order-completed" onClick={()=>{completeOrder()}}>Place order</a>
        </div>
    }

    return <div>{filterdItemsDetails} {orderSection}</div>
} 
export default Cart