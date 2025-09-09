import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar";
import IntroWithSlider from "../components/Intro-with-slider1";
import Portfolio from "../components/Works-three-column-with-filter";
import Services from "../components/Services1";
import Testimonials from "../components/Testimonials1";
import Footer from "../components/Footer";
import ContactSection from "../components/Contact-section";
import Events from "../components/Events";
import Products from "../components/Products";
import initIsotope from "../common/initIsotope";

const Home = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Your Brand Name - Empowering Lives Through Style & Inspiration</title>
      </Head>

      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
        
        {/* Hero Section */}
        <IntroWithSlider />

        {/* Gallery Section */}
        <section id="gallery" className="portfolio section-padding pb-70 mt-100">
          <div className="container">
            <div className="section-head text-center">
              <h6 className="custom-font">Media Gallery</h6>
              <h4 className="playfont">Our Latest Works</h4>
            </div>
            <div className="row">
              <div className="filtering text-center col-12">
                <div className="filter">
                  <span data-filter="*" className="active">ALL</span>
                  <span data-filter=".brand">BRANDING</span>
                  <span data-filter=".web">MOBILE APP</span>
                  <span data-filter=".graphic">CREATIVE</span>
                </div>
              </div>
              <div className="gallery full-width">
                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <Link href="/project-details/project-details-dark" passHref>
                      <a className="img-link">
                        <Image src="/img/portfolio/works/1.jpg" alt="Creativity Demand" width={800} height={600} />
                        <div className="item-img-overlay valign">
                          <div className="cont text-center">
                            <h6>Creativity Demand</h6>
                            <p>Design, WordPress</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items web">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <Link href="/project-details/project-details-dark" passHref>
                      <a className="img-link">
                        <Image src="/img/portfolio/works/2.jpg" alt="Through The Breaking" width={800} height={600} />
                        <div className="item-img-overlay valign">
                          <div className="cont text-center">
                            <h6>Through The Breaking</h6>
                            <p>Design, WordPress</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items graphic">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <Link href="/project-details/project-details-dark" passHref>
                      <a className="img-link">
                        <Image src="/img/portfolio/works/3.jpg" alt="Create With Creatives" width={800} height={600} />
                        <div className="item-img-overlay valign">
                          <div className="cont text-center">
                            <h6>Create With Creatives</h6>
                            <p>Design, WordPress</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="blog section-padding">
          <div className="container">
            <div className="section-head text-center">
              <h6 className="custom-font">Upcoming Events</h6>
              <h4 className="playfont">Latest Events</h4>
            </div>
            <Events />
          </div>
        </section>

        {/* Tagline Section */}
        <section className="tagline section-padding bg-img parallaxie" style={{ backgroundImage: "url('/img/slid/1.jpg')" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="text-center">
                  <h4 className="playfont mb-15">Empowering entrepreneurs to build brands they love</h4>
                  <p>Turning your vision into reality through creative excellence and strategic innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services section-padding">
          <div className="container">
            <div className="section-head text-center">
              <h6 className="custom-font">Best Features</h6>
              <h4 className="playfont">Our Services</h4>
            </div>
            <Services style="4item" />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section-padding">
          <div className="container">
            <div className="section-head text-center">
              <h6 className="custom-font">What They Say?</h6>
              <h4 className="playfont">Testimonials</h4>
            </div>
            <Testimonials subBgLftstl />
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="products section-padding">
          <div className="container">
            <div className="section-head text-center">
              <h6 className="custom-font">Our Products</h6>
              <h4 className="playfont">Featured Products</h4>
            </div>
            <Products />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-sec section-padding">
          <div className="container">
            <div className="section-head text-center">
              <h6 className="custom-font">Contact Us</h6>
              <h4 className="playfont">Get in Touch</h4>
            </div>
            <ContactSection />
          </div>
        </section>

        <Footer />
      </LightTheme>
    </>
  );
};

export default Home;
