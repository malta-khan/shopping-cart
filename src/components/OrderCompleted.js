import { Link } from "react-router-dom";

let OrderCompleted = ()=>{
    return <div className="max-w-xl w-full  p-24 grow">
    <div className="text-2xl">Your order has been received. Thank you.</div>
    <div className="text-2xl text-red-600">NOTE: This is not a real website</div>
    <Link className="block w-36 bg-green-700 hover:bg-green-800 active:ring text-neutral-100 shadow p-2  mt-3" to="/shopping-cart/">Go to Home page</Link>
</div>
}

export default OrderCompleted;