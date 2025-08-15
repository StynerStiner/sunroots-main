'use client';

import React, { useState, useRef } from 'react';

const HeroSection = () => {
    // State to track which audio is playing
    const [playingTrack, setPlayingTrack] = useState<string | null>(null);

    // Audio refs to control playback
    const slowBeatRef = useRef<HTMLAudioElement | null>(null);
    const regularRef = useRef<HTMLAudioElement | null>(null);

    // Function to handle vinyl record clicks
    const handleVinylClick = (track: 'slow' | 'regular'): void => {
        if (playingTrack === track) {
            // If this track is already playing, pause it
            if (track === 'slow' && slowBeatRef.current) {
                slowBeatRef.current.pause();
            } else if (regularRef.current) {
                regularRef.current.pause();
            }
            setPlayingTrack(null);
        } else {
            // Pause any currently playing track
            if (playingTrack === 'slow' && slowBeatRef.current) {
                slowBeatRef.current.pause();
            } else if (playingTrack === 'regular' && regularRef.current) {
                regularRef.current.pause();
            }

            // Play the selected track
            if (track === 'slow' && slowBeatRef.current) {
                slowBeatRef.current.play();
            } else if (regularRef.current) {
                regularRef.current.play();
            }
            setPlayingTrack(track);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start px-6 text-center pt-24 md:pt-32">
            {/* Subtle glow effect */}
            <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Content container - positioned higher */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-6 mt-16 md:mt-24">
                {/* Badge */}
                <div className="flex justify-center">
                    <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        African AI Music Platform
                    </span>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
                    Crafting authentic African music through{' '}
                    <span className="font-medium">AI innovation</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Generate Afrobeats, Amapiano, Highlife, and more in 5 African languages.
                    Clean algorithms, purposeful creativity, and cultural authenticity.
                </p>

                {/* Buttons - properly spaced and consistent */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                    <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200 min-w-[160px]">
                        Start Creating Music
                    </button>
                    <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 min-w-[160px]">
                        Explore Samples
                    </button>
                </div>
            </div>

            {/* Vinyl Records Section - below buttons */}
            <div className="w-full max-w-5xl mx-auto mt-8 md:mt-10 relative">
                <div className="relative h-[320px] flex items-center justify-center">
                    {/* Audio elements */}
                    <audio
                        ref={slowBeatRef}
                        src="https://pub-8c27381e6e2b48218c878d2246eebe9e.r2.dev/Daddy-Roots-of-the-Sun-(SlowBeat).mp3"
                        preload="auto"
                    />
                    <audio
                        ref={regularRef}
                        src="https://pub-8c27381e6e2b48218c878d2246eebe9e.r2.dev/Daddy-Roots-of-the-Sun.mp3"
                        preload="auto"
                    />

                    {/* First Vinyl Record (back) - spinning clockwise - SlowBeat version */}
                    <div
                        onClick={() => handleVinylClick('slow')}
                        className={`w-72 h-72 md:w-80 md:h-80 bg-white/5 backdrop-blur-sm rounded-full shadow-2xl 
                                  border ${playingTrack === 'slow' ? 'border-white/40' : 'border-white/10'} 
                                  flex items-center justify-center ${playingTrack === 'slow' ? 'spin-slow vinyl-active' : 'vinyl-record'}
                                  cursor-pointer`}
                    >
                        {/* Vinyl grooves */}
                        <div className="absolute inset-6 border border-white/10 rounded-full"></div>
                        <div className="absolute inset-12 border border-white/8 rounded-full"></div>
                        <div className="absolute inset-16 border border-white/8 rounded-full"></div>
                        <div className="absolute inset-20 border border-white/8 rounded-full"></div>
                        <div className="absolute inset-24 border border-white/8 rounded-full"></div>

                        {/* Completely transparent center hole */}
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center 
                                      border-none`}>
                            {playingTrack === 'slow' ? (
                                <div className="w-4 h-8 bg-white/60 rounded-sm"></div> // Pause icon
                            ) : (
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white/60 border-b-[6px] border-b-transparent ml-1"></div> // Play icon
                            )}
                            <span className="absolute -bottom-8 text-xs text-white/60">Slow Beat</span>
                        </div>
                    </div>

                    {/* Second Vinyl Record (front, overlapping) - spinning counter-clockwise - Regular version */}
                    <div
                        onClick={() => handleVinylClick('regular')}
                        className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/4 w-72 h-72 md:w-80 md:h-80 
                                  bg-black/60 backdrop-blur-md rounded-full shadow-2xl 
                                  border ${playingTrack === 'regular' ? 'border-white/40' : 'border-white/20'} 
                                  flex items-center justify-center ${playingTrack === 'regular' ? 'spin-fast-reverse vinyl-active' : 'vinyl-record'}
                                  cursor-pointer z-10`}
                    >
                        {/* Vinyl grooves */}
                        <div className="absolute inset-6 border border-white/15 rounded-full"></div>
                        <div className="absolute inset-12 border border-white/10 rounded-full"></div>
                        <div className="absolute inset-16 border border-white/10 rounded-full"></div>
                        <div className="absolute inset-20 border border-white/10 rounded-full"></div>
                        <div className="absolute inset-24 border border-white/10 rounded-full"></div>

                        {/* Completely transparent center hole */}
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center 
                                      border-none`}>
                            {playingTrack === 'regular' ? (
                                <div className="w-4 h-8 bg-white/60 rounded-sm"></div> // Pause icon
                            ) : (
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white/60 border-b-[6px] border-b-transparent ml-1"></div> // Play icon
                            )}
                            <span className="absolute -bottom-8 text-xs text-white/60">Original Mix</span>
                        </div>
                    </div>
                </div>
                {/* Playback status message */}
                <div className="text-center mt-6 h-6">
                    {playingTrack && (
                        <p className="text-sm text-white/70 animate-pulse">
                            Now playing: {playingTrack === 'slow' ? 'Roots of the Sun (Slow Beat)' : 'Roots of the Sun (Original)'}
                        </p>
                    )}
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full max-w-5xl mx-auto mt-24 md:mt-32 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">African Genres</h3>
                        <p className="text-gray-300">Create authentic Afrobeats, Amapiano, Highlife, Soukous, and traditional sounds with AI assistance.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">5 Languages</h3>
                        <p className="text-gray-300">Generate lyrics and vocals in Swahili, Yoruba, Zulu, Amharic, and Hausa with natural pronunciation.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">Cultural Authenticity</h3>
                        <p className="text-gray-300">AI trained on thousands of traditional and contemporary African music samples for genuine cultural expression.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="w-full bg-white/5 backdrop-blur-sm mt-24 md:mt-32 py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to create your <span className="font-medium">African sound?</span></h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of artists and producers using SunRoots.ai to explore new musical frontiers while honoring African musical heritage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200 min-w-[180px]">
                            Start Free Trial
                        </button>
                        <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 min-w-[180px]">
                            View Pricing
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full mt-16 pb-8">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {/* Column 1 */}
                        <div>
                            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Platform</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Create Music</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Explore</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Genres</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Languages</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Resources</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Tutorials</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">API</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Community</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Licensing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Copyright</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <circle cx="12" cy="12" r="3" fill="white" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">SunRoots.ai</span>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" aria-label="Twitter" className="text-white hover:text-white/80">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-white hover:text-white/80">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" aria-label="YouTube" className="text-white hover:text-white/80">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="text-center mt-8 text-xs text-gray-500">
                        © 2025 SunRoots.ai. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HeroSection;
