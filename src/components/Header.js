import { Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {

    const styling = {
        fontSize: "2rem",
        color: "white",
        marginLeft: "0",
        // padding: "0",
        marginRight: "20px"
    }

    const linkStyling = {
        textDecoration:"none",
        color: "white"
    }

    return (
        <>
            <nav className="navbar fixed-top bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 ms-auto text-light"><Link to="" style={linkStyling}>Shop</Link></span>
                    <Link to="/cart"><ShoppingCartOutlinedIcon style={styling}/></Link>
                </div>
            </nav>
        </>
    )
}

export default Header;