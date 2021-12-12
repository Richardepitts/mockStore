import React, { useState, useEffect } from 'react'
import './CategoryTile.css';
import Modal from "react-modal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



Modal.setAppElement("#root"); 
const CategoryTile = ({categoryName}) => {
    // const { product3 } = useParams();
    const [ product2, setProduct2 ] = useState('Product Name');

    useEffect(() => {
        // console.log(`here comes product from useParams`)
        // console.log(product3)
    }, [])

    
    return (
        <div className='categoryTileParent'>
            <div className='categoryTileContainer'>
                <div className='categoryTile'>
                    <button className='categoryTileButton'>
                        <Link className='categoryTileLink' to='./Product'>{categoryName}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoryTile;