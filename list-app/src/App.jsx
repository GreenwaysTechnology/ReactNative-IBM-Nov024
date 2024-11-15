import { ProductList } from "./list/List";
import { PRODUCTS } from "./mock-data/products";

function App() {

    return <>
        <ProductList products={PRODUCTS} />
    </>
}
export default App;