
const Home = ()=>{
    return<div className="max-w-xl w-full px-4 grow">
    <div className="flex  flex-col border p-4  mb-2 rounded-md shadow bg-neutral-100">
    <img src={require(`../images/home.jpg`)}></img>
    <div className="text-2xl mt-5">Welcome to minecraft mob shop</div>
    <a className="self-end w-36 bg-green-700 hover:bg-green-800 active:ring text-neutral-100 shadow p-2 rounded-sm  mt-3" href="/shop">Go to shop page</a>
    </div>    
</div>
} 
export default Home