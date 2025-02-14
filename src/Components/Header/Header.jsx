import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'trending', icon: Flame, label: 'Trending' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'explore', icon: TrendingUp, label: 'Explore' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-violet-900 to-fuchsia-900 text-white border-b border-violet-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              BroCode
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search BroCode..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-full border border-violet-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {tabs.map(({ id, icon: Icon, label }) => (
              <Link
                key={id}
                to={`/${id}`}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                  activeTab === id
                    ? 'bg-violet-600 text-white'
                    : 'text-gray-300 hover:bg-violet-700 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Action Buttons */}
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-violet-700 transition-colors"
            >
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-violet-700 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-violet-500 p-2 rounded-full hover:opacity-90 transition-opacity">
              <Plus className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:bg-violet-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-violet-900 to-fuchsia-900 border-t border-violet-700 py-4">
            <div className="flex flex-col space-y-2">
              {tabs.map(({ id, icon: Icon, label }) => (
                <Link
                  key={id}
                  to={`/${id}`}
                  onClick={() => {
                    setActiveTab(id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium ${
                    activeTab === id
                      ? 'bg-violet-600 text-white'
                      : 'text-gray-300 hover:bg-violet-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer Component


export default Header;