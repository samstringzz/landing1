import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Our Services.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item-box text-center" style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '30px 20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="price mb-2" style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>
                ₦150 /SESSION
              </div>
              <h6 className="mb-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                Photography
              </h6>
              <p className="mb-3" style={{ color: '#6c757d', fontSize: '14px' }}>
                Professional photography services for personal branding and business needs.
              </p>
              <div className="btn-more">
                <Link href="/services/photography">
                  <a style={{ color: '#dc3545', textDecoration: 'none', fontWeight: '500' }}>
                    Learn More »
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item-box text-center" style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '30px 20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="price mb-2" style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>
                ₦400 /PROJECT
              </div>
              <h6 className="mb-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                Brand Strategy
              </h6>
              <p className="mb-3" style={{ color: '#6c757d', fontSize: '14px' }}>
                Comprehensive brand development and strategic planning for entrepreneurs.
              </p>
              <div className="btn-more">
                <Link href="/services/brand-strategy">
                  <a style={{ color: '#dc3545', textDecoration: 'none', fontWeight: '500' }}>
                    Learn More »
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item-box text-center" style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '30px 20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <div className="price mb-2" style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>
                ₦250 /MONTH
              </div>
              <h6 className="mb-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                Social Media Marketing
              </h6>
              <p className="mb-3" style={{ color: '#6c757d', fontSize: '14px' }}>
                Expert social media management and content strategy for maximum engagement.
              </p>
              <div className="btn-more">
                <Link href="/services/social-media">
                  <a style={{ color: '#dc3545', textDecoration: 'none', fontWeight: '500' }}>
                    Learn More »
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
