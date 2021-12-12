/* eslint-disable */
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function Store() {
    const [ productCatalog, setProductCatalog ] = useState({})
    const [ productCategories, setProductCategories ] = useState(['This', 'Will', 'Become', 'Categories'])
    const [ productSelection, setProductSelection ] = useState(['And', 'Products'])
    let address = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com';
    let siteUid = 'powertools';

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

      const categorySelection = (categoryName) => {
          let indexer = '';
          let arr = [];
          if (categoryName === 'Open Catalogue') { indexer = '0'}
          if (categoryName === 'Brands') { indexer = '1'}
          if (categoryName === 'Type') { indexer = '2'}
          if (categoryName === 'Color') { indexer = '3'}
          let copy = productCatalog
        //   console.log(copy.categories[indexer])
        //   console.log(copy.categories[indexer]['subcategories'])
        //   console.log(copy.categories[indexer]['subcategories'].map(item => (item.name) ))
          copy.categories[indexer]['subcategories'].map(item => ( arr.push(item.name) ) )
          let thingy = document.getElementById(categoryName)
          arr.forEach((item, i) => {
            let newH8 = document.createElement('h8')
            newH8.classList.add('makeMeLittle')
            newH8.innerText = arr[i]
            thingy.appendChild(newH8)
                } )
      }

      const productSelectionFn = () => {
        //   let indexer = '';
        //   let arr = [];
        //   if (categoryName === 'Open Catalogue') { indexer = '0'}
        //   if (categoryName === 'Brands') { indexer = '1'}
        //   if (categoryName === 'Type') { indexer = '2'}
        //   if (categoryName === 'Color') { indexer = '3'}
        //   let copy = productCatalog
        //   console.log(copy.categories[indexer])
        //   console.log(copy.categories[indexer]['subcategories'])
        //   console.log(copy.categories[indexer]['subcategories'].map(item => (item.name) ))
        //   copy.categories[indexer]['subcategories'].map(item => ( arr.push(item.name) ) )
        //   let thingy = document.getElementById(categoryName)
        //   arr.forEach((item, i) => {
        //     let newH8 = document.createElement('h8')
        //     newH8.classList.add('makeMeLittle')
        //     newH8.innerText = arr[i]
        //     thingy.appendChild(newH8)
        //         } )
      }


  return (
      <React.Fragment>
    <div className="Store">
      <h3>Here is the store!</h3>
      <button onClick={() => { CallProductCategories()} }>Get Product Categories</button>
      <div>
           { productCategories.map(x => (
               <div className='container' id={x} onClick={() => {categorySelection(x)} }>{x}</div>
           )
           ) }
      
      </div>
      <button onClick={() => { CallProductSelection()} }>Get Products</button>
      <div>
           { productSelection.map(x => (
               <div className='container' id={x} onClick={() => {productSelectionFn(x)} }>{x}</div>
           )
           ) }
      
      </div>
    </div>
    </React.Fragment>
  );
}

export default Store;
