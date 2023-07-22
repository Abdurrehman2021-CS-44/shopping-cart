const Product = (props) => {
    return (
        <>
            <div className="card text-center" style={{border: "0"}}>
                <div className="image-wrapper">
                    <img src={props.image} alt="..."/>
                </div>
                <div className="card-body">
                    <hr />
                    <h5 className="card-title"> <b>{props.title}</b> </h5>
                    <p className="card-text">$ {props.price}</p>
                    <a href="#" className="btn btn-outline-secondary">Add to Cart</a>
                </div>
            </div>
        </>
    )
}

export default Product;