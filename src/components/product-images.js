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

    const nextImg = () => {
        imgIdx < 4 && setImgIdx(imgIdx + 1)
    }

    const previousImg = () => {
        imgIdx > 1 && setImgIdx(imgIdx - 1)
    }

    return (
        <div id="product-images">
            <img src="./images/icon-previous.svg" className="previous-icon" onClick={previousImg}/>
            <img id="product-img" src={`./images/image-product-${imgIdx}.jpg`} alt="product" onClick={openModal} />
            <img src="./images/icon-next.svg" className="next-icon" onClick={nextImg}/>

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
                <img src={"./images/icon-close.svg"} className="close-icon" onClick={closeModal} />
                <div className="swiper">
                    <img src={"./images/icon-previous.svg"} className="previous-icon" onClick={previousImg} />
                    <img src={`./images/image-product-${imgIdx}.jpg`} alt="product" className="product-img" />
                    <img src={"./images/icon-next.svg"} className="next-icon" onClick={nextImg} />
                </div>
                <div className="thumbnails-container">
                    {thumbnailImgs}
                </div>
            </Modal>
        </div>
    );
}

export default ProductImages;