import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { PixelImage } from '@/components/magicui/pixel-image';
import { Ripple } from '@/components/ripple';
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
        
        {/* Ripple Effect */}
        <Ripple 
          mainCircleSize={180}
          mainCircleOpacity={0.45}
          numCircles={10}
          
          className="absolute inset-0 opacity-60 dark:opacity-40"
        />
        
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

      {/* How It Works Section - PRYPCO Style */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/15 dark:bg-cyan-400/8 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              It's really this <span className="text-gradient-cyan">simple</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
            {/* Step 01 - Invest */}
            <div className="text-center lg:text-left space-y-6 animate-slide-in-left">
              <div className="space-y-4">
                <div className="text-7xl font-bold text-cyan-400/40 dark:text-cyan-400/30">01.</div>
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Invest</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Browse our expertly curated portfolio and invest in tokenized real estate properties starting from just $100.
                </p>
              </div>
              
              {/* Mobile Mockup */}
              <div className="flex justify-center lg:justify-start mt-8">
                <div className="relative">
                  <div className="w-72 h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl shadow-cyan-500/20 animate-float border border-gray-700">
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] relative overflow-hidden">
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 pt-4 pb-2">
                        <span className="text-white text-sm font-medium">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Screen content - Property Investment */}
                      <div className="px-6 py-4">
                        <h4 className="text-white text-xl font-bold mb-6">Featured Properties</h4>
                        
                        <div className="bg-gray-600 dark:bg-gray-700 rounded-xl p-4 mb-4 hover:bg-gray-500 dark:hover:bg-gray-600 transition-colors">
                          <div className="w-full h-32 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg mb-3 flex items-center justify-center">
                            <Building className="w-8 h-8 text-white" />
                          </div>
                          <h5 className="text-white font-semibold">Manhattan Apartment</h5>
                          <p className="text-gray-200 dark:text-gray-300 text-sm">2 Bedroom Studio Apartment</p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-cyan-400 font-bold">$250</span>
                            <span className="text-gray-300 dark:text-gray-400 text-sm">Min. Investment</span>
                          </div>
                        </div>

                        <div className="bg-cyan-600 rounded-xl p-4 text-center">
                          <span className="text-white font-semibold">Invest Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 02 - Earn */}
            <div className="text-center lg:text-left space-y-6 animate-scale-in">
              <div className="space-y-4">
                <div className="text-7xl font-bold text-cyan-400/40 dark:text-cyan-400/30">02.</div>
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Earn</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Receive returns from monthly rental income and capital appreciation, directly in your ChainEstate Wallet.
                </p>
              </div>
              
              {/* Mobile Mockup */}
              <div className="flex justify-center lg:justify-start mt-8">
                <div className="relative">
                  <div className="w-72 h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl shadow-cyan-500/20 animate-float border border-gray-700">
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] relative overflow-hidden">
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 pt-4 pb-2">
                        <span className="text-white text-sm font-medium">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Screen content - Wallet */}
                      <div className="px-6 py-4">
                        <div className="text-center mb-6">
                          <p className="text-gray-400 text-sm">Total balance</p>
                          <h4 className="text-white text-4xl font-bold">$12,850.00</h4>
                        </div>
                        
                        <div className="flex space-x-4 mb-6">
                          <div className="flex-1 bg-gray-700 rounded-xl p-3 text-center">
                            <Wallet className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                            <span className="text-white text-sm">Withdraw</span>
                          </div>
                          <div className="flex-1 bg-cyan-600 rounded-xl p-3 text-center">
                            <TrendingUp className="w-6 h-6 text-white mx-auto mb-1" />
                            <span className="text-white text-sm">Reinvest</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="text-white font-semibold">My earnings</h5>
                          <div className="bg-gray-700 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-300 text-sm">December 2024</span>
                              <span className="text-cyan-400 font-semibold">+$420.50</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300 text-sm">Net returns to date</span>
                              <span className="text-green-400 font-semibold">8.9%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 03 - Track */}
            <div className="text-center lg:text-left space-y-6 animate-slide-in-right">
              <div className="space-y-4">
                <div className="text-7xl font-bold text-cyan-400/40 dark:text-cyan-400/30">03.</div>
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Track</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Easily track your portfolio on the ChainEstate platform, with real-time analytics and flexible investment options.
                </p>
              </div>
              
              {/* Mobile Mockup */}
              <div className="flex justify-center lg:justify-start mt-8">
                <div className="relative">
                  <div className="w-72 h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl shadow-cyan-500/20 animate-float border border-gray-700">
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] relative overflow-hidden">
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 pt-4 pb-2">
                        <span className="text-white text-sm font-medium">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Screen content - Portfolio */}
                      <div className="px-6 py-4">
                        <div className="mb-6">
                          <div className="w-full h-24 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg mb-3 flex items-center justify-center">
                            <Home className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-white text-lg font-bold">Premium 3-bedroom apartment</h4>
                          <p className="text-gray-300 text-sm">Apartment • Miami • 1,400 sqft</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Current valuation</span>
                            <span className="text-cyan-400 font-bold">$1,850,000</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Amount invested</span>
                            <span className="text-white font-semibold">$10,000</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Net returns to date</span>
                            <span className="text-green-400 font-semibold">↗ 12.3%</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Total earnings to date</span>
                            <span className="text-cyan-400 font-bold">$1,230</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                  {/* Portfolio Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-cyan-400/15 dark:bg-cyan-400/8 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Central Content */}
          <div className="text-center space-y-8 mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Explore our <span className="text-gradient-cyan">investment</span><br />
              <span className="text-green-500 dark:text-green-400">opportunities</span>
            </h2>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-semibold flex items-center justify-center space-x-3 hover-lift shadow-2xl"
                aria-label="Explore more investment properties in our portfolio"
              >
                <span>Explore more</span>
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
              </Button>
            </div>
          </div>

           {/* Property Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
             
             {/* Property Card 1 */}
             <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-2xl hover:shadow-cyan-lg dark:hover:shadow-cyan-lg/50 transition-all duration-500 hover:-translate-y-2 animate-slide-in-left w-full border border-gray-200 dark:border-gray-700" role="img" aria-labelledby="property-1-title">
               <div className="mb-4">
                 <div className="w-full h-48 lg:h-56 overflow-hidden rounded-2xl">
                   <PixelImage
                     src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
                     grid="6x4"
                     grayscaleAnimation={true}
                     pixelFadeInDuration={800}
                     maxAnimationDelay={1000}
                   />
                 </div>
               </div>
               <div className="space-y-3">
                 <div className="flex items-center space-x-2">
                   <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                     </svg>
                   </div>
                   <span className="text-gray-600 dark:text-gray-400 text-sm font-medium" id="property-1-title">Manhattan District</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">2 bedroom apartment</h3>
                 <div className="flex justify-between text-sm pt-2">
                   <span className="text-cyan-600 dark:text-cyan-400 font-semibold">14.2% Projected ROI</span>
                   <span className="text-green-600 dark:text-green-400 font-semibold">8.9% Gross yield</span>
                 </div>
               </div>
             </div>

             {/* Property Card 2 */}
             <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-2xl hover:shadow-cyan-lg dark:hover:shadow-cyan-lg/50 transition-all duration-500 hover:-translate-y-2 animate-scale-in w-full border border-gray-200 dark:border-gray-700" role="img" aria-labelledby="property-2-title">
               <div className="mb-4">
                 <div className="w-full h-48 lg:h-56 overflow-hidden rounded-2xl">
                   <PixelImage
                     src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
                     grid="6x4"
                     grayscaleAnimation={true}
                     pixelFadeInDuration={800}
                     maxAnimationDelay={1000}
                     colorRevealDelay={1500}
                   />
                 </div>
               </div>
               <div className="space-y-3">
                 <div className="flex items-center space-x-2">
                   <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                     </svg>
                   </div>
                   <span className="text-gray-600 dark:text-gray-400 text-sm font-medium" id="property-2-title">Miami Beachfront</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">3 bedroom apartment</h3>
                 <div className="flex justify-between text-sm pt-2">
                   <span className="text-cyan-600 dark:text-cyan-400 font-semibold">11.7% Projected ROI</span>
                   <span className="text-green-600 dark:text-green-400 font-semibold">7.2% Gross yield</span>
                 </div>
               </div>
             </div>

             {/* Property Card 3 */}
             <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-2xl hover:shadow-cyan-lg dark:hover:shadow-cyan-lg/50 transition-all duration-500 hover:-translate-y-2 animate-scale-in w-full border border-gray-200 dark:border-gray-700" role="img" aria-labelledby="property-3-title">
               <div className="mb-4">
                 <div className="w-full h-48 lg:h-56 overflow-hidden rounded-2xl">
                   <PixelImage
                     src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
                     grid="6x4"
                     grayscaleAnimation={true}
                     pixelFadeInDuration={800}
                     maxAnimationDelay={1000}
                     colorRevealDelay={2000}
                   />
                 </div>
               </div>
               <div className="space-y-3">
                 <div className="flex items-center space-x-2">
                   <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                     </svg>
                   </div>
                   <span className="text-gray-600 dark:text-gray-400 text-sm font-medium" id="property-3-title">Austin Tech Hub</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">2 bedroom apartment</h3>
                 <div className="flex justify-between text-sm pt-2">
                   <span className="text-cyan-600 dark:text-cyan-400 font-semibold">13.1% Projected ROI</span>
                   <span className="text-green-600 dark:text-green-400 font-semibold">9.5% Gross yield</span>
                 </div>
               </div>
             </div>

             {/* Property Card 4 */}
             <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-2xl hover:shadow-cyan-lg dark:hover:shadow-cyan-lg/50 transition-all duration-500 hover:-translate-y-2 animate-slide-in-right w-full border border-gray-200 dark:border-gray-700" role="img" aria-labelledby="property-4-title">
               <div className="mb-4">
                 <div className="w-full h-48 lg:h-56 overflow-hidden rounded-2xl">
                   <PixelImage
                     src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
                     grid="6x4"
                     grayscaleAnimation={true}
                     pixelFadeInDuration={800}
                     maxAnimationDelay={1000}
                     colorRevealDelay={2500}
                   />
                 </div>
               </div>
               <div className="space-y-3">
                 <div className="flex items-center space-x-2">
                   <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                     </svg>
                   </div>
                   <span className="text-gray-600 dark:text-gray-400 text-sm font-medium" id="property-4-title">Denver Downtown</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">1 bedroom apartment</h3>
                 <div className="flex justify-between text-sm pt-2">
                   <span className="text-cyan-600 dark:text-cyan-400 font-semibold">12.6% Projected ROI</span>
                   <span className="text-green-600 dark:text-green-400 font-semibold">8.1% Gross yield</span>
                 </div>
               </div>
             </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-400/8 dark:bg-cyan-400/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8 rounded-2xl hover-lift animate-slide-in-left transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-gradient-cyan mb-2">
                $50M+
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Total Property Value</p>
            </div>
            <div className="p-8 rounded-2xl hover-lift animate-scale-in transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-gradient-cyan mb-2">
                10K+
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Active Investors</p>
            </div>
            <div className="p-8 rounded-2xl hover-lift animate-scale-in transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-gradient-cyan mb-2">
                8.2%
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Average Annual Yield</p>
            </div>
            <div className="p-8 rounded-2xl hover-lift animate-slide-in-right transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-gradient-cyan mb-2">
                150+
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Properties Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-cyan-900 dark:to-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-cyan-500/20 via-transparent to-cyan-500/20 animate-rotate-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Start Investing <span className="text-gradient-cyan">Today</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Download the ChainEstate app and begin your journey to building wealth through real estate investment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-cyan hover:gradient-cyan-dark text-white px-8 py-4 text-lg shadow-cyan-lg hover:shadow-cyan hover-lift glow-cyan rounded-xl">
                <Apple className="w-6 h-6 mr-3" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 dark:border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 px-8 py-4 text-lg glass hover-lift rounded-xl">
                <PlayCircle className="w-6 h-6 mr-3" />
                Download for Android
              </Button>
            </div>

            <div className="pt-8 text-sm text-gray-600 dark:text-gray-400 animate-bounce-gentle">
              Available on iOS and Android • Free to download • Start investing in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-12 border-t border-gray-200 dark:border-gray-800 rounded-none">
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
                    className="rounded-lg"
                  />
                </div>
                <span className="text-xl font-bold text-gradient-cyan">ChainEstate</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Democratizing real estate investment through blockchain technology and AI analytics.
              </p>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="font-semibold mb-4 text-cyan-600 dark:text-cyan-400">Platform</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">How it Works</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Properties</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Analytics</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Portfolio</a></li>
              </ul>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="font-semibold mb-4 text-cyan-600 dark:text-cyan-400">Company</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Press</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Contact</a></li>
              </ul>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="font-semibold mb-4 text-cyan-600 dark:text-cyan-400">Legal</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Risk Disclosure</a></li>
                <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400 animate-slide-up">
            <p>&copy; 2024 ChainEstate. All rights reserved. Securities offered through licensed broker-dealers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
