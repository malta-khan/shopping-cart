let ImageLoader = (props)=>{
  return <img src={require(`../images/${props.name}.png`)} />  
}

export default ImageLoader; 