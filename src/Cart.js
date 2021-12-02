import React, { useState } from 'react'
import './App.css';
import Modal from "react-modal";
import axios from 'axios';

Modal.setAppElement("#root"); 
const Cart = () => {
    const [ anonymousCartData, setAnonymousCartData ] = useState({})
    const [ selectedCartData, setSelectedCartData ] = useState({})
    const [ cartSpecificData, setCartSpecifidData ] = useState({})
    const [ cartID, setCartID ] = useState(`00010003`)
    const [ allCarts, setAllCarts ] = useState( [1, 2, 3, 4] )
    const [ cartCreationModalIsOpen, setCartCreationModalIsOpen ] = useState(false)
    const [ cartSelectedModalIsOpen, setCartSelectedModalIsOpen ] = useState(false)
    const [ productCategories, setProductCategories ] = useState(['This', 'Will', 'Become', 'Categories'])
    const [ productSelection, setProductSelection ] = useState([''])
    let address = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com';
    let siteUid = 'powertools';
    let usertype = 'anil.gupta@rustic-hw.com';
    let userToken = 'KiUiQ0e7D5xlW1VyuxBxi8SaZw0';

    const makeModalDisappear = () => {
        setCartCreationModalIsOpen(false)
        setCartSelectedModalIsOpen(false)
    }

    const createAnonymousCart = () => {
        var headers = { 'Authorization': `Bearer ${userToken}`,'Content-Type': `application/x-www-form-urlencoded` }
        axios.post(`${address}/occ/v2/${siteUid}/users/anonymous/carts`, { 'headers' : headers })
          .then(res => {
            setCartCreationModalIsOpen(true)
              console.log(res.data)
              let obj = res.data
              setAnonymousCartData(obj)
              console.log(res.data.subTotal.currencyIso)
              const object = res.data;
              let arrInput = [];
            //   for (const property in object) {
            //       if (property === 'categories') {
            //           console.log(`${Array.from(object[property].map(item => { console.log(item.name) })) }`);
            //           object[property].map(item => { arrInput.push(item.name) }) 
            //           setProductSelection(arrInput)
            //       }
            //   }
          })
    .catch(function (error) { console.log(error)})}

    const createCartAxiosCall = () => {
        var headers = { 'Authorization': `Bearer ${userToken}`,'Content-Type': `application/x-www-form-urlencoded` }
        axios.post(`${address}/occ/v2/${siteUid}/users/${usertype}/carts`, { 'headers' : headers })
          .then(res => {
            setCartSelectedModalIsOpen(true)
              console.log(res.data)
              const object = res.data;
              let arrInput = [];
          })
    .catch(function (error) { console.log(error)})}

    const addToCartRegisteredB2B = () => {
        var headers = { 'Authorization': `Bearer ${userToken}` }
        axios.post(`${address}/occ/v2/${siteUid}/orgUsers/${usertype}/carts/${cartID}/entries`, 
        { "code": `3755219`, "quantity": 1 }, { 'headers' : headers })
          .then(res => {
            console.log(res.data)
            setCartSelectedModalIsOpen(true)
              const object = res.data;
              let arrInput = [];
          })
    .catch(function (error) { console.log(error)})}

    const getUserCarts = () => {
        var headers = { 'Authorization': `Bearer ${userToken}`}
        axios.get(`${address}/occ/v2/${siteUid}/users/${usertype}/carts`, { 'headers' : headers })
          .then(res => {
              console.log(res.data.carts)
              setAllCarts(res.data.carts)
          })
    .catch(function (error) { console.log(error)})}

    const productSelectionFn = () => {
      }

      const cartButtonSelected = (arg, i) => {
        setCartSelectedModalIsOpen(true)
        setCartID(arg)
        console.log(allCarts[i])
        setSelectedCartData(allCarts[i])
      }
    
    return (
        <div className='cartParent'>
            <h1>Welcome to the Cart Page</h1>
                <div className='buttonsContainer'>
                    <button className='actionButton' onClick={() => createAnonymousCart()}>Create an Guest cart</button>
                    <button className='actionButton' onClick={() => createCartAxiosCall()}>Create a Cart associated with Logged In User</button>
                    <button className='actionButton' onClick={() => addToCartRegisteredB2B()}>Add Item to User's Cart</button>
                    <button className='actionButton' onClick={() => getUserCarts()}>Get All the Logged in Users' Carts</button>
                </div>
            <div>
                <div className='containerParent'>
                    { allCarts.map((item, i) => (
                        <div className='container'><button onClick={() => cartButtonSelected(item['code'], i)}>{`Cart Codes: ${item['code']}`}</button></div>
                        )
                    ) }
                </div>
      
      </div>
      <Modal isOpen={cartCreationModalIsOpen} id="anonymousCartModal" onRequestClose={() => { makeModalDisappear() }}>
                <div className="anonymousCartContainer">
                    <h3>Anonymous Cart Successfully Created!</h3>
                </div>
                <div className="anonymousCartDataContainer">
                    {Object.entries(anonymousCartData).length === 0 ? console.log('all cats not available!') : 
                        <React.Fragment>
                            <h4>Total Items: {anonymousCartData.totalItems}</h4> 
                            <h4>Total Price: {anonymousCartData.totalPrice.formattedValue}</h4> 
                            <h4>Total Tax: {anonymousCartData.totalTax.formattedValue}</h4>  
                            <h4>Total Price with Tax: {anonymousCartData.totalPriceWithTax.formattedValue}</h4>  
                            <h4>Cart Creation Code: {anonymousCartData.code}</h4>
                            <h4>Currency Used: {anonymousCartData.subTotal.currencyIso}</h4>
                            <h4>Payment Type: {anonymousCartData.paymentType.displayName}</h4>
                        </React.Fragment>
                    }
                    </div>
            </Modal>
      <Modal isOpen={cartSelectedModalIsOpen} id="anonymousCartModal" onRequestClose={() => { makeModalDisappear() }}>
                <div className="anonymousCartContainer">
                    <h3>Selected Cart Code: {cartID}</h3>
                </div>
                <div className="anonymousCartDataContainer">
                    {Object.entries(selectedCartData).length === 0 ? console.log('sonw') : 
                        <React.Fragment>
                            <h4>Total Items: {selectedCartData.totalItems}</h4> 
                            <h4>Total Price: {selectedCartData.totalPrice.formattedValue}</h4> 
                            <h4>Total Tax: {selectedCartData.totalTax.formattedValue}</h4>  
                            <h4>Total Price with Tax: {selectedCartData.totalPriceWithTax.formattedValue}</h4>  
                            <h4>Cart Creation Code: {selectedCartData.code}</h4>
                            <h4>Currency Used: {selectedCartData.subTotal.currencyIso}</h4>
                            <h4>Payment Type: {selectedCartData.paymentType.displayName}</h4>
                        </React.Fragment>
                    }
                    </div>
            </Modal>
        </div>
        
    )
}

export default Cart;