import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
// import './style.css';
const Product = (props) => {
    const category_row = props.product;
    const urlImg = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/images/product/";
    const urlProduct = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/product/product_category/"+category_row.id;
    const [products, setProducts] = useState([]);
    const productsPerRow = 3;
  
    useEffect(() => {
      async function getProducts() {
        await axios.get(urlProduct).then((result)=>{
          setProducts(result.data);
        })
      }
      getProducts();
    }, []);   
  
    return ( 
<div className="row">
  {products.map((product, index) => (
    <>
      <div key={index} className="col-sm-12 mx-1 mb-5">
      <div className="card product-card" >
  <Link to={'/product-detail/'+product.id}>    
  <img className="card-img-top" src={`${urlImg}${product.image}`} alt={product.name} style={{ objectFit: "cover", height: "450px", }} />
  </Link>
  <div className="card-body">
    <Link to={'/product-detail/'+product.id}>    
      <h5 className="card-title">{product.name}</h5>
    </Link>
    <p className="card-text"><strong>${product.price}</strong></p>
    <Link to="/">    
      <button className="btn btn-primary">
        <FaCartPlus />
        Add to Cart
      </button>
    </Link>
  </div>
</div>

      </div>
      {(index + 1) % productsPerRow === 0 && <div className="w-100"></div>}
    </>
  ))}
</div>
    );
  }
  
  export default Product;
  