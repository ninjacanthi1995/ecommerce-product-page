import '../App.scss';

function TopMenu() {
    return (
        <div id="top-menu">
            <div id="logo-nav-container">
                <img id="logo" src="./images/logo.svg" alt="logo"/>

                <nav>
                    <a href="/" className="body-text">Collection</a>
                    <a href="/" className="body-text">Men</a>
                    <a href="/" className="body-text">Women</a>
                    <a href="/" className="body-text">About</a>
                    <a href="/" className="body-text">Contact</a>
                </nav>
            </div>

            <div id="cart-avatar-container">
                <img id="cart" src="./images/icon-cart.svg" alt="cart" />
                <img id="avatar" src="./images/image-avatar.png" alt="avatar" />
            </div>
        </div>
    );
}

export default TopMenu;