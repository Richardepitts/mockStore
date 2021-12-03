import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Modal from "react-modal";

function Categories() {
    const [ productCatalog, setProductCatalog ] = useState({})
    const [ categoriesModalIsOpen, setCategoriesModalIsOpen ] = useState(false)
    const [ mysteryDataItem, setMysteryDataItem ] = useState([])
    const [ categoriesModalData, setCategoriesModalData ] = useState({})
    const [ categoryNameTitle, setCategoryNameTitle ] = useState('')
    const [ categoryNameBody, setCategoryNameBody ] = useState([])
    const [ productCategories, setProductCategories ] = useState(['This', 'Will', 'Become', 'Categories'])
    const [ productSelection, setProductSelection ] = useState(['And', 'Products'])
    let address = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com';
    let siteUid = 'powertools';

    const makeModalDisappear = () => {
      setCategoriesModalIsOpen(false)
  }

    const CallProductCategories = () => {
      axios.get(`${address}/occ/v2/${siteUid}/catalogs/powertoolsProductCatalog/Online`)
          .then(res => {
              setProductCatalog(res.data);
              console.log(res.data);
              const object = res.data;
              let arrInput = [];
              for (const property in object) {
                  if (property === 'categories') {
                      console.log(`${Array.from(object[property].map(item => { console.log(item.name) })) }`);
                      object[property].map(item => { arrInput.push(item.name) }) 
                      setProductCategories(arrInput)
                  }
              }
          })
    .catch(function (error) { console.log(error)})}

    const categorySelection = (categoryName) => {
      setCategoriesModalIsOpen(true)
      setCategoryNameTitle(categoryName)
      let indexer = '';
      let arr = [];
      if (categoryName === 'Open Catalogue') { indexer = '0'}
      if (categoryName === 'Brands') { indexer = '1'}
      if (categoryName === 'Type') { indexer = '2'}
      if (categoryName === 'Color') { indexer = '3'}
      let copy = productCatalog
      copy.categories[indexer]['subcategories'].map(item => ( arr.push(item.name) ) )
      setMysteryDataItem(arr)
      // let thingy = document.querySelector('.anonymousCartDataContainer')
      // setTimeout(() => alert(thingy), 2000);
      // arr.forEach((item, i) => {
      //   let newH8 = document.createElement('h8')
      //   newH8.classList.add('makeMeLittle')
      //   newH8.innerText = arr[i]
      //   if (thingy) { thingy.appendChild(newH8) }
      //       } )
  }

  return (
    <div>
      <h1>The Categories Page</h1>
      <button className="actionButton" onClick={() => { CallProductCategories()} }>Click to reveal Product Categories</button>
      <div className='containerParent'>
           { productCategories.map(x => (
               <div className='container' id={x} onClick={() => {categorySelection(x)} }>{x}</div>
           )
          ) }
      
      </div>
      <Modal isOpen={categoriesModalIsOpen} id="anonymousCartModal" onRequestClose={() => { makeModalDisappear() }}>
                <div className="anonymousCartContainer">
                    <h3>{categoryNameTitle}</h3>
                </div>
                <div className="anonymousCartDataContainer">
                    {mysteryDataItem.map((item, i) => (
                      <div className='itemName'>{item}</div>
                    ))}

                    
                    </div>
            </Modal>
    </div>
  );
}

export default Categories;
