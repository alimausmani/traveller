import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div className="bg-black text-white text-[12px] sm:text-[14px] md:text-sm py-3 px-3">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                    <div className="flex flex-col items-center sm:flex-row gap-1 sm:gap-4 text-center md:text-left">
                        <span className="whitespace-nowrap">📞 +91-120-4222623/24/25</span>
                        <span className="whitespace-nowrap">📧 info@specialholidays.net</span>
                    </div>

                    <div className="hidden md:block font-semibold text-[8px] sm:text-xs lg:text-sm text-center md:text-left">
                        National Tourism Awardee - Tour Operator & Travel Agent
                    </div>

                    <div className="flex flex-col items-center sm:flex-row gap-1 sm:gap-4">
                        <img
                            src="https://flagcdn.com/w40/in.png"
                            alt="Indian Flag"
                            className="w-5 h-3"
                        />
                        <Link to="/register">
                            <button className="bg-orange-500 text-white px-2 py-1 rounded text-[10px] sm:text-xs">
                                REGISTER
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="text-orange-500 flex items-center gap-1 text-[10px] sm:text-xs">
                                <span>👤</span> LOGIN
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`py-3 px-2 ${menuOpen ? 'bg-white-900' : 'bg-blue'} shadow`}>
                <div className="flex justify-between items-center w-full sm:px-4 md:px-24">
                    <div className={`${menuOpen ? 'hidden' : 'block'} sm:block`}>
                        <h1 className="text-xl sm:text-2xl font-bold text-blue-800 flex items-center gap-2">
                            TREVILY
                        </h1>
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="sm:hidden text-2xl focus:outline-none text-blue-800"
                    >
                        {menuOpen ? '✖' : '☰'}
                    </button>

                    <ul className="hidden sm:flex gap-4 text-sm font-semibold">
                        <li><Link to="/india" className="hover:text-blue-600">🏰 INDIA</Link></li>
                        <li><Link to="/reviews" className="hover:text-blue-600">💬 REVIEWS</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600">🌐 ABOUT</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">📞 CONTACT</Link></li>
                    </ul>
                </div>
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




















