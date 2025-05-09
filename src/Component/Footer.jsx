import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin,  FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#005A53] text-white py-10 px-5 rounded-t-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4">CONTACT Us</h3>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt /> 1600 Pennsylvania Ave, 20003 DC</p>
                    <p className="flex items-center gap-2"><FaPhone /> +1 888-888-8888</p>
                    <p className="flex items-center gap-2"><FaEnvelope /> demo@gmail.com</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">EXPLORE</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>City Guide</li>
                        <li>City Routes</li>
                        <li>Destinations</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">COMPANY</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Traveling</li>
                        <li>About Us</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">HELP CENTER</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Contact</li>
                        <li>FAQs</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <div className="text-blue-500 font-bold text-xl">TOURDAILY</div>
                    <div className="flex space-x-4 text-blue-400 text-lg">
                        <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="cursor-pointer hover:text-white" />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="cursor-pointer hover:text-white" />
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="cursor-pointer hover:text-white" />
                        </a>
                    </div>

                </div>
            </div>

            <hr className="my-6 border-gray-600" />
            <p className="text-center text-sm text-gray-400">
                © Create All Rights Reserved. Designed by <span className="text-blue-500">Alima Usmani</span>
            </p>
        </footer>
    );
};

export default Footer;
