import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container"; // Adjust the path if needed
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Add other modules if needed
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import mn4 from "../img/mn4.jpg";
import wom2 from "../img/wom2.jpg";
import wom1 from "../img/wom1.jpg";
import mn3 from "../img/mn3.jpg";
import mn1 from "../img/mn1.jpg";
import br1 from "../img/br1 (8).png";
import br2 from "../img/br2.png";
import br3 from "../img/br3.png";
import br4 from "../img/br4.png";
import br5 from "../img/br5.png";
import br6 from "../img/br6.png";
import br7 from "../img/br7.png";
import all2 from "../img/all2.png";
import ro2 from "../img/ro2.png";
import no from "../img/nothing.png";
import one from "../img/one.webp";
import ph from "../img/oneph.png";
import sung from "../img/sam.webp";
import iph1 from "../img/ipho1.jpeg";
import rol from "../img/lex.jpeg";
import apb3 from "../img/app;e3.jpeg";
import amaz from "../img/zon.jpg";


const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <Link to="/products">
          {/* Banner Section */}
          <div className="relative mb-6">
            <img
              src={amaz}
              alt=""
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4"></div>
          </div>
        </Link>

        <Container class1="home-wrapper-1 py-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1100, // Time between slides in milliseconds (3 seconds)
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2, // Two slides per view for larger screens
              },
            }}
            className="mySwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="main-banner position-relative ">
                <Link to="/products">
                  <img
                    src={mn4}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                </Link>
                <div className="main-banner-content position-absolute">
                  <h4>Styles For Men</h4>
                  <h5>T-shirt</h5>
                  <p>From RS699 To RS2000</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="main-banner position-relative ">
                <Link to="/products">
                  <img
                    src={wom2}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                </Link>
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Women</h5>
                  <p>Start At 599/-</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="main-banner position-relative ">
                <Link to="/products">
                  <img
                    src={wom1}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                </Link>
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>T-Shirt</h5>
                  <p>Start At 550/-</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="main-banner position-relative ">
                <Link to="/products">
                  <img
                    src={mn1}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                </Link>
                <div className="small-banner-content position-absolute">
                  <h4>BEST OFFER</h4>
                  <h5>T-SHIRT</h5>
                  <p>Start At 599/-</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="main-banner position-relative ">
                <Link to="/products">
                  <img
                    src={mn3}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                </Link>
                <div className="small-banner-content position-absolute">
                  <h4>CASUAL</h4>
                  <h5>SEMI FORMAL</h5>
                  <p>Start At 2500/-</p>
                </div>
              </div>
            </SwiperSlide>

            
          </Swiper>
        </Container>

        {/* Featured Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Card Example */}
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl">
              <img
                src={no}
                alt="Product"
                className="w-full h-72 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Nothing 2A</h3>
              <p className="text-gray-600">$30.99</p>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
            {/* Repeat the above block for more products */}
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl">
              <img
                src={ph}
                alt="Product"
                className="w-full h-72 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Oneplus 11 Pro</h3>
              <p className="text-gray-600">$35.99</p>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl">
              <img
                src={sung}
                alt="Product"
                className="w-full h-72 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Samsung S26 Ultra</h3>
              <p className="text-gray-600">$42.99</p>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl">
              <img
                src={iph1}
                alt="Product"
                className="w-full h-72 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">iphone 19 Pro Max</h3>
              <p className="text-gray-600">$48.99</p>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <Container class1="marque-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper">
                <Link to="/products">
                  <Marquee className="d-flex">
                    <div className="mx-4 w-25">
                      <img src={br1} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={br2} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={br3} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={br4} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={br5} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={br6} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={br7} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={all2} alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src={ro2} alt="brand" />
                    </div>
                  </Marquee>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Deals Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Exclusive Deals</h2>
          <div className="flex space-x-4">
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl w-1/3">
              <img
                src={apb3}
                alt="Deal Product"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Apple Buds</h3>
              <p className="text-gray-600">
                $29.99 <span className="line-through">$39.99</span>
              </p>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl w-1/3">
              <img
                src={one}
                alt="Deal Product"
                className="w-52 h-48 object-cover rounded-md mb-4 ml-24"
              />
              <h3 className="text-lg font-semibold mb-2">OnePlus Buds 3</h3>
              <p className="text-gray-600">
                $19.99 <span className="line-through">$29.99</span>
              </p>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
            {/* Add more deal blocks as needed */}
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl w-1/3">
              <img
                src={rol}
                alt="Deal Product"
                className=" h-48 object-cover rounded-md mb-4 ml-24"
              />
              <h3 className="text-lg font-semibold mb-2">Rolex Watch</h3>
              <p className="text-gray-600">
                $199.99 <span className="line-through">$299.99</span>
              </p>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
