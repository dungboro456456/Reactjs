import { Link } from "react-router-dom";

const ProductItem = (props) => {
    const urlImg = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/images/product/";
    const productItem = props.product;
  return (
  <div className="col-md-3 mb-3">
    <div className="product-item">
      <div className="product-image">
        <Link to ={'/chi-tiet-san-pham/' +productItem.id}>
        <img src={urlImg+productItem.image} className='img-fluid' alt={productItem.image}/>

        </Link>
      </div>
      <div className="product-name text-center">
      <Link to ={'/chi-tiet-san-pham/' +productItem.id}>
        {productItem.name}
        </Link>
      </div>
      <div className="product-price">
        <div className="row">
          <div className="col-6">{productItem.pricesale}đ</div>
          <div className="col-6"><del>{productItem.price}đ</del></div>
        </div>
      </div>
    </div>
  </div>

  );
}
export default ProductItem;
