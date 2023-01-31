const Shop = (props)=>{
    //it receives items as props and shows them all.
    //Titles of items should be clickable, which takes user to item page
    let items = props.storeItems.map((item)=>{
        return <div key={item.id}>
            <a href={"/shop/" + item.id}>{item.title}</a>
            <p>{item.price}</p>
            <p>{item.details}</p>
        </div>
    })
    return <div>
        <h1>Shop Page</h1>
        {items}
        </div>
} 
export default Shop