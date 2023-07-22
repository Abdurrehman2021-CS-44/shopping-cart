import Header from "./Header";
import Product from "./Product";

const ProductListing = () => {
    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4">
                        <Product 
                            image="https://i.pinimg.com/236x/13/f4/47/13f447b12d02019d1c5feeeb6165fe80.jpg"
                            title="Camera"
                            price="500"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Product 
                            image="https://i.pinimg.com/236x/6d/ee/67/6dee67772c774bdf4cc14889b231cb14.jpg"
                            title="Laptop"
                            price="600"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Product 
                            image="https://i.pinimg.com/236x/0d/6f/28/0d6f285f86d696c90b7ac4122bf5d730.jpg"
                            title="Ipad"
                            price="400"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListing;