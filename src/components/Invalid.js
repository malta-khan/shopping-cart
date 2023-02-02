import { Link } from "react-router-dom"

const Invalid = ()=>{
    return <div className="max-w-xl w-full  p-24 grow">
    <div className="text-2xl">404 page not found</div>
    <Link className="block w-36 bg-green-700 hover:bg-green-800 active:ring text-neutral-100 shadow p-2  mt-3" href="">Go to home page</Link>
</div>
} 
export default Invalid