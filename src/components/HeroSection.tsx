import { motion } from "framer-motion";
import { MessageCircle, Check, Car, Shield, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Preciso%20de%20um%20motorista%20particular.%20Gostaria%20de%20agendar%20uma%20corrida.";

const HeroSection = () => (
  <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-slate-600/20 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
    </div>
    
    {/* Elementos decorativos que remetem a estradas */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-[10%] w-32 h-0.5 bg-gradient-to-r from-accent/20 to-transparent" />
      <div className="absolute top-32 right-[15%] w-24 h-0.5 bg-gradient-to-r from-accent/15 to-transparent" />
      <div className="absolute bottom-40 left-[20%] w-40 h-0.5 bg-gradient-to-r from-accent/10 to-transparent" />
      <div className="absolute bottom-20 right-[25%] w-28 h-0.5 bg-gradient-to-r from-accent/15 to-transparent" />
    </div>
    
    <div className="container relative z-10 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Car className="w-10 h-10 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/30">
              Motorista Profissional
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            Motorista Particular em São Paulo{" "}
            <span className="text-gradient">Agende sua Viagem com Segurança</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl">
            Transporte confortável e seguro para aeroportos, viagens e corridas particulares com atendimento rápido em São Paulo e região.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-200 glow-border"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'botao_whatsapp_hero'
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Corrida
          </a>
          <div className="mt-8 flex flex-col gap-3">
            <span className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base font-semibold">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              Atendimento em toda São Paulo e região metropolitana
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Carro confortável e bem cuidado
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Motorista experiente e seguro
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Viagens agendadas pelo WhatsApp
            </span>
          </div>
        </motion.div>

        {/* Depoimento com Avatar de Motorista */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center gap-6"
        >
          {/* Caixa de diálogo pequena ACIMA */}
          <div className="relative max-w-[320px]">
            <div className="bg-card/95 backdrop-blur-sm border-2 border-accent/30 rounded-xl p-3 shadow-xl relative">
              <p className="text-card-foreground text-xs text-center leading-relaxed">
                "Depois que fiz meu site com a <span className="font-bold text-accent">LSB</span>, comecei a receber mais corridas particulares direto pelo WhatsApp!"
              </p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-card/95"></div>
            </div>
          </div>
          
          {/* Avatar do Motorista com Carro */}
          <div className="relative">
            <svg width="500" height="420" viewBox="0 0 500 420" className="drop-shadow-2xl">
              {/* Sombra no chão */}
              <ellipse cx="250" cy="400" rx="180" ry="25" fill="#00000020"/>
              
              {/* Carro Executivo Preto - Traseira */}
              <defs>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2d3748"/>
                  <stop offset="50%" stopColor="#1a202c"/>
                  <stop offset="100%" stopColor="#171923"/>
                </linearGradient>
                <radialGradient id="carShine" cx="50%" cy="30%">
                  <stop offset="0%" stopColor="#4a5568" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#1a202c" stopOpacity="0"/>
                </radialGradient>
              </defs>
              
              {/* Corpo do carro */}
              <path d="M 100 280 L 120 240 L 380 240 L 400 280 L 410 320 L 90 320 Z" fill="url(#carGradient)" stroke="#0f1419" strokeWidth="2"/>
              
              {/* Teto do carro */}
              <path d="M 140 240 Q 160 200 250 190 Q 340 200 360 240" fill="url(#carGradient)" stroke="#0f1419" strokeWidth="2"/>
              
              {/* Vidros */}
              <path d="M 145 238 Q 162 205 210 200 L 210 238 Z" fill="#1e3a8a" opacity="0.6"/>
              <path d="M 290 238 L 290 200 Q 338 205 355 238 Z" fill="#1e3a8a" opacity="0.6"/>
              <path d="M 215 238 L 215 202 L 285 202 L 285 238 Z" fill="#1e3a8a" opacity="0.4"/>
              
              {/* Detalhes cromados */}
              <rect x="90" y="305" width="320" height="3" fill="#cbd5e0"/>
              <rect x="100" y="275" width="300" height="2" fill="#a0aec0"/>
              
              {/* Grade frontal */}
              <rect x="95" y="285" width="40" height="25" rx="2" fill="#1a202c"/>
              <line x1="100" y1="287" x2="130" y2="287" stroke="#718096" strokeWidth="1"/>
              <line x1="100" y1="292" x2="130" y2="292" stroke="#718096" strokeWidth="1"/>
              <line x1="100" y1="297" x2="130" y2="297" stroke="#718096" strokeWidth="1"/>
              <line x1="100" y1="302" x2="130" y2="302" stroke="#718096" strokeWidth="1"/>
              
              {/* Farol */}
              <ellipse cx="110" cy="295" rx="8" ry="6" fill="#fbbf24" opacity="0.8"/>
              <ellipse cx="110" cy="295" rx="5" ry="4" fill="#fef3c7"/>
              
              {/* Reflexo do carro */}
              <ellipse cx="250" cy="260" rx="120" ry="40" fill="url(#carShine)"/>
              
              {/* Roda traseira */}
              <circle cx="150" cy="320" r="28" fill="#1a202c" stroke="#0f1419" strokeWidth="3"/>
              <circle cx="150" cy="320" r="18" fill="#2d3748"/>
              <circle cx="150" cy="320" r="10" fill="#4a5568"/>
              
              {/* Roda dianteira */}
              <circle cx="350" cy="320" r="28" fill="#1a202c" stroke="#0f1419" strokeWidth="3"/>
              <circle cx="350" cy="320" r="18" fill="#2d3748"/>
              <circle cx="350" cy="320" r="10" fill="#4a5568"/>
              
              {/* Motorista ao lado do carro */}
              {/* Pernas */}
              <rect x="215" y="290" width="22" height="90" fill="#704214" rx="10"/>
              <rect x="245" y="290" width="22" height="90" fill="#5c2f0a" rx="10"/>
              
              {/* Sapatos */}
              <ellipse cx="226" cy="380" rx="14" ry="9" fill="#1a202c"/>
              <ellipse cx="256" cy="380" rx="14" ry="9" fill="#1a202c"/>
              
              {/* Corpo */}
              <ellipse cx="241" cy="240" rx="50" ry="65" fill="#4299e1"/>
              
              {/* Cinto */}
              <rect x="195" y="270" width="92" height="6" fill="#5c2f0a" rx="3"/>
              <rect x="235" y="268" width="12" height="10" fill="#cbd5e0" rx="2"/>
              
              {/* Braços cruzados */}
              <ellipse cx="195" cy="245" rx="18" ry="50" fill="#4299e1" transform="rotate(-30 195 245)"/>
              <ellipse cx="287" cy="245" rx="18" ry="50" fill="#3182ce" transform="rotate(30 287 245)"/>
              
              {/* Mãos */}
              <ellipse cx="210" cy="260" rx="11" ry="13" fill="#f4a460"/>
              <ellipse cx="272" cy="260" rx="11" ry="13" fill="#f4a460"/>
              
              {/* Pescoço */}
              <rect x="221" y="195" width="40" height="25" fill="#f4a460" rx="8"/>
              
              {/* Cabeça */}
              <ellipse cx="241" cy="180" rx="42" ry="48" fill="#f4a460"/>
              
              {/* Cabelo */}
              <ellipse cx="241" cy="155" rx="43" ry="35" fill="#3e2723"/>
              <path d="M 200 160 Q 210 145 241 140 Q 272 145 282 160" fill="#3e2723"/>
              
              {/* Orelhas */}
              <ellipse cx="200" cy="180" rx="8" ry="12" fill="#e89b6f"/>
              <ellipse cx="282" cy="180" rx="8" ry="12" fill="#e89b6f"/>
              
              {/* Olhos */}
              <ellipse cx="225" cy="175" rx="6" ry="8" fill="#ffffff"/>
              <ellipse cx="257" cy="175" rx="6" ry="8" fill="#ffffff"/>
              <circle cx="226" cy="177" r="4" fill="#2d3748"/>
              <circle cx="258" cy="177" r="4" fill="#2d3748"/>
              <circle cx="227" cy="176" r="2" fill="#ffffff"/>
              <circle cx="259" cy="176" r="2" fill="#ffffff"/>
              
              {/* Sobrancelhas */}
              <path d="M 218 168 Q 225 165 232 168" stroke="#3e2723" strokeWidth="2" fill="none"/>
              <path d="M 250 168 Q 257 165 264 168" stroke="#3e2723" strokeWidth="2" fill="none"/>
              
              {/* Nariz */}
              <path d="M 241 185 L 241 195" stroke="#d4915e" strokeWidth="2" strokeLinecap="round"/>
              <ellipse cx="236" cy="197" rx="3" ry="2" fill="#d4915e"/>
              <ellipse cx="246" cy="197" rx="3" ry="2" fill="#d4915e"/>
              
              {/* Barba */}
              <ellipse cx="241" cy="205" rx="30" ry="18" fill="#3e2723"/>
              <path d="M 215 195 Q 220 210 241 215 Q 262 210 267 195" fill="#3e2723"/>
              
              {/* Bigode */}
              <ellipse cx="230" cy="200" rx="12" ry="4" fill="#3e2723"/>
              <ellipse cx="252" cy="200" rx="12" ry="4" fill="#3e2723"/>
              
              {/* Boca sorrindo */}
              <path d="M 225 205 Q 241 212 257 205" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <line x1="228" y1="207" x2="234" y2="207" stroke="#ffffff" strokeWidth="1.5"/>
              <line x1="248" y1="207" x2="254" y2="207" stroke="#ffffff" strokeWidth="1.5"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;