import CartElement from "./CartElement";
import ProductContext from "../context/productContext";
import { useContext } from "react";
import products from "../products";
import { Link} from 'react-router-dom';

const Cart = () => {
    const cart = useContext(ProductContext);

    console.log(cart);

    const foundProducts = products.filter((product, index)=>{
        return cart.cartElement[index] > 0 && cart.cartElement.hasOwnProperty(product.id);
    })

    return (
        <>
            <div className="cart-elements">
                {
                    foundProducts.map((product)=>{
                        return (
                            <CartElement
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                count={cart.cartElement[product.id]}
                            />
                        )
                    })
                }
            </div>
            {
                foundProducts.length > 0 &&
                <>
                    <p className="total-price">Total Price: $ {foundProducts.map((product)=>{ return product.price*cart.cartElement[product.id]}).reduce((acc,price)=>{return acc+price})}</p>
                    <div className="btn-positioning">
                        <Link to="/"> <a className="btn btn-dark btn-lg">Continue Shopping</a> </Link>
                        <a className="btn btn-dark btn-lg">Checkout</a>
                    </div>
                </>
            }
        </>
    )
}

export default Cart;