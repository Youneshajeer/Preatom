import React from 'react';
import { ExternalLink, Shield, Zap, Globe, Cpu, ArrowRight, DollarSign, Activity, Mail, Tag, Star } from 'lucide-react';

export default function PreatomLanding() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans antialiased overflow-x-hidden relative">
      
      {/* Background Graphic Elements - Premium Atomic Purple Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/15 via-black to-black blur-[130px] rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-[15%] -right-[15%] w-[55%] h-[55%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black blur-[150px] rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-[conic-gradient(from_0deg,_purple-900/8,_black_40%,_black_60%,_purple-900/8)] blur-[110px] rounded-full" />
      </div>

      {/* Structured Noise Overlay */}
      <div className="fixed inset-0 z-1 opacity-[0.012] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Navigation - Ultra Minimalist */}
      <nav className="relative z-10 flex justify-between items-center px-10 md:px-20 py-12 max-w-[98rem] mx-auto border-b border-white/5">
        <div className="text-xl font-bold tracking-[0.25em] uppercase select-none text-white">
          Pre<span className="text-purple-600">Atom</span>
        </div>
        <div className="flex gap-4 items-center">
             <a href="mailto:younes.hajeer@gmail.com" className="text-gray-500 hover:text-white/80 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium">
                <Mail size={16} strokeWidth={1} /> Contact Ownership
            </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 pt-20 pb-40 text-center">
        {/* Urgent Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/10 bg-purple-500/5 text-purple-400 text-[9px] uppercase tracking-[0.4em] mb-16 shadow-inner backdrop-blur-sm select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Global Strategic Acquisition Available
        </div>
        
        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-[-0.05em] mb-6 leading-[0.85] select-none text-white/95">
            Atomic <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-300 to-purple-900">Infrastructure.</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-14 text-gray-600 italic">
            Pre<span className="text-purple-500/40">Atom</span><span className="text-gray-800">.com</span>
          </h2>

          <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold tracking-tight text-white/90 mb-16 uppercase max-w-2xl mx-auto border-y border-white/5 py-6 backdrop-blur-3xl">
              <Star size={24} className="text-purple-600" /> FOR SALE <span className="text-gray-700">|</span> <span className="text-purple-400">IMMEDIATE TRANSFER</span> <Star size={24} className="text-purple-600" />
          </div>
          
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-16 font-light tracking-wide">
            The fundamental digital identity for the next era of high-scale computing. Efficient. Atomic. Indestructible. 
          </p>
        </div>

        {/* Acquisition Buttons - Balanced Size */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32 max-w-xl mx-auto">
          <a 
            href="https://www.afternic.com/domain/preatom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95 w-full sm:w-1/2 shadow-2xl shadow-purple-500/10"
          >
            <div className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-widest">
              BUY VIA AFTERNIC <Tag size={18} className="group-hover:rotate-[-10deg] transition-transform" />
            </div>
          </a>

          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-black border border-white/10 text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:bg-white/5 hover:border-white/20 hover:scale-[1.02] active:scale-95 w-full sm:w-1/2"
          >
            <div className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-widest">
              SECURE VIA SEDO <ExternalLink size={18} className="group-hover:opacity-70 transition-opacity" />
            </div>
          </a>
        </div>

        {/* Features Grid - Minimalist approach */}
        <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-3xl">
          {[
            { icon: <Activity size={24} />, title: 'Deep Tech Identity', desc: 'Built for the age of instant AI inference and pre-compute logic.' },
            { icon: <Shield size={24} />, title: 'Core Authority', desc: 'A foundation-level brand that radiates trust and granular protection.' },
            { icon: <Cpu size={24} />, title: 'Global Scale', desc: 'Seamlessly expandable from local clusters to global networks.' }
          ].map((item, idx) => (
            <div key={idx} className="p-12 text-left bg-black hover:bg-white/[0.01] transition-colors group border-b md:border-b-0 md:border-r border-white/5 last:border-0">
              <div className="text-purple-500 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-4 tracking-tight text-white/90">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.6em] text-gray-700 font-medium mb-6">
          © 2026 PREATOM.COM | PREMIUM TECHNOLOGY ASSET
        </p>
        <div className="flex justify-center gap-8 items-center">
            <a href="mailto:younes.hajeer@gmail.com" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase">
                <Globe size={16} strokeWidth={1} /> Contact Ownership
            </a>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase">Strategic Acquisition</span>
        </div>
      </footer>
    </div>
  );
}
