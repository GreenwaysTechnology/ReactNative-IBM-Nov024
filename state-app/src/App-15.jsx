import { produce } from "immer";
import React from "react";

class ProductsRestAPI extends React.Component {

    state = {
        products: [],
        error: null,
        isLoading: false
    }


    async componentDidMount() {
        //write api call - fetch
        try {
            const url = `https://api.escuelajs.co/api/v1/products`
            const response = await fetch(url)
            const data = await response.json()
            this.setState(produce(this.state, draft => {
                draft.products = data
                draft.isLoading = true
            }))
        }
        catch (err) {
            this.setState(produce(this.state, (draft) => {
                draft.error = err
                draft.isLoading = true
            }))
        }
    }
    render() {
        //show data,error,isLoading
        const { products, error, isLoading } = this.state
        //conditional rendering: how to use if...else..elseif
        if (error) {
            return <div>
                <h1>Error : {error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h1>Loading...</h1>
        } else {
            return <div>
                <h1>Products</h1>
                <hr />
                <div>
                    {
                        products.map(product => {
                            return <section key={product.id}>
                                <img src={product.category.image} height={200} width={200} />
                                <h1>{product.title} </h1>
                                <p>{product.description}</p>
                                <h5>{product.price}</h5>
                            </section>
                        })
                    }
                </div>
            </div>
        }
    }
}
export default function App() {
    return <ProductsRestAPI />
}