const Product = (props) => {
    return (
        <>
            <div className="card text-center" style={{width: "18rem", border: 0}}>
                <img src={props.image} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <hr />
                    <h5 className="card-title"> <b>{props.title}</b> </h5>
                    <p className="card-text">$ {props.price}</p>
                    <a href="#" className="btn btn-secondary">Add to Cart</a>
                </div>
            </div>
        </>
    )
}

export default Product;