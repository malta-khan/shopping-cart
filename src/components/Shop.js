import ImageLoader from "./ImageLoader"

const Shop = (props)=>{
    //it receives items as props and shows them all.
    //Titles of items should be clickable, which takes user to item page
    let items = props.storeItems.map((item)=>{
        return (
        <a key={item.id} href={"/shop/" + item.id} className="flex border p-4 h-36 mb-2 rounded-md shadow-md bg-neutral-100 hover:bg-slate-200 focus:ring">
            
            <div className="w-1/4 mr-6">
                <ImageLoader className = "" name = {item.id} ></ImageLoader>
            </div>

            <div className="w-3/4">

                <div className="flex justify-between">
                    <h2 className=" text-xl font-semibold text-yellow-700">
                        {item.title}
                    </h2>
                    <div className="flex items-center">
                        <div className="w-6 h-6">
                        <ImageLoader  name = {"emerald"} ></ImageLoader> 
                        </div>
                        <div className="text-lg font-semibold font-mono text-neutral-800">{item.price}</div>
                    </div>
                </div>
                <div className="text-neutral-700">{item.details.slice(0,120)+"..."}</div> 
            </div>
        </a>
            )
    })
    return <div className="max-w-xl w-full px-4">
        <h1 className="text-3xl font-semibold text-yellow-700 text-center mt-10">Shop</h1>
        <h2 className="text-2xl text-neutral-600 mt-1 text-center mb-10">A collection of best selling minecraft mobs</h2>
        {items}
        </div>
} 
export default Shop