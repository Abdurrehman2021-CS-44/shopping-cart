import { useState } from "react";

const CartElement = (props) => {
    const [count, setCount] = useState(props.count);

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
                            setCount((prevValue) => {
                                if (prevValue !== 0){
                                    return prevValue - 1;
                                } else {
                                    return prevValue
                                }
                            });
                        }}>-</button><input type="text" value={count} /><button onClick={() => {
                            setCount((prevValue) => {
                                return prevValue + 1;
                            });
                        }}>+</button>

                    </div>
                </div>
                <hr style={{width: "40%", margin: "0 auto"}}/>
            </div>
        </>
    )
};

export default CartElement;