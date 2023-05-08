import { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Brandmenuhome from "./Brandmenuhome";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import Product from './Product';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const urlCategory = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/category/category_list/0";
  const [category, setCategorys] = useState([]);

  useEffect(() => {
    async function getCategorys() {
     await axios.get(urlCategory).then((result) =>{
      setCategorys(result.data);
     }) 
      
    }
    getCategorys();
  }, [category]);


  return (
<div className="container">
  <div className="row">
    <div className="col-sm-3">
      <Brandmenuhome />
    </div>
    <div className="col-sm-9">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="btn btn-light my-2 text-white"><Link to={'/product'}>Xem tất cả</Link></h5>
      </div>
      <div className="row justify-content-center">
     
  {category.map((product, index) => (
    <div key={index} className="col-sm-4 mb-4">
      <Product product={product} />
    </div>
  ))}

</div>

    </div>
  </div>
</div>

  );
};

export default ProductList;
