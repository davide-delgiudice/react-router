import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import axios from 'axios'

const Products = () => {

  const [products, setProducts] = useState([])

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
      <div className='container'>
        <div className="row">
          <div className='col-12'>
            <h1>La lista dei nostri prodotti</h1>
          </div>
          <div className="row">
            {products.map((product) => (
                <div className="col-12 col-md-6 col-lg-4 gy-2 mb-3" key={product.id}>
                  <div className="card d-flex align-items-center h-100">
                    <div className="p-2">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <p className='fw-bold'>{product.price} €</p>
                      <NavLink to={`/products/${product.id}`}>
                        <div className='btn btn-outline-danger'>Visualizza Prodotto</div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products