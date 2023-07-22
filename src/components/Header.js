import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {

    const styling = {
        fontSize: "2rem",
        color: "white",
        marginLeft: "0",
        padding: "0",
        marginRight: "20px"
    }

    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 ms-auto text-light">Shop</span>
                    <ShoppingCartOutlinedIcon style={styling}/>
                </div>
            </nav>
        </>
    )
}

export default Header;