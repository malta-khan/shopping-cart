let ImageLoader = (props)=>{
  return <img className = "object-scale-down h-full w-full" src={require(`../images/${props.name}.png`)} />  
}

export default ImageLoader; 