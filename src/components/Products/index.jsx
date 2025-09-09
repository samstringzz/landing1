import React from "react";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Leather Handbag",
      price: "₦29,000",
      rating: 4.5,
      image: "/img/portfolio/mas1/1.jpg",
    },
    {
      id: 2,
      title: "Sneakers",
      price: "₦49,000",
      rating: 4.5,
      image: "/img/portfolio/mas1/2.jpg",
    },
    {
      id: 3,
      title: "Wrist Watch",
      price: "₦19,000",
      rating: 4.5,
      image: "/img/portfolio/mas1/3.jpg",
    },
    {
      id: 4,
      title: "Green Handbag",
      price: "₦99,000",
      rating: 4.5,
      image: "/img/portfolio/mas1/4.jpg",
    },
  ];

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-6">
          <div className="item-box">
            <div className="img">
              <Image src={product.image} alt={product.title} width={800} height={600} />
              <div className="rating">
                <i className="fas fa-star"></i>
                <span>{product.rating}</span>
              </div>
            </div>
            <div className="cont">
              <h6>{product.title}</h6>
              <div className="price">{product.price}</div>
              <div className="btn-more">
                <Link href={`/products/${product.id}`}>
                  <a className="btn-curve btn-lit">
                    <span>Buy Now</span>
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
