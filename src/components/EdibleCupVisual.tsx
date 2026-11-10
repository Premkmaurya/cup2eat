import { useState } from 'react';
import { Sparkles, Coffee, Droplets } from 'lucide-react';

interface EdibleCupVisualProps {
  className?: string;
}

export const EdibleCupVisual: React.FC<EdibleCupVisualProps> = ({ className = '' }) => {
  const [beverageMode, setBeverageMode] = useState<'coffee' | 'dessert'>('coffee');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Circular Line Motif in Gold */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-gold/25 animate-[spin_60s_linear_infinite]" />
        <div className="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] rounded-full border border-forest/10 border-dashed" />
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-tr from-gold/10 via-cream-muted/30 to-transparent blur-2xl -z-10" />
      </div>

      {/* Main Cup Illustration Container */}
      <div className="relative w-[300px] sm:w-[380px] h-[380px] sm:h-[440px] flex items-center justify-center transition-transform duration-700 ease-luxury">
        
        {/* Ground Shadow & Ambient Studio Occlusion */}
        <div className="absolute bottom-6 w-[220px] sm:w-[260px] h-[36px] bg-forest/20 rounded-[100%] blur-xl transform scale-y-50" />
        <div className="absolute bottom-8 w-[170px] sm:w-[200px] h-[20px] bg-deep/35 rounded-[100%] blur-md transform scale-y-40" />

        {/* SVG Edible Cup Artwork */}
        <svg
          viewBox="0 0 320 380"
          className="w-full h-full drop-shadow-2xl transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'translateY(-6px) rotate(-0.5deg)' : 'translateY(0px)',
          }}
          aria-label="CUP2EAT Edible Cup visual mockup"
          role="img"
        >
          <defs>
            {/* Baked Wafer Biscuit Outer Gradient */}
            <linearGradient id="waferBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A532B" />
              <stop offset="25%" stopColor="#C48951" />
              <stop offset="55%" stopColor="#E2AE72" />
              <stop offset="85%" stopColor="#B3773F" />
              <stop offset="100%" stopColor="#6E3D1D" />
            </linearGradient>

            {/* Inner Cup Shading */}
            <linearGradient id="innerCavityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A170B" />
              <stop offset="100%" stopColor="#4A2812" />
            </linearGradient>

            {/* Coffee / Beverage Surface */}
            <radialGradient id="coffeeCrema" cx="48%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4A373" />
              <stop offset="40%" stopColor="#9C6644" />
              <stop offset="80%" stopColor="#43281C" />
              <stop offset="100%" stopColor="#25140C" />
            </radialGradient>

            {/* Chocolate / Dessert Surface */}
            <radialGradient id="dessertCrema" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6F4E37" />
              <stop offset="65%" stopColor="#3D2314" />
              <stop offset="100%" stopColor="#201108" />
            </radialGradient>

            {/* Wafer Crosshatch Texture Pattern */}
            <pattern id="waferCrosshatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="14" y2="0" stroke="#7A421C" strokeWidth="1.2" opacity="0.35" />
              <line x1="0" y1="0" x2="0" y2="14" stroke="#7A421C" strokeWidth="1.2" opacity="0.35" />
              <circle cx="7" cy="7" r="0.8" fill="#F4D0A4" opacity="0.5" />
            </pattern>

            {/* Studio Rim Light */}
            <linearGradient id="rimSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#E2AE72" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Steam / Warmth Vapor (Subtle organic animation) */}
          <g className="transition-opacity duration-700" style={{ opacity: beverageMode === 'coffee' ? 0.75 : 0.2 }}>
            <path
              d="M140 75 C135 55 148 40 142 22"
              fill="none"
              stroke="#D6A84F"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M165 72 C172 52 160 38 168 18"
              fill="none"
              stroke="#F7F3E8"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M188 78 C182 60 192 48 186 30"
              fill="none"
              stroke="#D6A84F"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.35"
            />
          </g>

          {/* MAIN CUP BODY */}
          <g>
            {/* Outer Edible Tapered Body */}
            <path
              d="M 62 90 
                 L 258 90 
                 L 226 312 
                 C 224 326 210 334 194 334 
                 L 126 334 
                 C 110 334 96 326 94 312 
                 Z"
              fill="url(#waferBodyGrad)"
            />

            {/* Crosshatch Baked Wafer Texture Overlay */}
            <path
              d="M 63 91 
                 L 257 91 
                 L 225 311 
                 C 223 325 209 333 194 333 
                 L 126 333 
                 C 111 333 97 325 95 311 
                 Z"
              fill="url(#waferCrosshatch)"
              style={{ mixBlendMode: 'multiply' }}
            />

            {/* Baked Artisan Shading & Embossed Ribbing Bands */}
            <path d="M 66 120 Q 160 135 254 120" stroke="#7A421C" strokeWidth="2.5" fill="none" opacity="0.4" />
            <path d="M 72 170 Q 160 185 248 170" stroke="#7A421C" strokeWidth="2" fill="none" opacity="0.35" />
            <path d="M 78 220 Q 160 234 242 220" stroke="#7A421C" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M 85 270 Q 160 282 235 270" stroke="#7A421C" strokeWidth="1.5" fill="none" opacity="0.25" />

            {/* Specular Edge Highlight on Left Flank */}
            <path
              d="M 64 94 L 95 312"
              stroke="url(#rimSpecular)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* CUP RIM & INTERIOR LIQUID */}
            {/* Top Outer Rim Ring (The Crisp Baked Lip) */}
            <ellipse cx="160" cy="90" rx="98" ry="26" fill="#9C6436" stroke="#683918" strokeWidth="2" />
            
            {/* Internal Edible Lining (Chocolate / Protective Grain Barrier) */}
            <ellipse cx="160" cy="92" rx="90" ry="22" fill="url(#innerCavityGrad)" />

            {/* Liquid Surface */}
            <ellipse
              cx="160"
              cy="95"
              rx="84"
              ry="19"
              fill={beverageMode === 'coffee' ? 'url(#coffeeCrema)' : 'url(#dessertCrema)'}
              className="transition-colors duration-700"
            />

            {/* Crema Swirl / Latte Art Accent */}
            <g opacity="0.8">
              <ellipse cx="158" cy="95" rx="36" ry="7" fill="#EAD2AC" opacity="0.35" />
              <path
                d="M 135 95 Q 160 99 185 95"
                stroke="#FDF0D5"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.75"
              />
            </g>

            {/* Lip Specular Sheen */}
            <ellipse cx="160" cy="88" rx="95" ry="24" fill="none" stroke="url(#rimSpecular)" strokeWidth="2.5" opacity="0.7" />

            {/* Discreet Embossed Brand Monogram on Cup Body */}
            <g transform="translate(160, 205)" opacity="0.55">
              <circle cx="0" cy="0" r="24" stroke="#4A250D" strokeWidth="1.2" fill="none" />
              <circle cx="0" cy="0" r="22" stroke="#E2AE72" strokeWidth="0.8" strokeDasharray="2 3" fill="none" />
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fontSize="8.5"
                fontFamily="Manrope, sans-serif"
                fontWeight="700"
                letterSpacing="1.5"
                fill="#3A1D0A"
              >
                CUP2EAT
              </text>
            </g>

            {/* Natural baked bite silhouette hint on upper right corner (optional visual proof) */}
            <circle cx="254" cy="88" r="8" fill="#F7F3E8" opacity="0.9" />
            <circle cx="254" cy="88" r="8" fill="none" stroke="#B87D4B" strokeWidth="1.5" />
          </g>
        </svg>

        {/* Floating Restrained Visual Details: SIP Label */}
        <div 
          className="absolute -left-3 sm:-left-8 top-16 bg-cream-soft/95 backdrop-blur-md border border-forest/15 px-3 py-1.5 rounded-full shadow-warm-md flex items-center gap-2 transform transition-all duration-500"
          style={{ transform: isHovered ? 'translateX(-4px)' : 'translateX(0)' }}
        >
          <div className="w-2 h-2 rounded-full bg-forest animate-pulse" />
          <span className="text-xs font-heading font-semibold tracking-wider text-forest uppercase">
            01 · SIP
          </span>
          <span className="text-[11px] text-charcoal/70 hidden sm:inline">Holds hot & cold</span>
        </div>

        {/* Floating Restrained Visual Details: EAT Label */}
        <div 
          className="absolute -right-3 sm:-right-8 bottom-28 bg-forest text-cream-soft border border-gold/40 px-3.5 py-1.5 rounded-full shadow-warm-md flex items-center gap-2 transform transition-all duration-500"
          style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs font-heading font-semibold tracking-wider text-gold-light uppercase">
            02 · EAT
          </span>
          <span className="text-[11px] text-cream/80 hidden sm:inline">Crisp wafer finish</span>
        </div>
      </div>

      {/* Beverage Switcher Micro-Control (Grounded, realistic interactivity) */}
      <div className="mt-4 flex items-center gap-2 bg-cream-muted/70 p-1 rounded-full border border-forest/10">
        <button
          type="button"
          onClick={() => setBeverageMode('coffee')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-medium transition-all duration-300 ${
            beverageMode === 'coffee'
              ? 'bg-forest text-cream-soft shadow-sm'
              : 'text-forest/80 hover:text-forest'
          }`}
        >
          <Coffee className="w-3.5 h-3.5" />
          <span>Hot Coffee / Tea</span>
        </button>
        <button
          type="button"
          onClick={() => setBeverageMode('dessert')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-medium transition-all duration-300 ${
            beverageMode === 'dessert'
              ? 'bg-forest text-cream-soft shadow-sm'
              : 'text-forest/80 hover:text-forest'
          }`}
        >
          <Droplets className="w-3.5 h-3.5" />
          <span>Dessert & Chilled Pour</span>
        </button>
      </div>

      <p className="mt-2 text-[12px] text-charcoal/60 tracking-wide">
        Artisanal baked grain composition · Tested for hot beverage resilience
      </p>
    </div>
  );
};
