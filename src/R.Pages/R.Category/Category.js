import React, { useState, useEffect } from 'react'
import './Category.css';
import Modal from "react-modal";
import axios from 'axios';
import CategoryTile from '../../R.Components/R.CategoryTile/CategoryTile';
import { useParams } from 'react-router-dom';

Modal.setAppElement("#root"); 
const Category = () => {
    const { category } = useParams();
    const [ categoryName, setCategoryName ] = useState();
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        console.log(`here comes product from useParams`)
        console.log(category)
        setCategoryName(category)

        axios.get(`https://api.c8ck9e9y0x-rsivideot1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/powertools-spa/products/search?fields=products(code%2Cname%2Csummary%2Cconfigurable%2CconfiguratorType%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions)%2Cfacets%2Cbreadcrumbs%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery&query=%3Arelevance%3AallCategories%3A1355&currentPage=2&pageSize=12&lang=en&curr=USD`)
            .then(res => {
                console.log(res.data);
                console.log(`here come facets222`)
                console.log(res.data.facets)
                console.log(res.data.facets[0])
                console.log(res.data.facets[0].values)
                let indexer = -1;
                if (category === 'Category') { indexer = 0 }
                if (category === 'Brand') { indexer = 1 }
                if (category === 'Price') { indexer = 2 }
                if (category === 'All') { indexer = 3 }
                setCategories(res.data.facets[indexer].values)
                // const object = res.data.facets[indexer].values;
                // for (const property in object) {
                //     if (property === 'categories') {}
                // }
            })
        .catch(function (error) { console.log(error)})
    }, [])

    return (
        <div className='categoryParent'>
            <div className='categoryMainTitleContainer'>
                <div className='categoryTitle'>
                    {category}
                </div>
            </div>
            
            <div className='categoryTilesContainerParent'>
                <div className='categoryTilesContainer'>
                    { categories.map((category) => (
                        <div className='categoryTileComponentContainer'>
                            <CategoryTile categoryName={category.name}></CategoryTile>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Category;