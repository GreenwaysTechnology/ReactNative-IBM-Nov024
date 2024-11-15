
const ProductList = ({ products }) => {
    return <div>
        {
            products.map(product => {
                return <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image} height={150} width={150} />
                    <h5>Category: {product.category} Price : $ {product.price}</h5>
                    <p>{product.description} </p>
                    <h3>Rating : {product.rating.rate} Total {product.rating.count}</h3>
                </div>
            })
        }
    </div>
}
export { ProductList }