import ProductListing from "./ProductListing";
import "../App.css";
import { BrowserRouter as Main, Routes, Route} from 'react-router-dom';
import Cart from "./Cart"
import ProductState from "../context/ProductState";
import Header from "./Header";

const App = () => {
    return (<>
        <ProductState>
        <Main>
            <Header />
            <Routes>
                <Route exact path="/" element={<ProductListing />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </Main>
        </ProductState>
    </>)
}

export default App;