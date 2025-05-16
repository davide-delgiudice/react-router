import React from 'react'
import { useParams } from 'react-router-dom'

const DetailProduct = () => {

  const { id } = useParams();

  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct