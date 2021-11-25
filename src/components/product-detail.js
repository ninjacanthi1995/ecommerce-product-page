import '../App.scss';
import {useDispatch, useSelector} from "react-redux";

function ProductDetail() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.value)

    return (
        <div id="product-detail">
            <h3 className="heading-3">SNEAKER COMPANY</h3>
            <h1 className="heading-1">Fall Limited Edition Sneakers</h1>
            <p className="body-text">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

            <div id="price-container">
                <div id="price-discount">
                    <h2 className="heading-2" id="price">$125.00</h2>
                    <p className="body-text" id="discount">50%</p>
                </div>
                <p className="body-text" id="old-price">250.00</p>
            </div>

            <div id="buttons-container">
                <div id="add-remove-item">
                    <img src="./images/icon-minus.svg" alt="minus" onClick={() => dispatch({type: 'item/decremented'})} />
                    <p>{count}</p>
                    <img src="./images/icon-plus.svg" alt="plus" onClick={() => dispatch({type: 'item/incremented'})} />
                </div>
                <button>
                    <img src="./images/icon-cart-white.svg" alt="cart" />
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;