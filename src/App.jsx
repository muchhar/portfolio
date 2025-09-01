import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Play, Star, Users, DollarSign, Trophy, Code, Cpu, Wallet, Database, Shield, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Solidity', icon: Code, color: 'text-blue-400' },
    { name: 'Smart Contracts', icon: Cpu, color: 'text-purple-400' },
    { name: 'React.js', icon: Code, color: 'text-cyan-400' },
    { name: 'DeFi', icon: DollarSign, color: 'text-green-400' },
    { name: 'NFTs', icon: Shield, color: 'text-pink-400' },
    { name: 'Web3.js', icon: Wallet, color: 'text-orange-400' },
    { name: 'IPFS', icon: Database, color: 'text-indigo-400' },
    { name: 'MetaMask', icon: Wallet, color: 'text-yellow-400' }
  ];

  const stats = [
    { label: 'Hours Worked', value: '1100+', icon: Zap },
    { label: 'Successful Projects', value: '22', icon: Trophy },
    { label: 'Total Earnings', value: '$30k+', icon: DollarSign },
    { label: 'Client Rating', value: 'Top Rated', icon: Star }
  ];

  const getYoutubeThumbnail = (url) => {
    const videoId = url.split('youtu.be/')[1] || url.split('v=')[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const projects = [
    {
      id: 1,
      title: 'NFT Minting DApp',
      subtitle: 'Solidity + React + IPFS',
      description: 'A demo NFT marketplace where users can list, buy, sell, and participate in auctions. Implements ERC721 standards, custom marketplace smart contracts, and a React.js frontend to simulate a real-world NFT trading platform.',
      videoUrl: 'https://youtu.be/ICG6IUC00WI',
      tags: ['Solidity', 'React.js', 'IPFS', 'ERC721', 'Web3.js'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'DeFi Staking Platform',
      subtitle: 'ERC20 + Rewards Contract',
      description: 'A decentralized staking platform where users lock ERC20 tokens for fixed periods and earn rewards. Features a reward calculation smart contract and frontend built with React.js and ethers.js for seamless Web3 interaction.',
      videoUrl: 'https://youtu.be/mn7u6MUkQ8I',
      tags: ['DeFi', 'ERC20', 'Staking', 'Smart Contracts', 'ethers.js'],
      gradient: 'from-green-500 to-blue-500'
    },
    {
      id: 3,
      title: 'MT5 Trading Analytics',
      subtitle: 'React + MetaAPI',
      description: 'A React.js web application integrated with MetaAPI to fetch live MetaTrader 5 (MT5) trading data, analyze performance, and visualize trade history with interactive charts and insights.',
      videoUrl: 'https://youtu.be/0fNRivc74BQ',
      tags: ['React.js', 'MetaAPI', 'Trading', 'Analytics', 'Charts'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'MetaMask Integration',
      subtitle: 'React.js + Web3 Wallet',
      description: 'A React.js demo project showcasing Web3 wallet connection using MetaMask. Provides wallet login, account switching, and balance display—serving as a foundation for blockchain-based applications.',
      videoUrl: 'https://youtu.be/I7a683nlc5E',
      tags: ['React.js', 'MetaMask', 'Web3', 'Wallet Integration'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-3">
              <img 
                src="/src/assets/profile_pic.jpeg" 
                alt="Muchhar Bharat"
                className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Muchhar Bharat
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Blockchain Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Specialized in NFT Marketplaces, DeFi Applications & Smart Contract Development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://www.upwork.com/freelancers/bharatm2" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Upwork Profile
            </a>
            <a 
              href="https://github.com/muchhar" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I am a Blockchain & NFT Marketplace Developer with expertise in Solidity, Smart Contracts, DeFi, and React.js. 
              With over 1100 hours worked, 22 successful projects, $30k+ earnings, and a Top Rated badge on Upwork, 
              I bring proven reliability and high-quality delivery to every project.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">🔹 What I Do</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Smart Contracts (Solidity) – ERC20, ERC721 (NFTs), ERC1155, custom tokens</li>
                  <li>• NFT Marketplace Development – minting, listing, auctions, royalties</li>
                  <li>• DeFi Applications – staking pools, yield farming, liquidity pools</li>
                  <li>• Frontend (React.js + Web3.js/ethers.js) – user-friendly dApps</li>
                  <li>• IPFS/Pinata Integration – decentralized storage</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">🔹 Why Work With Me</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ Proven Upwork Success – $30k+ earned, 22 jobs, Top Rated</li>
                  <li>✅ Full-Stack Blockchain Expertise – smart contracts to React.js UI</li>
                  <li>✅ Clean, Secure Code – well-documented and gas optimized</li>
                  <li>✅ On-Time Delivery & Support – reliable communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 text-center group"
              >
                <skill.icon className={`w-12 h-12 mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="font-semibold text-white">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 group"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="h-48 relative overflow-hidden bg-gray-800">
                  <img 
                    src={getYoutubeThumbnail(project.videoUrl)}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        
                      </div>
                      <div className="text-white font-semibold">Watch Demo</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 mb-3 font-medium">{project.subtitle}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Play size={16} />
                    Watch on YouTube
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-gray-700 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Build Your Next Blockchain Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need an NFT marketplace, DeFi app, or custom smart contract, 
              I can turn your vision into a fully functional, scalable, and secure blockchain application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.upwork.com/freelancers/bharatm2" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Hire Me on Upwork
              </a>
              <a 
                href="https://github.com/muchhar" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6">
              Ready to discuss your blockchain project? Let's build something amazing together!
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.upwork.com/freelancers/bharatm2" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Users size={24} />
            </a>
            <a 
              href="https://github.com/muchhar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 Muchhar Bharat. Blockchain Developer • Top Rated on Upwork
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-bounce hidden lg:block"></div>
      <div className="fixed top-1/2 right-10 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="fixed bottom-1/4 left-1/4 w-12 h-12 bg-cyan-500/10 rounded-full animate-ping hidden lg:block"></div>
    </div>
  );
};

export default Portfolio;