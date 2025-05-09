import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/*bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600          005A53 final color[##FFC300][#FFD700] #FF8E53Top bar with Deep Blue background and Sun Orange text #FFB347*/}
            <div className="bg-[#f9bb1d] text-black text-sm py-2">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

                    <div className="flex items-center gap-4 text-xs md:text-sm text-white">
                        <span>📞 +91-120-4222623/24/25</span>
                        <span>📧 info@specialholidays.net</span>
                    </div>

                    <div className="hidden md:block text-center font-semibold text-xs text-white">
                        National Tourism Awardee - Tour Operator & Travel Agent
                    </div>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://flagcdn.com/w40/in.png"
                            alt="Indian Flag"
                            className="w-7 h-7"
                        />
                        <button className="bg-[#FF8C00] text-[#FFF5CC] px-3 py-1 rounded text-xs md:text-sm border border-[#FFA500]">
                            REGISTER
                        </button>
                        <button className="bg-[#FF8C00] text-white flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded">
                            <span>👤</span> LOGIN
                        </button>

                    </div>
                </div>
            </div>

            {/* Navbar with Sun Orange background and Deep Blue text */}
            <div className="bg-white  shadow">
                <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-3">

                    <div className="flex items-center mb-2 md:mb-0">
                        <div className="w-[6ch] md:w-[10ch]"></div>
                        <img
                            src="https://www.specialholidays.com/world/uploads/global/logo.png"
                            alt="Logo"
                            className="h-12 mr-4"
                        />
                    </div>
                    <ul className="flex flex-wrap gap-6 text-sm font-semibold justify-center md:justify-start text-black">
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
