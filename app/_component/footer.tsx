import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#BD2720] text-white py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white">About Us</h3>
            <p className="mt-4 text-sm text-white">
              Paryatan is a non-governmental organization dedicated to educating
              children from various underprivileged areas. The NGO focuses on
              providing quality education and learning opportunities to children
              who lack access to basic educational resources. By collaborating
              with local communities, volunteers, and educational experts,
              Paryatan aims to bridge the educational gap and empower these
              children with the knowledge and skills they need to succeed.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:underline text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:underline text-white">
                  Programs
                </a>
              </li>
              <li>
                <a href="/getinvolved" className="hover:underline text-white">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <p className="mt-4 text-sm text-white">
              1234 Street Name, City, State, 12345
            </p>
            <p className="mt-2 text-sm text-white">
              Email:{" "}
              <a
                href="mailto:info@paryatanfoundation.org"
                className="underline text-white"
              >
                info@paryatanfoundation.org
              </a>
            </p>
            <p className="mt-2 text-sm text-white">
              Phone:{" "}
              <a href="tel:+1234567890" className="underline text-white">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#FD542B] pt-4 text-sm text-white flex justify-between ">
          <div className="flex gap-6 align-center">
            <p>&copy; 2024 Paryatan Foundation. All rights reserved.</p>
            <button className="hover:underline hover:rounded">
              Privacy Policy
            </button>
            <button className="hover:underline hover:rounded">
              Terms of Service
            </button>
          </div>
          <div className="flex gap-5 ">
            <a href="https://www.facebook.com">
              <FaFacebook className="text-2xl text-white hover:text-[#FD542B] " />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter className="text-2xl text-white hover:text-[#FD542B]" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram className="text-2xl text-white hover:text-[#FD542B]" />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedinIn className="text-2xl text-white hover:text-[#FD542B]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
