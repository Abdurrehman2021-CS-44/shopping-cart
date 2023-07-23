import Header from "./Header";
import CartElement from "./CartElement";
import ProductContext from "../context/productContext";
import { useContext } from "react";

const Cart = () => {
    const cart = useContext(ProductContext);

    console.log(cart);

    return (
        <>
            <Header />
            <div className="cart-elements">
                {
                    cart.cartElement.map((element, index)=>{
                        return (
                            <CartElement
                                image={element.image}
                                title={element.title}
                                price={element.price}
                                count={element.count}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cart;