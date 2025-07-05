import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Brain, Database, Shield, Zap, Users, TrendingUp, Globe, Sparkles, ArrowRight, Play, CheckCircle, BarChart3, Lock, Coins, Bot, Activity, MessageSquare, Kanban, PieChart, Bell, Target, CircleDot as DragHandleDots2, TrendingDown, AlertTriangle, Clock, Eye, Search, UserCheck, Workflow, BarChart, Lightbulb, Monitor } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [splineApp, setSplineApp] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });

      // Control bot head rotation based on mouse position
      if (splineApp) {
        try {
          const botHead = splineApp.findObjectByName('Bot Head') || 
                         splineApp.findObjectByName('Head') || 
                         splineApp.findObjectByName('bot_head') ||
                         splineApp.findObjectByName('Robot Head');
          
          if (botHead) {
            // Smooth rotation based on mouse position
            const rotationX = y * 0.3; // Vertical mouse movement
            const rotationY = x * 0.5; // Horizontal mouse movement
            
            botHead.rotation.x = rotationX;
            botHead.rotation.y = rotationY;
          }
        } catch (error) {
          console.log('Bot head object not found or not accessible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations on load
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [splineApp]);

  const onLoad = (spline: any) => {
    setSplineApp(spline);
    
    // Try to find and configure the bot head for mouse tracking
    try {
      const possibleNames = ['Bot Head', 'Head', 'bot_head', 'Robot Head', 'Character Head', 'Main Head'];
      let botHead = null;
      
      for (const name of possibleNames) {
        botHead = spline.findObjectByName(name);
        if (botHead) break;
      }
      
      if (botHead) {
        console.log('Bot head found and ready for mouse tracking');
      } else {
        console.log('Bot head not found, mouse tracking disabled');
      }
    } catch (error) {
      console.log('Error setting up bot head tracking:', error);
    }
  };

  const keyProjects = [
    {
      icon: Activity,
      title: "On-Chain Event Indexer",
      description: "Real-time monitoring of ERC-20/ERC-721 transfers with custom alerts for high-value wallets",
      features: [
        "Real-time monitoring of ERC-20/ERC-721 transfers",
        "Custom alerts for high-value wallets"
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: MessageSquare,
      title: "Automated Outreach Engine",
      description: "Personalized DM sequences via Twitter & Telegram with AI-powered cadence optimization",
      features: [
        "Personalized DM sequences via Twitter & Telegram",
        "AI-powered cadence optimization"
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: Kanban,
      title: "Deal Pipeline Dashboard",
      description: "Drag-and-drop Kanban for active leads with rich contact profiles and on-chain history",
      features: [
        "Drag-and-drop Kanban for active leads",
        "Rich contact profiles with on-chain history"
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: PieChart,
      title: "Analytics & Insights",
      description: "Conversion funnels linked to blockchain activity with predictive deal-closure scoring",
      features: [
        "Conversion funnels linked to blockchain activity",
        "Predictive deal-closure scoring"
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/10 to-red-500/10"
    }
  ];

  const problems = [
    {
      problem: "Wallets are anonymous",
      impact: "Hard to qualify leads or assign ownership",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500"
    },
    {
      problem: "Manual outreach scale",
      impact: "Time-consuming, inconsistent follow-up",
      icon: Clock,
      color: "from-yellow-500 to-orange-500"
    },
    {
      problem: "Siloed data sources",
      impact: "Disjointed view of on-chain and off-chain",
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
      problem: "Low conversion visibility",
      impact: "No real-time deal forecasting",
      icon: Eye,
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const solutions = [
    {
      title: "Identity Enrichment",
      description: "Link wallets to social profiles and past deal history.",
      icon: UserCheck,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "AI-Driven Sequences",
      description: "Dynamically adjust follow-up timing & messaging.",
      icon: Bot,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Unified Dashboard",
      description: "Single pane of glass for on-chain events, outreach status, and pipeline health.",
      icon: Workflow,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-500/10 to-violet-500/10"
    },
    {
      title: "Predictive Analytics",
      description: "Machine-learning models surface hottest leads and likely deal closures.",
      icon: BarChart,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/10 to-red-500/10"
    }
  ];

  const visionPoints = [
    {
      icon: Database,
      title: "Unite on-chain data and CRM workflows",
      description: "Seamlessly integrate blockchain analytics with traditional customer relationship management for a complete view of your Web3 prospects."
    },
    {
      icon: Brain,
      title: "Democratize advanced deal-scoring models",
      description: "Make sophisticated AI-powered deal prediction accessible to teams of all sizes, leveling the playing field in Web3 sales."
    },
    {
      icon: Zap,
      title: "Drive adoption with no-code integrations",
      description: "Enable rapid deployment without technical barriers or complex setup processes, making Web3 CRM accessible to everyone."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Spline 3D Background - Fixed position, no mouse tracking */}
      <div className="fixed inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/yZQ6Wpx0q7UhaK67/scene.splinecode"
          onLoad={onLoad}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
      </div>

      {/* Floating Navigation Island */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Web3-CRM
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#problems" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Problems</a>
              <a href="#solutions" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Solutions</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Projects</a>
              <a href="#vision" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Vision</a>
              <a
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                href="https://docs.google.com/forms/d/e/1FAIpQLSceyxm9FQtPvWI0V2SwoynCq4PBr4Z0ujhRHdUPr1xgYDkxsw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Coming Soon Badge */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                  <span className="text-blue-400 font-semibold text-sm">🚀 AI-Web3-CRM Coming Soon</span>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Empower Your
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Web3 Business
                </span>
                <span className="text-4xl lg:text-5xl">with AI-Driven CRM</span>
              </h1>
              
              {/* Sub-headline */}
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Seamlessly track on-chain interactions, automate outreach, and close deals—all in one place. 
                The future of Web3 customer relationship management is here.
              </p>
              
              {/* CTA Button */}
              <div className="flex">
                <a
                className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                href="https://docs.google.com/forms/d/e/1FAIpQLSceyxm9FQtPvWI0V2SwoynCq4PBr4Z0ujhRHdUPr1xgYDkxsw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              </div>
            </div>

            {/* Right Column - Retro Computer Animation */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative perspective-1000">
                {/* Main Retro Computer */}
                <div 
                  className="relative w-full h-96 bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 transform-gpu transition-transform duration-700"
                  style={{
                    transform: `rotateX(${scrollY * 0.01}deg) rotateY(${scrollY * 0.02}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-amber-500/20 rounded-2xl" />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-xl mx-auto mb-4 flex items-center justify-center border border-green-400/50">
                        <Monitor className="w-8 h-8 text-green-400 animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-green-400 font-mono">SYSTEM ONLINE</h3>
                      <p className="text-green-300 font-mono text-sm">AI-Web3-CRM v2.0</p>
                      <div className="mt-4 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                      {/* Retro Terminal Lines */}
                      <div className="mt-6 text-left space-y-1">
                        <div className="text-green-400 font-mono text-xs">$ initializing web3_crm...</div>
                        <div className="text-green-400 font-mono text-xs">$ loading ai_modules...</div>
                        <div className="text-green-400 font-mono text-xs">$ connecting blockchain...</div>
                        <div className="text-green-400 font-mono text-xs animate-pulse">$ ready_for_launch</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-black/40 backdrop-blur-sm rounded-xl border border-green-500/30 animate-float flex items-center justify-center">
                  <Zap className="w-8 h-8 text-green-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/40 backdrop-blur-sm rounded-xl border border-amber-500/30 animate-float-delay flex items-center justify-center">
                  <Database className="w-8 h-8 text-amber-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section id="problems" className="py-20 bg-slate-800/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Problems We
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent block">
                Solve
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Web3 sales teams face unique challenges that traditional CRM systems can't address. 
              Here's how we're changing the game.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left p-6 text-lg font-semibold text-blue-400">Problem</th>
                  <th className="text-left p-6 text-lg font-semibold text-orange-400">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {problems.map((problem, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-700/30 last:border-b-0 hover:bg-slate-700/20 transition-colors duration-300"
                  >
                    <td className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                          <problem.icon className="w-6 h-6 text-white animate-pulse" />
                        </div>
                        <span className="text-lg font-medium text-white">{problem.problem}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="text-slate-300 leading-relaxed">{problem.impact}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-900/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge AI and blockchain technology working together to solve 
              the most pressing challenges in Web3 sales and customer management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300 flex-shrink-0 border border-white/20">
                      <solution.icon className="w-7 h-7 text-white group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  <div className="inline-flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects Showcase */}
      <section id="projects" className="py-20 bg-slate-800/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Key Projects
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Showcase
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the core components that make AI-Web3-CRM the most advanced 
              blockchain-native customer relationship management platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300 flex-shrink-0 border border-white/20">
                      <project.icon className="w-7 h-7 text-white group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0 animate-pulse" />
                        <span className="text-slate-300 group-hover:text-slate-200 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Coming Soon Badge */}
                  <div className="mt-6 inline-flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - The Highlight */}
      <section id="vision" className="py-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Vision Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-400 font-semibold text-lg">Our Vision</span>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    "Bring the power of AI to Web3 business development—
                  </span>
                  <br />
                  <span className="text-white">
                    no more anonymous wallets slipping through the cracks."
                  </span>
                </h3>
              </div>

              {/* Vision Points - 3 Distinct Sections */}
              <div className="space-y-12">
                {visionPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="group relative bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      {/* Animated Black Icon */}
                      <div className="relative">
                        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                          <point.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                        </div>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                          {point.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  </div>
                ))}
              </div>

              {/* Vision CTA */}
              <div className="text-center mt-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-white/20">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <span className="text-blue-400 font-semibold">Transforming Web3 Business Development</span>
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-white/20">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center border border-white/20">
              <Bot className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Web3 Sales?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join the waitlist and be among the first to experience the future of AI-powered Web3 CRM. 
            Revolutionary features are coming soon.
          </p>
          <div className="flex justify-center">
            <a
              className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              href="https://docs.google.com/forms/d/e/1FAIpQLSceyxm9FQtPvWI0V2SwoynCq4PBr4Z0ujhRHdUPr1xgYDkxsw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Web3-CRM
              </span>
            </div>
            <div className="text-slate-400">
              © 2025 AI-Web3-CRM. Powered by AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;