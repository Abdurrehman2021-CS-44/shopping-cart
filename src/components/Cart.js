import Header from "./Header";
import CartElement from "./CartElement";
import ProductContext from "../context/productContext";
import { useContext } from "react";
import products from "../products";

const Cart = () => {
    const cart = useContext(ProductContext);

    console.log(cart);

    return (
        <>
            <Header />
            <div className="cart-elements">
                {
                    products.filter((product, index)=>{
                        return cart.cartElement[index] > 0 && cart.cartElement.hasOwnProperty(product.id);
                    }).map((product, index)=>{
                        return (
                            <CartElement
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                count={cart.cartElement[index]}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cart;