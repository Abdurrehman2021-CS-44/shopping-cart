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
    const [cartElement, setCartElement] = useState(getInitialState);

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

    const addToCartWithValue = (itemId, value) => {
        setCartElement((prevValue) => {
            return {
                ...prevValue,
                [itemId]: value > 0 ? value : 0
            }
        })
    }

    const reinitializeCart = () => {
        setCartElement(getInitialState)
    }

    return (
        <>
            <ProductContext.Provider value={{cartElement, addToCart, removeFromCart, reinitializeCart, addToCartWithValue}}>
                {props.children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductState;