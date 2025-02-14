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
    Share2
  } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const footerLinks = {
        Company: ['About', 'Careers', 'Press', 'Blog'],
        Product: ['Features', 'Premium', 'Mobile App', 'For Teams'],
        Resources: ['Documentation', 'Guides', 'Help Center', 'Safety'],
        Policies: ['Terms', 'Privacy', 'Guidelines', 'Licensing'],
    };

    const socialLinks = [
        { icon: Github, label: 'GitHub' },
        { icon: Twitter, label: 'Twitter' },
        { icon: Instagram, label: 'Instagram' },
        { icon: Youtube, label: 'YouTube' },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm hover:text-violet-400 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                        {socialLinks.map(({ icon: Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                className="text-gray-400 hover:text-violet-400 transition-colors"
                                aria-label={label}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-sm">© 2025 BroCode. All rights reserved.</span>
                        <div className="flex items-center space-x-2">
                            <Heart className="w-4 h-4 text-pink-500" />
                            <span className="text-sm">Made for Gen Z</span>
                        </div>
                    </div>
                </div>

                {/* Download Apps Section */}
                <div className="mt-8 flex flex-col items-center">
                    <p className="text-sm font-medium mb-4">Get the BroCode App</p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="bg-black px-6 py-2 rounded-lg border border-gray-700 hover:border-violet-500 transition-colors"
                        >
                            <img
                                src="/api/placeholder/120/40"
                                alt="Download on App Store"
                                className="h-8"
                            />
                        </a>
                        <a
                            href="#"
                            className="bg-black px-6 py-2 rounded-lg border border-gray-700 hover:border-violet-500 transition-colors"
                        >
                            <img
                                src="/api/placeholder/135/40"
                                alt="Get it on Google Play"
                                className="h-8"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;