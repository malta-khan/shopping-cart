import ImageLoader from "./ImageLoader"

const Shop = (props)=>{
    //it receives items as props and shows them all.
    //Titles of items should be clickable, which takes user to item page
    let items = props.storeItems.map((item)=>{
        return (
        <a key={item.id} href={"/shop/" + item.id} className="flex border p-4 bg-neutral-300 focus:ring">
            
            <div className=" border w-1/4 mr-4 bg-neutral-500">
                {/* <ImageLoader className = "" name = {item.id} ></ImageLoader> */}
            </div>

            <div className="w-3/4">

                <div className="flex justify-between">
                    <h2>
                        {item.title}
                    </h2>
                    <div className="flex items-end">
                        <div className="w-6 h-6">
                        <ImageLoader  name = {"emerald"} ></ImageLoader> 
                        </div>
                        <div> 
                        {item.price}
                        </div>
                    </div>
                </div>

                <div>{item.details.slice(0,120)+"..."}</div> 
            </div>
        </a>
            )
    })
    return <div className="max-w-lg space-y-2">
        <h1>Shop Page</h1>
        {items}
        </div>
} 
export default Shop