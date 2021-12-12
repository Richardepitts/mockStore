/* eslint-disable */ 
import React, { useState, useEffect } from 'react'
import './Product.css';
import Modal from "react-modal";
import axios from 'axios';
import ProductTile from '../../R.Components/R.ProductTile/ProductTile';
import { useParams } from 'react-router-dom';

Modal.setAppElement("#root"); 
const Product = (props) => {
    let sad = 'sad'
    const urlPrefix = 'https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/';
    const { product } = useParams();
    const [ productName, setProductName ] = useState();
    const [ productsArr, setProductsArr ] = useState([]);

    useEffect(() => {
        console.log(`here comes product`)
        console.log(product)

        if (product === 'Power Drills')  { 
            axios.get(`https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/powertools-spa/products/search?fields=products(code%2Cname%2Csummary%2Cconfigurable%2CconfiguratorType%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery&query=%3Arelevance%3AallCategories%3A1360&pageSize=12&lang=en&curr=USD`)
            .then(res => {
                console.log(`here come Power Drills`)
                console.log(res.data);
                console.log(res.data.products)
                console.log(res.data.products[0].images[1].url);
                // console.log(category[0].images[1].url);
                setProductsArr(res.data.products)
                // console.log(`hey richy:`);
                // console.log(res.data.facets[indexer].values)
                // const object = res.data.facets[indexer].values;
                // for (const property in object) {
                //     if (property === 'categories') {}
                // }
            })
        .catch(function (error) { console.log(error)})



        }

        if (product === 'Power Drills')  { 
            
        }

        if (product === 'Power Drills')  { 
            
        }

        if (product === 'Power Drills')  { 
            
        }

        if (product === 'Power Drills')  { 
            
        }

        setProductName(product)
        axios.get(`https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/powertools-spa/products/search?fields=products(code%2Cname%2Csummary%2Cconfigurable%2CconfiguratorType%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery&query=%3Arelevance%3AallCategories%3A1360&pageSize=12&lang=en&curr=USD`)
            .then(res => {
                console.log(`HERE is the new Data!`)
                console.log(res.data);
            })
        .catch(function (error) { console.log(error)})
    }, [])

    return (
        <div className='productParent'>
            <div className='productTitleContainer'>
                <div className='productTitle'>
                    {product}
                </div>
            </div>
            
            <div className='productTilesContainerParent'>
                <div className='productTilesContainer'>
                    { productsArr.map((category, i) => (
                        <ProductTile key={i}  imgSrc={category.images[1].url} categoryName={category.name}></ProductTile>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Product;