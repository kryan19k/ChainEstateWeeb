"use client"

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20 shadow-lg shadow-black/5 dark:shadow-black/20 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 hover-scale">
            <div className="w-10 h-10 relative animate-pulse-glow">
              <Image
                src="/logo.png"
                alt="ChainEstate Logo"
                width={40}
                height={40}
                className="rounded-lg shadow-cyan"
              />
            </div>
            <span className="text-2xl font-bold text-gradient-cyan">
              ChainEstate
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium hover-lift">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium hover-lift">
              How It Works
            </a>
            <a href="#properties" className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium hover-lift">
              Properties
            </a>
            <a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium hover-lift">
              Download
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden md:inline-flex border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300 hover-glow rounded-lg">
              Sign In
            </Button>
            <Button className="gradient-cyan hover:gradient-cyan-dark transition-all duration-300 shadow-cyan hover:shadow-cyan-lg hover-lift rounded-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 