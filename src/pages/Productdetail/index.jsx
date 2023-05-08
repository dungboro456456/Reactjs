import { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const urlImg = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/images/product/";
  const urlProductDetail = `http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/product/product_detail/${id}`;
  const [product, setProduct] = useState({});
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      await axios.get(urlProductDetail).then((result) => {
        setProduct(result.data);
      });
    }
    getProduct();
  }, [urlProductDetail]);

  useEffect(() => {
    async function getRelatedProducts() {
      if (!product.category_id) {
        return;
      }
      const urlProductDetailOther = `http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/product/product_category/${product.category_id}/4`;
      await axios.get(urlProductDetailOther).then((result) => {
        setListProduct(result.data);
      });
    }
    getRelatedProducts();
  }, [product]);

  const { name, image, price, pricesale, detail, updated_at } = product;

  return (
    <div className="container ">
      <div className="row ">
        <div className="col-sm-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/product">Product</a></li>
              <li className="breadcrumb-item active" aria-current="page">{name}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <img src={`${urlImg}/${image}`} alt={name} className="img-fluid rounded mx-auto d-block" />
        </div>
        <div className="col-md-6">
          <h3>{name}</h3>
          <h4 className="text-danger">{pricesale ? `$${pricesale}` : `$${price}`}</h4>
          <h5><del>{pricesale ? `$${price}` : ''}</del></h5>
          <p>{detail}</p>
          <button className="btn btn-primary">
            <FaCartPlus /> Add to Cart
          </button>
          <p className="mt-5">Updated at: {updated_at}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
        <h4>Related Products</h4>
      </div>
      {listProduct.map((relatedProduct) => (
  <div key={relatedProduct.id} className="col-sm-3">
    <Link to={`/product-detail/${relatedProduct.id}`}>
      <Card>
        <Card.Img variant="top" src={`${urlImg}/${relatedProduct.image}`} style={{ objectFit: "cover", height: "200px" }} />
        <Card.Body>
          <Card.Title>{relatedProduct.name}</Card.Title>
          <Card.Text>{relatedProduct.pricesale ? `$${relatedProduct.pricesale}` : `$${relatedProduct.price}`}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Link>
  </div>
))}
    </div>
    </div>


  );
};

export default ProductDetail;
