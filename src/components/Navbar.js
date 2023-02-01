const Navbar = ()=>{
    return <nav className="bg-green-700 w-full  mb-5 flex justify-center">
        <div className="flex justify-between max-w-lg w-full font-bold text-slate-50 text-sm sm:text-lg">
        <h1 className="p-4 hover:bg-green-600 active:ring"><a href="/">Minecraft Shop</a></h1>
        <div className="flex">
        <a className="block p-4 hover:bg-green-600 active:ring" href="/">Home</a>
        <a className="block p-4 hover:bg-green-600 active:ring" href="/shop">Shop</a>
        <a className="block p-4 hover:bg-green-600 active:ring" href="/my-cart">My Cart</a>
        </div>
        </div>
    </nav>
} 
export default Navbar