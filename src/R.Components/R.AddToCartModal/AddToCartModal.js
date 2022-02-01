import React, { useState, useEffect }  from 'react';
import Modal from "react-modal";
import xButton from '../../R.Assets/xButton.png';
import DecrementButton from '../../R.Assets/leftArrow.png';
import IncrementButton from '../../R.Assets/rightArrow.png';
import './AddToCartModal.css'
// import createTopicButton from './createTopicButton.png'
// import createTopicButtonDark from './createTopicButtonDark.png'

export const AddToCartModal = (props) => {
    const [totalPrice, setTotalPrice] = useState('$12')
    const [quantityOfItems, setQuantityOfItems] = useState(1)
    const [priceOfItem, setPriceOfItem] = useState(1)
    const prefix = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/';
    useEffect(() => {
        let finalPrice = props.priceForModal.replace('$', '').replace('.', '') / 100
        let finalString = '$' + finalPrice + '.00'
        setTotalPrice(finalString)
        setPriceOfItem(props.priceForModal.replace('$', '').replace('.', '') / 100)
        console.log(props.priceForModal.replace('$', '').replace('.', '') / 100)
        let viewCartElement = document.querySelector('.addToCardModalContentsViewCart')
    }, [])

const closeCartModal = () => {
    props.setAddToCartModalIsOpen(false)
}

const decrementClicked = () => {
    let quantity = Number(quantityOfItems);
    quantity -= 1
    setQuantityOfItems(quantity)
    let price = Number(priceOfItem)
    let final = quantity * price
    setTotalPrice(`$${final}.00`)
}

const incrementClicked = () => {
    let quantity = Number(quantityOfItems);
    quantity += 1
    setQuantityOfItems(quantity)
    let price = Number(priceOfItem)
    let final = quantity * price
    setTotalPrice(`$${final}.00`)
}

return (
<Modal
id="AddToCartModal"
isOpen={props.addToCartModalIsOpen}
style={{
overlay: {
    backgroundColor: "transparent",
    zIndex: 99
},
content: {
    color: "white",
    borderRadius: "23px",
    top: '28vh',
    left: '25%',
    width: "660px",
    zIndex: 99, 
    height: "230px",
    borderRadius: '12px',
    border: '2px solid black',
    overflowY: "hidden",
    overflowX: "hidden",
    boxShadow: "rgb(17 17 26 / 50%) 0px 8px 24px, rgb(17 17 26 / 40%) 0px 16px 56px, rgb(17 17 26 / 34%) 0px 24px 80px"
}
}}>
<div className="addToCartModalParent">
    <div className='addToCartModalCloseButtonContainer'><button onClick={() => closeCartModal()} className='addToCartModalCloseButton'></button></div>
    <div className='addToCartModalContentsParent'>
        <div className='addToCardModalContentsPictureContainer'>
            <img className='addToCardModalContentsPicture' src={prefix + props.imgSrcForModal}/>
        </div>
        <div className='addToCardModalContentsDialogueContainer'>
            <div className='addToCardModalContentsProductName'><strong>Product Name: &nbsp;</strong>{props.nameForModal}</div>
            <div className='addToCardModalContentsProductCode'><strong>Product Code: &nbsp;</strong>{props.codeForModal}</div>
            <div className='addToCardModalContentsProductPrice'><strong>Product Price: &nbsp;</strong>{props.priceForModal}</div>
            <div className='addToCardModalContentsViewCartContainer'>
                    <button className='addToCardModalContentsViewCart'>
                        <span className='addToCardModalViewCartButtonText'>View Cart</span>
                    </button>
                </div>
        </div>
        <div className='addToCardModalContentsCartContainer'>
            <div className='addToCardModalContentsQuantityContainer'>
                    <div className='addToCardModalContentsQuantitySubContainer'>
                        <div className='addToCardModalContentsQuantityDecrementButtonContainer'>
                            <div onClick={() => decrementClicked()} className='addToCardModalContentsQuantityDecrementButton'>
                                <img className='addToCardModalContentsQuantityDecrementButtonImg' src={DecrementButton}/>
                            </div>
                        </div>

                        <div className='addToCardModalContentsQuantityNumberContainer'>
                            <div className='addToCardModalContentsQuantityNumberSubContainer'>
                                <div className='addToCardModalContentsQuantityNumber'>{quantityOfItems}</div>
                            </div>
                        </div>

                        <div className='addToCardModalContentsQuantityIncrementButtonContainer'>
                            <div onClick={() => incrementClicked()} className='addToCardModalContentsQuantityIncrementButton'>
                                <img className='addToCardModalContentsQuantityIncrementButtonImg' src={IncrementButton}/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='addToCardModalContentsTotalContainer'>
                    <div className='addToCardModalContentsTotal'>
                        Total: {totalPrice}
                    </div>
                </div>
                <div className='addToCardModalContentsCheckoutContainer'>
                    <button className='addToCardModalCheckout'>
                        <span className='addToCardModalCheckoutButtonText'>Checkout</span>
                    </button>
                </div>
            </div>
    </div>

    <div className=''></div>
</div>
</Modal>
)}