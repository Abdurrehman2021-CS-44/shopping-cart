import { useContext, useState } from "react";
import ProductContext from "../context/productContext";

const Product = (props) => {
    const cart = useContext(ProductContext)

    const handleClick = (e) => {
        console.log("Added to Cart")
        cart.addToCart(props.id);
        e.preventDefault();
    }

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
                    <a href="#" className="btn btn-outline-dark" onClick={handleClick}>Add to Cart {cart.cartElement[props.id] > 0 && `(${cart.cartElement[props.id]})`}</a>
                </div>
            </div>
        </>
    )
}

export default Product;