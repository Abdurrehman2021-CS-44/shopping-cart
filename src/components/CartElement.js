import { useContext } from "react";
import ProductContext from "../context/productContext";

const CartElement = (props) => {
    const cart = useContext(ProductContext);

    return (
        <>
            <div className="element">
                <div className="cart-element">
                    <div className="cart-image-wrapper">
                        <img src={props.image} />
                    </div>
                    <h1> <b>{props.title}</b> </h1>
                    <h4>Price: $ {props.price}</h4>
                    <div className="input-elements">
                        <button onClick={() => {
                            cart.removeFromCart(props.id);
                        }}>-</button>
                        <input type="text" value={cart.cartElement[props.id]} />
                        <button onClick={() => {
                            cart.addToCart(props.id);
                        }}>+</button>
                    </div>
                </div>
                <hr style={{width: "40%", margin: "0 auto"}}/>
            </div>
        </>
    )
};

export default CartElement;