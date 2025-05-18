import React from 'react'
import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const DetailProduct = () => {

  const { id } = useParams();
  // variabile di stato che conterrà il prodotto
  const [singleProduct, setSingleProduct] = useState([]);

  const navigate = useNavigate();

  // funzione che recupera il prodotto
  const getSingleProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
        setSingleProduct(resp.data);
    })
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  useEffect(() => {
    getSingleProduct();
  }, [id]);

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
        <div className='row'>
          <div className='col-12 d-flex justify-content-between'>
            <button className='btn btn-outline-danger' onClick={() => {
              navigate(`/products/${parseInt(id) - 1}`)
            }} disabled={id == 1 ? true : false}>Indietro</button>
            <button className='btn btn-outline-danger' onClick={() => {
              navigate(`/products/${parseInt(id) + 1}`)
            }}>Avanti</button>
          </div>
        </div>
    </div>
  )
}

export default DetailProduct