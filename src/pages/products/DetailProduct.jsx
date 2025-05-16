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

  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct