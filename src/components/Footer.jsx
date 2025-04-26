import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-tertiary max-padd-container text-white py-12 mt-40 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* logo and description */}
        <div className="flex flex-col items-center md-items-start">
          <Link to={" /"} className="bold-24 mb-4">
            <h3>
              Glam <span className="text-secondary">Store</span>
            </h3>
          </Link>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptates ut iure magni. Doloremque rem commodi enim dolor earum
            voluptatum libero.
          </p>
        </div>
        {/* Qulic Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">Quick Links</h4>
          <ul className=" space-y-2 regular-15 text-gray-30">
            <li>
              <Link to={"/"} className=" hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/categores"} className=" hover:text-secondary">
                Categores
              </Link>
            </li>
            <li>
              <Link to={"/shop"} className=" hover:text-secondary">
                Shop
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className=" hover:text-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* E-commerce */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">E-Commerce Links</h4>
          <ul className=" space-y-2 regular-15 text-gray-30">
            <li>
              <Link to="/terms" className=" hover:text-secondary">
                Terms Of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className=" hover:text-secondary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/shipping" className=" hover:text-secondary">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link to="/returns" className=" hover:text-secondary">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Infromeion */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">Cotact Us</h4>
          <p>
            Email{" "}
            <a
              href="mailto:support@lamstore.com"
              className=" hover:text-secondary"
            ></a>
          </p>
          <p>Address: 123 Glam street , Country</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <hr className="h-[1px] w-full max-w-screen-md my-4 border-white" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear} GlamStore | All rights reseved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
