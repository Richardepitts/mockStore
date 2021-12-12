import React, { useState, useEffect }  from 'react';
import Modal from "react-modal";
import xButton from '../../R.Assets/xButton.png';
import DecrementButton from '../../R.Assets/DecrementButton.png';
import IncrementButton from '../../R.Assets/IncrementButton.png';
import './AddToCartModal.css'
// import createTopicButton from './createTopicButton.png'
// import createTopicButtonDark from './createTopicButtonDark.png'

export const AddToCartModal = (props) => {
    const prefix = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/';
    useEffect(() => {
    }, [])

const closeCartModal = () => {
    props.setAddToCartModalIsOpen(false)
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
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
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

            {/* <div className='addToCardModalContentsProductTotal'></div> */}
            {/* <img className='addToCardModalDialoguePicture' src={prefix + props.imgSrcForModal}/> */}
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
                            <div className='addToCardModalContentsQuantityDecrementButton'>
                                <img className='addToCardModalContentsQuantityDecrementButtonImg' src={DecrementButton}/>
                            </div>
                        </div>

                        <div className='addToCardModalContentsQuantityNumberContainer'>
                            <div className='addToCardModalContentsQuantityNumberSubContainer'>
                                <div className='addToCardModalContentsQuantityNumber'>1</div>
                            </div>
                        </div>

                        <div className='addToCardModalContentsQuantityIncrementButtonContainer'>
                            <div className='addToCardModalContentsQuantityIncrementButton'>
                                <img className='addToCardModalContentsQuantityIncrementButtonImg' src={IncrementButton}/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='addToCardModalContentsTotalContainer'>
                    <div className='addToCardModalContentsTotal'>
                        Total:
                    </div>
                </div>
                {/* <div className='addToCardModalContentsViewCartContainer'>
                    <button className='addToCardModalContentsViewCart'>
                        <span className='addToCardModalViewCartButtonText'>View Cart</span>
                    </button>
                </div> */}
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