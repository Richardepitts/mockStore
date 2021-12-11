import React, { useState, useEffect } from 'react'
import './ProductCategory.css';
import Modal from "react-modal";
import axios from 'axios';

Modal.setAppElement("#root"); 
const ProductCategory = () => {
    let getRequest = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/powertools-spa/products/search?fields=products(code%2Cname%2Csummary%2Cconfigurable%2CconfiguratorType%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery&query=%3Arelevance%3AallCategories%3A1355&currentPage=2&pageSize=12&lang=en&curr=USD'

    const CallProductCategories = () => {
        axios.get(`https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/powertools-spa/products/search?fields=products(code%2Cname%2Csummary%2Cconfigurable%2CconfiguratorType%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery&query=%3Arelevance%3AallCategories%3A1355&currentPage=2&pageSize=12&lang=en&curr=USD`)
            .then(res => {
                // setProductCatalog(res.data);
                console.log(res.data);
                console.log(`here come facets`)
                console.log(res.data.facets)
                const object = res.data;
                // let arrInput = [];
                for (const property in object) {
                    if (property === 'categories') {
                        // console.log(`${Array.from(object[property].map(item => { console.log(item.name) })) }`);
                        // object[property].map(item => { arrInput.push(item.name) }) 
                        // setProductCategories(arrInput)
                    }
                }
            })
      .catch(function (error) { console.log(error)})}

    useEffect(() => {
        CallProductCategories()
    }, [])

    
    return (
        <div className='homeParent'>
            <div>Hey hey</div>
        </div>
        
    )
}

export default ProductCategory;