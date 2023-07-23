import { useContext } from "react";
import ProductContext from "../context/productContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartElement = (props) => {
    const cart = useContext(ProductContext);

    const handleChange = (event) => {
        let newValue = parseInt(event.target.value);
        if (newValue => 1 && newValue <= 10){
            cart.addToCartWithValue(props.id, newValue)
        }
    }

    const styling ={
        fontSize: "0.9rem",
    }

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
                        }}><RemoveIcon style={styling} /></button>
                        <input type="text" value={cart.cartElement[props.id]} style={{border: "2px solid black"}} onChange={handleChange}/>
                        <button onClick={() => {
                            cart.addToCart(props.id);
                        }}><AddIcon style={styling} /></button>
                    </div>
                </div>
                <hr style={{width: "40%", margin: "0 auto"}}/>
            </div>
        </>
    )
};

export default CartElement;