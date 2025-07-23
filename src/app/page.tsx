import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import {
  Shield,
  Zap,
  Users,
  Globe,
  Database,
  Smartphone,
  CheckCircle,
  Star,
  TrendingUp,
  Home,
  Coins,
  Brain,
  Lock,
  BarChart3,
  Wallet,
  Building,
  PieChart,
  ArrowRight,
  Play,
  Download,
  Apple,
  PlayCircle,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-300/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-cyan text-cyan-700 dark:text-cyan-300 text-sm font-medium border border-cyan-200 dark:border-cyan-800 hover-glow animate-bounce-gentle">
                <Coins className="w-4 h-4 mr-2 animate-rotate-slow" />
                Blockchain-Powered Real Estate Investment
                <Sparkles className="w-4 h-4 ml-2 text-cyan-500" />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                  Invest in Real Estate
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-100 animate-slide-in-left drop-shadow-md">
                  Starting at $100
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto animate-slide-in-right drop-shadow-sm">
                ChainEstate revolutionizes real estate investment through blockchain technology and AI analytics. 
                Own fractional shares of premium properties, earn monthly dividends, and build wealth with complete transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto animate-scale-in">
              <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 glass-card p-4 rounded-xl hover-lift">
                <CheckCircle className="w-5 h-5 text-cyan-500 animate-pulse" />
                <span className="font-medium">$100 Minimum Investment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 glass-card p-4 rounded-xl hover-lift">
                <CheckCircle className="w-5 h-5 text-cyan-500 animate-pulse" />
                <span className="font-medium">Monthly Dividends</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 glass-card p-4 rounded-xl hover-lift">
                <CheckCircle className="w-5 h-5 text-cyan-500 animate-pulse" />
                <span className="font-medium">AI-Powered Analytics</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="gradient-cyan hover:gradient-cyan-dark text-white px-8 py-4 text-lg shadow-cyan-lg hover:shadow-cyan hover-lift glow-cyan rounded-xl">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg glass-card hover-lift rounded-xl">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="pt-8 animate-slide-up">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Trusted by 10,000+ investors worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-80">
                <div className="text-2xl font-bold text-gradient-cyan hover-scale">$50M+</div>
                <div className="text-2xl font-bold text-gray-600 dark:text-gray-300 hover-scale">Properties</div>
                <div className="text-2xl font-bold text-gradient-cyan hover-scale">8.2%</div>
                <div className="text-2xl font-bold text-gray-600 dark:text-gray-300 hover-scale">Avg Yield</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Why Choose <span className="text-gradient-cyan">ChainEstate</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of real estate investment with our cutting-edge platform
              that combines blockchain security, AI analytics, and professional property management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 glass-card hover:shadow-cyan-lg transition-all duration-500 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800 group hover-lift animate-slide-in-left rounded-2xl">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900 rounded-2xl flex items-center justify-center group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-all duration-300 group-hover:shadow-cyan animate-float">
                  <Coins className="w-7 h-7 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  Fractional Ownership
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Own shares of premium real estate starting at just $100. Diversify your portfolio 
                  across multiple properties without the traditional barriers to entry.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 glass-card hover:shadow-cyan-lg transition-all duration-500 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800 group hover-lift animate-scale-in rounded-2xl">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900 transition-all duration-300 group-hover:shadow-cyan animate-float">
                  <Brain className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  AI-Powered Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Make informed decisions with our advanced AI that analyzes market trends, 
                  property values, and investment potential in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 glass-card hover:shadow-cyan-lg transition-all duration-500 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800 group hover-lift animate-slide-in-right rounded-2xl">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900 rounded-2xl flex items-center justify-center group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-all duration-300 group-hover:shadow-cyan animate-float">
                  <Shield className="w-7 h-7 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  Blockchain Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your investments are secured by XRPL blockchain technology, ensuring 
                  transparent, immutable, and secure property ownership records.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 glass-card hover:shadow-cyan-lg transition-all duration-500 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800 group hover-lift animate-slide-in-left rounded-2xl">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900 transition-all duration-300 group-hover:shadow-cyan animate-float">
                  <TrendingUp className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  Monthly Dividends
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive your share of rental income directly to your wallet every month. 
                  Enjoy passive income with complete transparency and automated distribution.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 glass-card hover:shadow-cyan-lg transition-all duration-500 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800 group hover-lift animate-scale-in rounded-2xl">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900 rounded-2xl flex items-center justify-center group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-all duration-300 group-hover:shadow-cyan animate-float">
                  <Building className="w-7 h-7 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  Professional Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our expert team handles everything from tenant screening to maintenance, 
                  so you can enjoy passive income without the hassle of property management.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 glass-card hover:shadow-cyan-lg transition-all duration-500 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800 group hover-lift animate-slide-in-right rounded-2xl">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900 transition-all duration-300 group-hover:shadow-cyan animate-float">
                  <PieChart className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  Portfolio Diversification
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Spread your investments across different property types and locations 
                  to minimize risk and maximize returns with our curated property selection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              How <span className="text-gradient-cyan">ChainEstate</span> Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes real estate investment accessible, transparent, and profitable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 animate-slide-in-left hover-lift">
              <div className="w-16 h-16 gradient-cyan rounded-full flex items-center justify-center mx-auto shadow-cyan-lg glow-cyan hover:glow-cyan-strong transition-all duration-300 animate-pulse-glow">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Browse Properties</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our curated selection of premium properties with detailed AI analytics and investment projections.
              </p>
            </div>

            <div className="text-center space-y-4 animate-scale-in hover-lift">
              <div className="w-16 h-16 bg-gray-600 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto shadow-lg hover:shadow-cyan-lg hover:bg-cyan-600 dark:hover:bg-cyan-600 transition-all duration-300 animate-pulse-glow">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Invest & Own</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Purchase fractional shares starting at $100 and become a verified property owner through blockchain technology.
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-in-right hover-lift">
              <div className="w-16 h-16 gradient-cyan rounded-full flex items-center justify-center mx-auto shadow-cyan-lg glow-cyan hover:glow-cyan-strong transition-all duration-300 animate-pulse-glow">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Earn Dividends</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive monthly rental income directly to your wallet, proportional to your ownership percentage.
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-up hover-lift">
              <div className="w-16 h-16 bg-gray-600 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto shadow-lg hover:shadow-cyan-lg hover:bg-cyan-600 dark:hover:bg-cyan-600 transition-all duration-300 animate-pulse-glow">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Track & Grow</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your portfolio performance with real-time analytics and participate in property sale decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="glass-card p-8 rounded-2xl hover-lift animate-slide-in-left hover:shadow-cyan-lg transition-all duration-300 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800">
              <div className="text-4xl font-bold text-gradient-cyan animate-pulse-glow mb-2">
                $50M+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Total Property Value</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-lift animate-scale-in hover:shadow-cyan-lg transition-all duration-300 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800">
              <div className="text-4xl font-bold text-gradient-cyan animate-pulse-glow mb-2">
                10K+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Active Investors</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-lift animate-scale-in hover:shadow-cyan-lg transition-all duration-300 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800">
              <div className="text-4xl font-bold text-gradient-cyan animate-pulse-glow mb-2">
                8.2%
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Average Annual Yield</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-lift animate-slide-in-right hover:shadow-cyan-lg transition-all duration-300 border-gray-100 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800">
              <div className="text-4xl font-bold text-gradient-cyan animate-pulse-glow mb-2">
                150+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Properties Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-cyan-500/20 via-transparent to-cyan-500/20 animate-rotate-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Start Investing <span className="text-gradient-cyan">Today</span>
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300">
              Download the ChainEstate app and begin your journey to building wealth through real estate investment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-4 text-lg shadow-cyan-lg hover:shadow-cyan hover-lift glow-cyan rounded-xl">
                <Apple className="w-6 h-6 mr-3" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="border-white dark:border-gray-300 text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900 px-8 py-4 text-lg glass hover-lift rounded-xl">
                <PlayCircle className="w-6 h-6 mr-3" />
                Download for Android
              </Button>
            </div>

            <div className="pt-8 text-sm text-gray-400 dark:text-gray-400 animate-bounce-gentle">
              Available on iOS and Android • Free to download • Start investing in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 glass-dark rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 animate-slide-in-left">
              <div className="flex items-center space-x-3 hover-scale">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/logo.png"
                    alt="ChainEstate Logo"
                    width={32}
                    height={32}
                    className="rounded-lg shadow-cyan"
                  />
                </div>
                <span className="text-xl font-bold text-gradient-cyan">ChainEstate</span>
              </div>
              <p className="text-gray-400 dark:text-gray-500">
                Democratizing real estate investment through blockchain technology and AI analytics.
              </p>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="font-semibold mb-4 text-cyan-400">Platform</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">How it Works</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Properties</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Analytics</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Portfolio</a></li>
              </ul>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="font-semibold mb-4 text-cyan-400">Company</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Press</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Contact</a></li>
              </ul>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="font-semibold mb-4 text-cyan-400">Legal</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Risk Disclosure</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover-lift">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500 animate-slide-up">
            <p>&copy; 2024 ChainEstate. All rights reserved. Securities offered through licensed broker-dealers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
