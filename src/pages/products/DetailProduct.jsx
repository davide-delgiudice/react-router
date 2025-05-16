import React from 'react'
import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const DetailProduct = () => {

  const { id } = useParams();

  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct