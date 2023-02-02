import { Link } from "react-router-dom"

const Navbar = ()=>{
    return <nav className="bg-green-700 w-full  mb-5 flex justify-center">
        <div className="flex justify-between max-w-lg w-full font-bold text-slate-50 text-sm sm:text-lg">
        <h1 className="p-4 hover:bg-green-600 active:ring"><Link to="">Minecraft Shop</Link></h1>
        <div className="flex">
        <Link className="block p-4 hover:bg-green-600 active:ring" to="">Home</Link>
        <Link className="block p-4 hover:bg-green-600 active:ring" to="shop">Shop</Link>
        <Link className="block p-4 hover:bg-green-600 active:ring" to="my-cart">My Cart</Link>
        </div>
        </div>
    </nav>
} 
export default Navbar