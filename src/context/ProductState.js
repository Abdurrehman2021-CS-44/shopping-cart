import { useState } from "react";
import ProductContext from "./productContext";
import Product from "../components/Product";
import products from "../products";

const getInitialState = () => {
    let initialState = {};

    for (let i = 0; i < products.length; i++){
        initialState[i] = 0;
    }

    return initialState;
}

const ProductState = (props) => {
    const [cartElement, setCartElement] = useState(getInitialState());

    const addToCart = (itemId) => {
        setCartElement((prevValue) => {
            return {
                ...prevValue,
                [itemId]: prevValue[itemId]+1
            }
        })
    }

    const removeFromCart = (itemId) => {
        setCartElement((prevValue) => {
            return {
                ...prevValue,
                [itemId]: prevValue[itemId]-1
            }
        })
    }

    return (
        <>
            <ProductContext.Provider value={{cartElement, addToCart, removeFromCart}}>
                {props.children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductState;