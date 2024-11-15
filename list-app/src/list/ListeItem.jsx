
const ListItem = props => {
    return <div key={props.product.id}>
        <h2>{props.product.title}</h2>
        <img src={props.product.image} height={150} width={150} />
        <h5>Category: {props.product.category} Price : $ {props.product.price}</h5>
        <p>{props.product.description} </p>
        <h3>Rating : {props.product.rating.rate} Total {props.product.rating.count}</h3>
    </div>
}
export { ListItem }