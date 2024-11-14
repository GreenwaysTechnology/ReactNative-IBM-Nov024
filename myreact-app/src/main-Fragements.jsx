// import React, { Fragment } from "react"
import { createRoot } from "react-dom/client"

const Blog = () => {
    // return <div>
    //     <h1>
    //         Blog Heading
    //     </h1>
    //     <p>This is blog post</p>
    // </div>
    // return <React.Fragment>
    //     <h1>
    //         Blog Heading
    //     </h1>
    //     <p>This is blog post</p>
    // </React.Fragment>
    // return <Fragment>
    //     <h1>
    //         Blog Heading
    //     </h1>
    //     <p>This is blog post</p>
    // </Fragment>
    return <>
        <h1>
            Blog Heading
        </h1>
        <p>This is blog post</p>
    </>
}


createRoot(document.getElementById('root')).render(<Blog />)


