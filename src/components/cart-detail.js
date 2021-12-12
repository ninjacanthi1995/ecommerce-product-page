import '../App.scss';
import {useDispatch, useSelector} from "react-redux";

function CartDetail() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.value)

    let detailContainer;
    if (count > 0) {
        detailContainer = <div className="detail-container">
            <div className="detail">
                <img className="product-img" src={"./images/image-product-1.jpg"}  alt="product"/>
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x <span>{count}</span></p>
                </div>
                <img className="delete-icon" alt="delete icon" src={"./images/icon-delete.svg"} onClick={() => dispatch({type: 'item/delete'})}/>
            </div>
            <button>Checkout</button>
        </div>
    } else {
        detailContainer = <div className="detail-container">
            <p>Your cart is empty</p>
        </div>
    }


    return (
        <div id="cart-detail">
            <div className="title">
                <p>Cart</p>
            </div>
            { detailContainer }
        </div>
    );
}

export default CartDetail;