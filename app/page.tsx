import React from 'react';
import { ExternalLink, Shield, Zap, Globe, Cpu, ArrowRight, DollarSign, Activity, Mail } from 'lucide-react';

export default function PreatomLanding() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans antialiased overflow-x-hidden relative">
      
      {/* Background Graphic Elements - Ultra Premium Atomic Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/15 via-black to-black blur-[140px] rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-[conic-gradient(from_0deg,_purple-900/10,_black_40%,_black_60%,_purple-900/10)] blur-[100px] rounded-full" />
      </div>

      {/* Structured Noise Overlay for that "Paper" Texture */}
      <div className="fixed inset-0 z-1 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 md:px-16 py-10 max-w-[95rem] mx-auto">
        <div className="text-xl font-bold tracking-[0.2em] uppercase select-none text-white/90">
          Pre<span className="text-purple-600">atom</span>
        </div>
        <div className="flex gap-4 items-center">
             <div className="hidden sm:flex gap-2.5 items-center px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available for Transfer
             </div>
             <a href="mailto:younes.hajeer@gmail.com" className="p-2 hover:text-purple-500 transition-colors">
                <Mail size={20} strokeWidth={1.5} />
             </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 pt-16 pb-40 text-center">
        {/* Sale Notification Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] uppercase tracking-[0.4em] mb-16 shadow-2xl select-none backdrop-blur-sm">
          Premium Digital Asset
        </div>
        
        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-[-0.04em] mb-6 leading-[0.9] select-none text-white">
            Atomic <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-800 opacity-90">Intelligence.</span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 text-gray-500 italic">
            Preatom<span className="text-white/20">.com</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-16 font-light tracking-wide">
            The fundamental identity for the next era of high-scale computing. 
            Efficient. Atomic. Globally Scalable.
          </p>
        </div>

        {/* Acquisition Buttons - Balanced Size */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-32 max-w-xl mx-auto">
          <a 
            href="https://www.afternic.com/domain/preatom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95 w-full sm:w-1/2 shadow-2xl shadow-purple-500/10"
          >
            <div className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-widest">
              BUY ON AFTERNIC <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
            { icon: <Activity size={24} />, title: 'Pre-Compute Logic', desc: 'Engineered for sub-millisecond AI inference at the edge.' },
            { icon: <Shield size={24} />, title: 'Inherent Trust', desc: 'A foundation-level brand name that radiates authority.' },
            { icon: <Cpu size={24} />, title: 'Infinite Scale', desc: 'Perfectly suited for global hardware or software infrastructure.' }
          ].map((item, idx) => (
            <div key={idx} className="p-12 text-left bg-black hover:bg-white/[0.01] transition-colors group">
              <div className="text-purple-500 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-4 tracking-tight text-white/90">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 items-center mb-8">
            <a href="mailto:younes.hajeer@gmail.com" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase">
                <Globe size={16} strokeWidth={1} /> Contact Ownership
            </a>
        </div>
        <p className="text-[9px] uppercase tracking-[0.6em] text-gray-700 font-medium">
          © 2026 PREATOM.COM | A HIGH-VALUE TECHNOLOGY ASSET
        </p>
      </footer>
    </div>
  );
}
