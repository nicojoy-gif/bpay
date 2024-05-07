import React from 'react';
import Image from 'next/image';
import logoImage from '../Assets/logo.svg';
import rocket from '../Assets/Rocket.svg';

export default function Nav() {
  return (
    <div className="px-4 py-2 md:px-8 md:py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logoImage} alt="Logo" className="h-9" />
          <p className="font-bold tracking-tight text-lg">BilmaPay</p>
        </div>
        <div className="hidden md:flex justify-center items-center space-x-12">
          <p className="text-customGreen font-semibold">About Us</p>
          <p className="text-customGreen font-semibold">Contact</p>
          <button className="text-customGreen font-semibold bg-white rounded-full border border-customGreen px-6 py-3">
            How it works
          </button>
          <button className=" bg-customOrange font-semibold rounded-full px-6 py-3 text-white flex items-center">
          <Image src={rocket} alt="Logo" className="h-6 mr-2" />
          <p>Download App</p>
        </button>
        </div>
       
      </div>
    </div>
  );
}
