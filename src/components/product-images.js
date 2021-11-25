import '../App.scss';
import {useState} from "react";

function ProductImages() {
    const [imgIdx, setImgIdx] = useState(1);

    const thumbnailImgs = [1, 2, 3, 4].map(elem => {
        return <img onClick={() => setImgIdx(elem)} key={elem} className="thumbnail" src={`./images/image-product-${elem}-thumbnail.jpg`} alt={`thumnail-${elem}`} />
    })

    return (
        <div id="product-images">
            <img id="product-img" src={`./images/image-product-${imgIdx}.jpg`} alt="product" />
            <div id="thumbnails-container">
                {thumbnailImgs}
            </div>
        </div>
    );
}

export default ProductImages;