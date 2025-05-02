import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="bg-black text-white text-sm py-2">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

                    <div className="flex items-center gap-4 text-xs md:text-sm">
                        <span>📞 +91-120-4222623/24/25</span>
                        <span>📧 info@specialholidays.net</span>
                    </div>

                    <div className="hidden md:block text-center font-semibold text-xs">
                        National Tourism Awardee - Tour Operator & Travel Agent
                    </div>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://flagcdn.com/w40/in.png"
                            alt="Indian Flag"
                            className="w-5 h-4"
                        />
                        <button className="bg-orange-500 text-white px-3 py-1 rounded text-xs md:text-sm">
                            REGISTER
                        </button>
                        <button className="text-orange-500 flex items-center gap-1 text-xs md:text-sm">
                            <span>👤</span> LOGIN
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-3">

                    <div className="flex items-center mb-2 md:mb-0">
                        <div className="w-[6ch] md:w-[10ch]"></div>
                        <img
                            src="https://www.specialholidays.com/world/uploads/global/logo.png"
                            alt="Logo"
                            className="h-12 mr-4"
                        />
                    </div>
                    <ul className="flex flex-wrap gap-6 text-sm font-semibold justify-center md:justify-start">
                        <li className="w-[6ch] md:w-[10ch]"></li>

                        <li className="text-center">
                            <Link to="/india">🕌 INDIA</Link>
                        </li>
                        <li className="text-center">
                            <Link to="/awards">🥇 AWARDS</Link>
                        </li>
                        <li className="text-center">
                            <Link to="/reviews">💬 REVIEWS</Link>
                        </li>
                        <li className="text-center">
                            <Link to="/about">🌐 ABOUT</Link>
                        </li>
                        <li className="text-center">
                            <Link to="/contact">📞 CONTACT</Link>
                        </li>
                        <li className="w-[6ch] md:w-[10ch]"></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
