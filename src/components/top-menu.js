import '../App.scss';
import {useSelector} from "react-redux";

function TopMenu() {
    const count = useSelector(state => state.value)

    const countSpan = count > 0 ? <span>{count}</span> : null;

    const toggleCartDetail = () => {
        let cartDetail = document.getElementById('cart-detail');
        if (cartDetail.style.display == 'block') {
            cartDetail.style.display = 'none'
        } else {
            cartDetail.style.display = 'block'
        }
    }

    const toggleMenu = () => {
        let menu = document.getElementById("nav-links");
        let menuIcon = document.getElementsByClassName("menu-icon")[0]
        let closeIcon = document.getElementsByClassName("close-icon")[0]
        if (menu.style.display === 'none') {
            menu.style.display = 'flex'
            closeIcon.style.display = 'block'
            menuIcon.style.display = 'none'
        } else {
            menu.style.display = 'none';
            menuIcon.style.display = 'block'
        }
    }

    return (
        <div id="top-menu">
            <div id="logo-nav-container">
                <img src="./images/icon-menu.svg" className="menu-icon" onClick={toggleMenu} />
                <img id="logo" src="./images/logo.svg" alt="logo"/>

                <nav id="nav-links">
                    <img src="./images/icon-close.svg" className="close-icon" onClick={toggleMenu} />
                    <a href="/" className="body-text">Collection</a>
                    <a href="/" className="body-text">Men</a>
                    <a href="/" className="body-text">Women</a>
                    <a href="/" className="body-text">About</a>
                    <a href="/" className="body-text">Contact</a>
                </nav>
            </div>

            <div id="cart-avatar-container">
                <div id="card-container">
                    <img id="cart" src="./images/icon-cart.svg" alt="cart" onClick={toggleCartDetail} />
                    {countSpan}
                </div>
                <img id="avatar" src="./images/image-avatar.png" alt="avatar" />
            </div>
        </div>
    );
}

export default TopMenu;