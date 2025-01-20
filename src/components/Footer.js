import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* Newsletter Signup Section */}
      <footer className="py-4 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-white text-lg mb-4 md:mb-0 ml-[930px]">
            Sign Up For Newsletter
          </h2>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l-lg w-full md:w-72 text-gray-700"
              aria-label="Your Email Address"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </footer>

      {/* Main Footer Section */}
      <footer className="py-8 bg-black text-gray-400">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Contact Section */}
          <div className="ml-12">
            <h4 className="text-white mb-4">Contact Us</h4>
            <address className="not-italic">
              No: 1/11 Karapakkam, <br /> Chennai, Tamil Nadu. <br /> PinCode:
              600007
            </address>
            <a href="tel:+919876543210" className="block mt-3">
              +91 9123456780
            </a>
            <a href="mailto:matrixfashion@gmail.com" className="block">
              elitebaazar@gmail.com
            </a>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/" className="hover:text-white">
                <BsLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-white">
                <BsInstagram size={24} />
              </a>
              <a href="https://github.com/" className="hover:text-white">
                <BsGithub size={24} />
              </a>
              <a href="https://www.youtube.com/" className="hover:text-white">
                <BsYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <h4 className="text-white mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h4 className="text-white mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-white">
                  Shirt
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  T-Shirt
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Short
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Pant
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Section */}
      <footer className="py-4 bg-black">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} Powered by Elite Bazaar
        </div>
      </footer>
    </>
  );
};

export default Footer;
