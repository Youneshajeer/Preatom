import React from 'react';
import { ExternalLink, Shield, Zap, Globe, Cpu, ArrowRight, DollarSign, Activity } from 'lucide-react';

export default function PreatomLanding() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans antialiased overflow-x-hidden relative">
      
      {/* Background Graphic Elements - Atomic Purple Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/25 via-black to-black blur-[140px] rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-[20%] -right-[15%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/15 via-black to-black blur-[160px] rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[conic-gradient(from_0deg,_purple-950/10,_black_40%,_black_60%,_purple-950/10)] blur-[120px] rounded-full" />
      </div>

      {/* Structured Noise Overlay */}
      <div className="fixed inset-0 z-1 opacity-[0.012] pointer-events-none bg-[url('/noise.svg')] bg-repeat" />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8 max-w-[90rem] mx-auto border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter italic select-none text-white">
          Pre<span className="text-purple-500">atom</span>
        </div>
        <div className="flex gap-2.5 items-center px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[11px] uppercase tracking-[0.25em] font-medium shadow-inner-dark">
          <DollarSign size={14} className="animate-pulse" /> Asset Acquisition Ready
        </div>
      </nav>

      <main className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 pt-28 pb-40 text-center">
        {/* Sale Notification Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[11px] uppercase tracking-[0.3em] mb-12 shadow-2xl shadow-purple-950/20 select-none">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
          </span>
          Next-Gen Infrastructure Domain Available
        </div>
        
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter mb-4 leading-none select-none">
            ATOMIC <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-purple-500 to-purple-700 animate-gradient-y">CORE.</span>
          </h1>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black tracking-tighter mb-10 leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-purple-500 to-purple-700 animate-gradient-y">
            Preatom<span className="text-white">.com</span>
          </h2>

          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-10 max-w-3xl mx-auto leading-tight uppercase">
             Global Brand <span className="text-purple-400">For Acquisition</span>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-20 font-light">
            The fundamental identity for pre-compute logic and atomic-scale intelligence. 
            Designed for high-impact technology leaders.
          </p>
        </div>

        {/* Acquisition Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-28 max-w-2xl mx-auto">
          <a 
            href="https://www.afternic.com/domain/preatom.com"
            target="_blank"
            className="group relative px-12 py-5.5 bg-black border-2 border-white/20 text-white font-extrabold rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:scale-105 active:scale-95 w-full sm:w-1/2 shadow-xl shadow-black/40"
          >
            <div className="relative z-10 flex items-center justify-center gap-3 text-base tracking-tight">
              BUY ON AFTERNIC <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
            </div>
          </a>

          <a 
            href="https://sedo.com/search/details/?domain=preatom.com&origin=domaindetails"
            target="_blank"
            className="group relative px-12 py-5.5 bg-white text-black font-extrabold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-1/2 shadow-2xl shadow-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-center gap-3 text-base tracking-tight">
              ACQUIRE VIA SEDO <ExternalLink size={22} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-white/10 bg-white/[0.03] rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl shadow-black/70">
          {[
            { icon: <Activity size={30} />, title: 'Pre-Compute Ready', desc: 'Built for the age of instant AI inference and data preprocessing.' },
            { icon: <Shield size={30} />, title: 'Core Security', desc: 'A foundation-level brand that radiates trust and granular protection.' },
            { icon: <Cpu size={30} />, title: 'Deep Tech Identity', desc: 'Short, memorable, and future-proof. Perfect for hardware or software.' }
          ].map((item, idx) => (
            <div key={idx} className="p-14 text-left hover:bg-white/[0.02] transition-colors border-b md:border-b-0 md:border-r border-white/10 last:border-0 group">
              <div className="text-purple-500 mb-10 bg-purple-950/30 inline-flex p-5 rounded-2xl border border-purple-500/20 shadow-inner group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-5 tracking-tight text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 py-20 border-t border-white/5 text-center bg-black/60 backdrop-blur-md">
        <p className="text-[11px] uppercase tracking-[0.5em] text-gray-600 mb-6 font-medium">
          © 2026 PREATOM.COM | PREMIUM DIGITAL ASSET
        </p>
        <div className="flex justify-center gap-10 items-center">
          <a href="mailto:younes.hajeer@gmail.com" className="text-gray-500 hover:text-white transition-all hover:scale-110 p-2.5">
            <Globe size={24} />
          </a>
          <div className="h-5 w-px bg-white/10" />
          <span className="text-purple-500 text-sm font-bold tracking-wider uppercase">Strategic Acquisition</span>
        </div>
      </footer>
    </div>
  );
}