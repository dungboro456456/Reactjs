import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-3">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Product Categories</h5>
            <ul className="list-unstyled">
              <li><Link href="#">Laptop</Link></li>
              <li><Link href="#">Desktop</Link></li>
              <li><Link href="#">Tablet</Link></li>
              <li><Link href="#">Smartphone</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Customer Services</h5>
            <ul className="list-unstyled">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Return Policy</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><FaPhone /> +1 123-456-7890</li>
              <li><FaEnvelope /> support@example.com</li>
              <li><FaMapMarkerAlt /> 123 Main St, New York, NY 10001</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><Link href="#"><i className="fab fa-facebook-f"></i> Facebook</Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
              <li><Link href="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
              <li><Link href="#"><i className="fab fa-youtube"></i> Youtube</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center bg-secondary py-2">
        <h5 className="mb-0 text-white">© 2023 My Store. Deseign by Nguyễn Tấn Dũng - 2121110243</h5>
      </div>
    </footer>
  );
};

export default Footer;
