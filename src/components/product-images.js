import '../App.scss';
import {useState} from "react";
import Modal from "react-modal";

function ProductImages() {
    const [imgIdx, setImgIdx] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);

    const thumbnailImgs = [1, 2, 3, 4].map(elem => {
        return <img onClick={() => setImgIdx(elem)} key={elem} className="thumbnail" src={`./images/image-product-${elem}-thumbnail.jpg`} alt={`thumnail-${elem}`} />
    })

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div id="product-images">
            <img id="product-img" src={`./images/image-product-${imgIdx}.jpg`} alt="product" onClick={openModal} />
            <div id="thumbnails-container">
                {thumbnailImgs}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <img src={`./images/image-product-${imgIdx}.jpg`} alt="product" />
                <div>
                    {thumbnailImgs}
                </div>
            </Modal>
        </div>
    );
}

export default ProductImages;