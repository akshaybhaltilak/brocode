import React, { useState } from 'react';
import {
    Menu,
    X,
    Home,
    Flame,
    Users,
    TrendingUp,
    Bell,
    MessageCircle,
    Plus,
    Search,
    Github,
    Twitter,
    Instagram,
    Youtube,
    Heart,
    Share2,
    Mail,
    ChevronRight,
    ArrowUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const footerLinks = {
        Company: ['About', 'Careers', 'Press', 'Blog', 'Team'],
        Product: ['Features', 'Premium', 'Mobile App', 'For Teams', 'Pricing'],
        Resources: ['Documentation', 'Guides', 'Help Center', 'Safety', 'Tutorials'],
        Policies: ['Terms', 'Privacy', 'Guidelines', 'Licensing', 'Cookies'],
    };

    const socialLinks = [
        { icon: Github, label: 'GitHub' },
        { icon: Twitter, label: 'Twitter' },
        { icon: Instagram, label: 'Instagram' },
        { icon: Youtube, label: 'YouTube' },
    ];
    
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            // Here you would typically send the email to your backend
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-violet-950 to-black text-gray-300 relative">
            {/* Wave SVG Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                          className="fill-gray-900"></path>
                </svg>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-violet-900/60 to-indigo-900/60 rounded-xl p-6 mb-12 backdrop-blur-sm border border-violet-800/30 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h3 className="text-xl font-bold text-white mb-2">Stay in the loop</h3>
                            <p className="text-gray-300 max-w-md">Get the latest BroCode updates, features, and promotions directly to your inbox.</p>
                        </div>
                        <div className="w-full md:w-auto">
                            {!isSubscribed ? (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="bg-gray-800/70 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 border border-gray-700"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-5 py-3 rounded-lg transition-all flex items-center justify-center"
                                    >
                                        Subscribe <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-green-900/30 text-green-400 px-4 py-3 rounded-lg border border-green-700/30 flex items-center">
                                    <span className="mr-2">✓</span> Thanks for subscribing!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            
                {/* Main Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-white mb-5 relative">
                                {category}
                                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-violet-500 -mb-2"></span>
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm hover:text-violet-400 transition-colors flex items-center group"
                                        >
                                            <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ChevronRight className="w-3 h-3 text-violet-400" />
                                            </span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider with gradient */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
                        {socialLinks.map(({ icon: Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                className="text-gray-400 hover:text-violet-400 transition-all transform hover:-translate-y-1 hover:scale-110"
                                aria-label={label}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <span className="text-sm">© 2025 BroCode. All rights reserved.</span>
                        <div className="flex items-center space-x-2 bg-gray-800/30 px-3 py-1 rounded-full">
                            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
                            <span className="text-sm">Made for Gen Z</span>
                        </div>
                    </div>
                </div>

                {/* Download Apps Section */}
                <div className="mt-8 flex flex-col items-center">
                    <p className="text-sm font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-300">Get the BroCode App</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#"
                            className="group bg-black px-6 py-2 rounded-lg border border-gray-700 hover:border-violet-500 transition-all transform hover:-translate-y-1"
                        >
                            <img
                                src="/api/placeholder/120/40"
                                alt="Download on App Store"
                                className="h-8 group-hover:opacity-90 transition-opacity"
                            />
                        </a>
                        <a
                            href="#"
                            className="group bg-black px-6 py-2 rounded-lg border border-gray-700 hover:border-violet-500 transition-all transform hover:-translate-y-1"
                        >
                            <img
                                src="/api/placeholder/135/40"
                                alt="Get it on Google Play"
                                className="h-8 group-hover:opacity-90 transition-opacity"
                            />
                        </a>
                    </div>
                </div>
                
                {/* Language Selector */}
                <div className="mt-8 flex justify-center">
                    <select className="bg-gray-800 text-gray-300 rounded-lg px-3 py-1 border border-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500">
                        <option value="en">English (US)</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="ja">日本語</option>
                    </select>
                </div>
            </div>
            
            {/* Back to top button */}
            <button 
                onClick={scrollToTop}
                className="absolute right-6 bottom-6 bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg transition-all hover:-translate-y-1"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
};

export default Footer;
