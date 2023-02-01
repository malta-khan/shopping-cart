let ImageLoader = (props)=>{
  return <img className = "object-scale-down h-full w-full" alt = {props.name} src={require(`../images/${props.name}.png`)} />  
}

export default ImageLoader; 