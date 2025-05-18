import React from 'react'
import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const DetailProduct = () => {

  const { id } = useParams();
  // variabile di stato che conterrà il prodotto
  const [singleProduct, setSingleProduct] = useState([]);

  // funzione che recupera il prodotto
  const getSingleProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
        setSingleProduct(resp.data);
    })
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className='container'>
        <div className="row">
          <div className='col-12'>
            <img className='single-img' src={singleProduct.image} alt="" />
            <h1>{singleProduct.title}</h1>
            <p>{singleProduct.category}</p>
            <p>{singleProduct.description}</p>
            <p>{singleProduct.price}</p>
          </div>
        </div>
    </div>
  )
}

export default DetailProduct