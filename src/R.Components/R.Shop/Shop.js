import React, { useState, useEffect } from 'react'
import './Shop.css';
import Modal from "react-modal";
import axios from 'axios';
import { Link } from 'react-router-dom';

Modal.setAppElement("#root"); 
const Shop = ({ match }) => {
    let item = 'heyy'
    let getRequest = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/powertools-spa/products/search?fields=products(code%2Cname%2Csummary%2Cconfigurable%2CconfiguratorType%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery&query=%3Arelevance%3AallCategories%3A1355&currentPage=2&pageSize=12&lang=en&curr=USD'

    const CallProductCategories = () => {
        axios.get(`https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/powertools-spa/products/search?fields=products(code%2Cname%2Csummary%2Cconfigurable%2CconfiguratorType%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery&query=%3Arelevance%3AallCategories%3A1355&currentPage=2&pageSize=12&lang=en&curr=USD`)
            .then(res => {
                console.log(res.data);
                console.log(`here come facets`)
                console.log(res.data.facets)
                const object = res.data;
                for (const property in object) {
                    if (property === 'categories') {
                        // console.log(`${Array.from(object[property].map(item => { console.log(item.name) })) }`);
                        // object[property].map(item => { arrInput.push(item.name) }) 
                        // setProductCategories(arrInput)
                    }
                }
            })
      .catch(function (error) { console.log(error)})
    }

    useEffect(() => {
        CallProductCategories()
    }, [])

    
    return (
        <div className='homeParent'>
            <div className='homeParentContainer'>
                <div className='homeContainer1'>
                    <div className='homeCategoryMoniker1'>
                        <div className='monikerText1'>
                            <div className='shopCategoryTitle'>Category</div>
                            <button className='shopShopNowButton'><Link className='shopShopNowButton' to={`/Shop/Category`}>Shop Now</Link></button>
                        </div>
                    </div>
                </div>
                <div className='homeContainer2'>
                    <div className='homeCategoryMoniker2'>
                        <div className='monikerText2'>
                            <div className='shopCategoryTitle'>Brand</div>
                            <button className='shopShopNowButton'><Link className='shopShopNowButton' to={`/Shop/Brand`}>Shop Now</Link></button>
                        </div>
                    </div>
                </div>
                <div className='homeContainer3'>
                    <div className='homeCategoryMoniker3'>
                        <div className='monikerText3'>
                        <div className='shopCategoryTitle'>Price</div>
                        <button className='shopShopNowButton'><Link className='shopShopNowButton' to={`/Shop/Price`}>Shop Now</Link></button>
                        </div>
                    </div>
                </div>
                <div className='homeContainer4'>
                    <div className='homeCategoryMoniker4'>
                        <div className='monikerText4'>
                        <div className='shopCategoryTitle'>All</div>
                        <button className='shopShopNowButton'><Link className='shopShopNowButton' to={`/Shop/All`}>Shop Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Shop;