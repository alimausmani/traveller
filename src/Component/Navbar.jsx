import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            {/* Top Bar */}
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

            {/* Main Navbar */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-3">

                    {/* Logo */}
                    <div className="flex items-center mb-2 md:mb-0">
                        <div className="w-[6ch] md:w-[10ch]"></div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsyprO04hNVaCBvXSz1Bbqbd1loaXWmwtpQ&s"
                            alt="Logo"
                            className="h-18 mr-4 w-20"

                        />
                    </div>

                    {/* Hamburger Button - visible only on mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="sm:hidden text-2xl focus:outline-none text-blue-800"
                    >
                        {menuOpen ? '✖' : '☰'}
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden sm:flex gap-4 text-sm font-semibold text-black">
                        <li><Link to="/india" className="hover:text-blue-600">🏰 INDIA</Link></li>
                        <li><Link to="/reviews" className="hover:text-blue-600">💬 REVIEWS</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600">🌐 ABOUT</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">📞 CONTACT</Link></li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="flex flex-col gap-2 mt-4 text-center text-sm font-semibold sm:hidden">
                        <li><Link to="/india" className="hover:text-blue-600">🏰 INDIA</Link></li>
                        <li><Link to="/reviews" className="hover:text-blue-600">💬 REVIEWS</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600">🌐 ABOUT</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">📞 CONTACT</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
