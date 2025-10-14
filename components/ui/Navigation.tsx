"use client";

import { useState } from "react";
import { handleSignIn, handleSignOut } from "@/app/actions";

interface NavigationProps {
  session: any;
}

export function Navigation({ session }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Udhbav
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </a>

            {/* Auth Button */}
            {session?.user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                  Welcome, {session.user.name || session.user.email}
                </span>
                <form action={handleSignOut}>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </form>
              </div>
            ) : (
              <form action={handleSignIn}>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-200"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 border border-gray-700">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400"
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400"
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                {session?.user ? (
                  <form action={handleSignOut}>
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      Sign Out
                    </button>
                  </form>
                ) : (
                  <form action={handleSignIn}>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Sign In
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
