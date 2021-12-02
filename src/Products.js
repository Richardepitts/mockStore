import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root"); 
function Products() {
    const [ productCatalog, setProductCatalog ] = useState({})
    const [ productNameTitle, setProductNameTitle ] = useState('Hey this is the product name')
    const [ productInfoModalIsOpen, setProductInfoModalIsOpen ] = useState(false)
    const [ productInfo, setProductInfo ] = useState({})
    const [ productCategories, setProductCategories ] = useState(['This', 'Will', 'Become', 'Categories'])
    const [ productSelection, setProductSelection ] = useState(['And', 'Products'])
    let address = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com';
    let siteUid = 'powertools';

    const makeModalDisappear = () => {
      setProductInfoModalIsOpen(false)
  }

    const CallProductSelection = () => {
      axios.get(`${address}/occ/v2/${siteUid}/products/3592865/`)
          .then(res => {
              // setProductSelection(res.data);
              console.log(res.data);
              const object = res.data;
              let arrInput = [];
              for (const property in object) {
                  if (property === 'categories') {
                      console.log(`${Array.from(object[property].map(item => { console.log(item.name) })) }`);
                      object[property].map(item => { arrInput.push(item.name) }) 
                      setProductSelection(arrInput)
                  }
              }
          })
    .catch(function (error) { console.log(error)})}

    const CallProductInfo = () => {
      axios.get(`${address}/occ/v2/${siteUid}/products/3755219/`)
          .then(res => {
            setProductInfoModalIsOpen(true)
            setProductInfo(res.data)
              console.log(res.data);
          })
    .catch(function (error) { console.log(error)})}

    const productSelectionFn = (x) => {
    }


  return (
    <div>
      <h1>The Product Selection Page</h1>
      <button className='actionButton' onClick={() => { CallProductSelection()} }>Get Products</button>
      <button className='actionButton' onClick={() => { CallProductInfo()} }>Get Product Info</button>
      <div className='containerParent'>
           { productSelection.map(x => (
               <div className='container' id={x} onClick={() => {productSelectionFn(x)} }>{x}</div>
           )
           ) }
      
      </div>
          <Modal isOpen={productInfoModalIsOpen} id="anonymousCartModal" onRequestClose={() => { makeModalDisappear() }}>
              <div className="anonymousCartContainer">
                  <h3>{productInfo.summary}</h3>
              </div>
              <div className="anonymousCartDataContainer">
                  <h1>Manufacturer: {productInfo.manufacturer}</h1>
                  <h1>Code: {productInfo.code}</h1>
                  {/* <h1 style={{transform: 'scale(0.5)'}}>Code: {productInfo.description}</h1> */}
                  {/* <h1>Price: {productInfo.price}</h1> */}
                  {/* <h1>{productInfo.summary}</h1>
                  <h1>{productInfo.summary}</h1> */}
                  </div>
          </Modal>
    </div>
  );
}

export default Products;
