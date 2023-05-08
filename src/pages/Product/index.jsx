import { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import Brandmenuhome from '../Home/Brandmenuhome';
import { Link, useParams } from 'react-router-dom';

const PRODUCT = () => {
  const { page } = useParams();
  const trang = page ? page : 1;
  const [product, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [total, setTotal] = useState(0);

  const urlImg = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/images/product/";
  const urlProduct = `http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/product/product_list/${trang}`;
  const urlProductCount = `http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/product/product_list_count`;

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await axios.get(urlProduct);
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [trang]);

  useEffect(() => {
    async function getTotal() {
      try {
        const result = await axios.get(urlProductCount);
        setTotal(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTotal();
  }, []);

  useEffect(() => {
    setPageNumber(Math.ceil(total / 9));
  }, [total]);

  const pageNumbers = [];
  for (let i = 1; i <= pageNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <Brandmenuhome />
        </div>
        <div className="col-sm-9">
          <h5 className="m-0 text-center mt-4"><strong>TẤT CẢ SẢN PHẨM</strong></h5>
          <div className="row">
            {product.map((product, index) => (
              <div key={index} className="col-sm-4 mb-4">
                <div className="card product-card">
                  <Link to={`/product-detail/${product.id}`}>
                  <img className="card-img-top" src={`${urlImg}${product.image}`} alt={product.name} style={{ objectFit: "cover", height: "200px" }} />
                  </Link>
                  <div className="card-body">
                    <h6 className="card-title">
                      <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text m-0">{product.price.toLocaleString()} đ</p>
                      <button className="btn btn-primary btn-sm" title="Thêm vào giỏ hàng">
                        <FaCartPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <nav aria-label="Page navigation">
  <ul className="pagination justify-content-center mt-3">
    <li className="page-item">
      <Link to={`/product/${parseInt(trang) - 1}`} className="page-link" disabled={parseInt(trang) === 1}>
        Previous
      </Link>
    </li>
    {pageNumbers.map((number) => (
      <li key={number} className={`page-item ${parseInt(trang) === number ? 'active' : ''}`}>
        <Link to={`/product/${number}`} className="page-link">
          {number}
        </Link>
      </li>
    ))}
    <li className="page-item">
      <Link to={`/product/${parseInt(trang) + 1}`} className="page-link" disabled={parseInt(trang) === pageNumber}>
        Next
      </Link>
    </li>
  </ul>
</nav>

            </div>
          </div>
        </div>
      );
    };
    
    export default PRODUCT;
    
