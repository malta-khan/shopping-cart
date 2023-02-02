import { Link } from "react-router-dom";
import { useEffect } from "react";

let OrderCompleted = (props)=>{
    useEffect(() => {
        props.completeOrder();
      }, []);
    return <div className="max-w-xl w-full  p-10 grow">
    <div className="text-2xl">Your order has been received. Thank you.</div>
    <Link className="block w-36 bg-green-700 hover:bg-green-800 active:ring text-neutral-100 shadow p-2  mt-3" to="/">Go to Home page</Link>
</div>
}

export default OrderCompleted;