'use client';

import React from 'react';

const Navigation = () => {
    return (
        <nav
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                 w-auto max-w-4xl
                 bg-white/5 border border-white/10 rounded-full
                 shadow-xl backdrop-blur-md
                 px-5 py-2.5"
        >
            {/* 3 zones: left / center / right */}
            <div className="flex items-center justify-between gap-6">
                {/* Left: logo + brand */}
                <div className="flex items-center flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" fill="white" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">SunRoots.ai</span>
                </div>

                {/* Center: links (stay centered, never wrap) */}
                <div
                    className="hidden md:flex flex-1 items-center justify-center
                     mx-2 gap-6 text-[13px] text-gray-300 whitespace-nowrap"
                >
                    <a href="#" className="hover:text-white transition-colors">Create</a>
                    <a href="#" className="hover:text-white transition-colors">Genres</a>
                    <a href="#" className="hover:text-white transition-colors">Languages</a>
                    <a href="#" className="hover:text-white transition-colors">Community</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                </div>

                {/* Right: actions */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                        href="#"
                        className="hidden md:inline-block text-[13px] font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        Login
                    </a>
                    <a
                        href="#"
                        className="text-[13px] font-medium text-black bg-white rounded-full
                       px-3 py-1.5 hover:bg-gray-200 transition-colors"
                    >
                        Start Creating
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
