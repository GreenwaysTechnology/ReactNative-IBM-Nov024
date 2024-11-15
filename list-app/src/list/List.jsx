import { ListItem } from "./ListeItem"

const ProductList = ({ products }) => <div>{
    products.map(product => <ListItem product={product} />)
}
</div>

export { ProductList }