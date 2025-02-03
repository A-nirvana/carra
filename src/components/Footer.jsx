import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#001A1A] pt-12 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        
        {/* Book Your Caravan */}
        <div>
          <h4 className="font-semibold mb-4">Book Your Caravan</h4>
          <p className="text-[#A3A3A3]">Your Own Hotel Room on Wheels</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="text-[#A3A3A3] hover:underline">About Us</a></li>
            <li><a href="#" className="text-[#A3A3A3] hover:underline">Features</a></li>
            <li><a href="#" className="text-[#A3A3A3] hover:underline">Gallery</a></li>
            <li><a href="#" className="text-[#A3A3A3] hover:underline">How it Works</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <h6 className="text-[#A3A3A3]">Phone: +123 456 7890</h6>
          <p className="text-[#A3A3A3]">Email: info@caravan.com</p>
          <p className="text-[#A3A3A3]">123 Adventure St, Travel City</p>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-[#A3A3A3] hover:underline">Facebook</a></li>
            <li><a href="#" className="text-[#A3A3A3] hover:underline">Twitter</a></li>
            <li><a href="#" className="text-[#A3A3A3] hover:underline">Instagram</a></li>
            <li><a href="#" className="text-[#A3A3A3] hover:underline">LinkedIn</a></li>
          </ul>
        </div>
        
      </div>
      <div className='w-[90%] h-[1px] bg-white mt-6 ml-[5%]'></div>
      <div className='flex justify-center py-4 '>
        <p>&copy; 2025 BYC.All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
