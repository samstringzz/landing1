import React from "react";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Sneakers",
      price: "₦49,000",
      rating: 4.5,
      description: "Premium quality sneakers with 4.5 star rating for comfort and style.",
      image: "/img/portfolio/mas1/2.jpg",
    },
    {
      id: 2,
      title: "Wrist Watch",
      price: "₦19,000",
      rating: 4.5,
      description: "Elegant wrist watch with 4.5 star rating for precision and durability.",
      image: "/img/portfolio/mas1/3.jpg",
    },
    {
      id: 3,
      title: "Green Handbag",
      price: "₦99,000",
      rating: 4.5,
      description: "Stylish green handbag with 4.5 star rating for fashion and functionality.",
      image: "/img/portfolio/mas1/4.jpg",
    },
  ];

  return (
    <div className="row justify-content-center">
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 mb-4">
          <div className="item-box text-center">
            <div className="img mb-3">
              <div className="placeholder-img" style={{ 
                width: '100%', 
                height: '300px', 
                backgroundColor: '#f8f9fa', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
              }}>
                <span style={{ color: '#6c757d', fontSize: '14px' }}>360X300</span>
              </div>
            </div>
            <div className="cont">
              <div className="price mb-2" style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>
                {product.price}
              </div>
              <h6 className="mb-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                {product.title}
              </h6>
              <p className="mb-3" style={{ color: '#6c757d', fontSize: '14px' }}>
                {product.description}
              </p>
              <div className="btn-more">
                <Link href={`/products/${product.id}`}>
                  <a style={{ color: '#dc3545', textDecoration: 'none', fontWeight: '500' }}>
                    Learn More »
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
