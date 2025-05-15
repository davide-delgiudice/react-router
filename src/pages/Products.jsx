import { useState, useEffect } from 'react'
import axios from 'axios'

import MainNavbar from '../components/MainNavbar'

const Products = () => {

  const [products, setProducts] = useState()

  const getProduct = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((resp) =>{
        setProducts(resp.data);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
        <MainNavbar />
        <div className='container'>
          <div className="row">
            <div className='col-12'>
              <h1>La lista dei nostri prodotti</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-4">

            </div>
          </div>
        </div>
    </>
  )
}

export default Products