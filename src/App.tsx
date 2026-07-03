import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Layers, 
  Eye, 
  ShieldCheck, 
  DollarSign, 
  Sparkles,
  Smartphone,
  Gauge,
  MousePointerClick,
  ChevronRight,
  AlertTriangle
} from "lucide-react";

export default function App() {
  // Calculator States
  const [trafficInvestment, setTrafficInvestment] = useState<number>(5000);
  const [loadTime, setLoadTime] = useState<number>(4);
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");

  // Calculation formulas based on the copy:
  // "Se sua página demora mais de 3 segundos para abrir, metade do seu investimento em anúncios já foi para o lixo"
  const calculateLossPercentage = (time: number) => {
    if (time <= 1) return 0;
    if (time <= 2) return 15;
    if (time <= 3) return 30;
    if (time <= 4) return 50;
    if (time <= 6) return 65;
    return 80; // Over 6 seconds is catastrophic
  };

  const lossPercentage = calculateLossPercentage(loadTime);
  const estimatedLoss = Math.round((trafficInvestment * lossPercentage) / 100);

  // Generate WhatsApp Link with user context
  const getWhatsAppLink = () => {
    const phoneNumber = "5548999999999"; // Replaced with a placeholder standard contact number or custom agency number
    const baseMessage = "Olá! Gostaria de solicitar o meu diagnóstico gratuito de velocidade e conversão para o meu site.";
    const urlDetails = siteUrl ? `\n\nLink do site atual: ${siteUrl}` : "";
    const lossDetails = `\nTempo estimado de carregamento: ${loadTime}s\nInvestimento em anúncios: R$ ${trafficInvestment.toLocaleString("pt-BR")}/mês\nDesperdício estimado: R$ ${estimatedLoss.toLocaleString("pt-BR")}/mês`;
    
    const fullText = encodeURIComponent(`${baseMessage}${urlDetails}${lossDetails}\n\nVim através da Landing Page.`);
    return `https://wa.me/${phoneNumber}?text=${fullText}`;
  };

  return (
    <div id="landing-page" className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* Absolute top border indicator */}
      <div className="h-1 w-full bg-gradient-to-r from-zinc-950 via-zinc-400 to-zinc-950"></div>

      {/* Header Container */}
      <header className="border-b border-zinc-900 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Custom geometric logo 'gatobranco' */}
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M20,42 L35,18 L45,35" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M80,42 L65,18 L55,35" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20,42 C20,68 32,82 50,82 C68,82 80,68 80,42" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="38" cy="52" r="3" fill="currentColor" />
              <circle cx="62" cy="52" r="3" fill="currentColor" />
              <path d="M47,60 L53,60 L50,64 Z" fill="currentColor" />
              <path d="M47,69 C49,71 51,71 53,69" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-light tracking-widest text-white">
              gato<span className="font-extrabold text-white">branco</span>
            </span>
          </div>

          <a 
            href="https://www.instagram.com/gatobranco.digital" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-300 rounded-none bg-zinc-950/40"
          >
            Diagnóstico Grátis
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative py-16 md:py-28 overflow-hidden border-b border-zinc-900">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-800 bg-zinc-950 text-zinc-400 text-xs tracking-wider uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 bg-zinc-100 animate-pulse rounded-full"></span>
            Performance Cirúrgica • Risco Zero
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none text-white mb-8"
          >
            SEU TRÁFEGO É <br />
            <span className="text-zinc-400">CARO DEMAIS</span> PARA <br />
            ESPERAR <span className="underline decoration-1 decoration-zinc-600 underline-offset-8 text-white">3 SEGUNDOS</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-12 border-l border-zinc-800 pl-4 md:pl-6 text-left md:text-center"
          >
            <strong className="text-white font-semibold">gatobranco</strong> | O estúdio cirúrgico de páginas ultravelozes com Risco Zero. Criamos sua Landing Page primeiro, você só paga se aprovar.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#cta" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-zinc-200 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Iniciar Projeto Sem Risco
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
            <a 
              href="#problema" 
              className="w-full sm:w-auto px-8 py-4 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center"
            >
              Verificar Seu Ralo de Dinheiro
            </a>
          </motion.div>
        </div>
      </section>

      {/* O PROBLEMA (O ralo de dinheiro) */}
      <section id="problema" className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Text column (7/12 width) */}
            <div className="lg:col-span-7">
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-3">// O ralo de dinheiro</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white mb-6">
                Você está doando dinheiro para o Meta e o Google.
              </h2>
              
              <div className="space-y-6 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Cada segundo de carregamento é um filtro que elimina seus clientes. Se sua página demora mais de <strong className="text-white font-semibold">3 segundos para abrir</strong>, metade do seu investimento em anúncios já foi para o lixo antes mesmo da sua oferta ser lida.
                </p>
                <p>
                  Páginas pesadas e templates genéricos são gargalos financeiros que destroem o ROI de negócios de ticket alto todos os dias. Você não tem um problema de anúncio; você tem um vazamento de caixa no destino do clique.
                </p>
              </div>

              {/* Dynamic Warning Card */}
              <div className="mt-8 p-5 border border-zinc-800 bg-black flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Atenção ao Ticket Alto</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Se o seu produto ou serviço custa mais de R$ 500, a paciência do seu lead é ainda menor. Ele exige um ambiente premium, limpo e de carregamento instantâneo.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Calculator column (5/12 width) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-black border border-zinc-800 p-6 md:p-8 relative">
                <div className="absolute top-0 right-4 transform -translate-y-1/2 px-2 py-0.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest">
                  Diagnóstico Rápido
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-zinc-400" />
                  Simulador de Desperdício
                </h3>

                <div className="space-y-6">
                  {/* Traffic Investment Input */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      <span>Investimento em Tráfego</span>
                      <span className="text-white font-bold">R$ {trafficInvestment.toLocaleString("pt-BR")} /mês</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="50000" 
                      step="1000"
                      value={trafficInvestment}
                      onChange={(e) => setTrafficInvestment(Number(e.target.value))}
                      className="w-full accent-white bg-zinc-800 h-1 appearance-none cursor-pointer rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                      <span>R$ 1.000</span>
                      <span>R$ 50.000+</span>
                    </div>
                  </div>

                  {/* Load Time Input */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      <span>Tempo de Carregamento</span>
                      <span className="text-white font-bold">{loadTime} segundos</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      step="0.5"
                      value={loadTime}
                      onChange={(e) => setLoadTime(Number(e.target.value))}
                      className="w-full accent-white bg-zinc-800 h-1 appearance-none cursor-pointer rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                      <span>1s (Ideal)</span>
                      <span>10s (Lento)</span>
                    </div>
                  </div>

                  {/* Calculation Output Box */}
                  <div className="border-t border-zinc-800 pt-6 mt-6">
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                      Perda de Conversão Estimada
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-extrabold text-white">{lossPercentage}%</span>
                      <span className="text-zinc-500 text-xs">do seu tráfego descartado</span>
                    </div>

                    <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-none">
                      <div className="text-xs text-zinc-500 mb-1">Seu dinheiro jogado no lixo:</div>
                      <div className="text-2xl font-black text-white">
                        R$ {estimatedLoss.toLocaleString("pt-BR")} <span className="text-xs text-zinc-500 font-normal">/mês</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 mt-2 leading-normal">
                        *Estimativa baseada no comportamento médio do usuário de dispositivos móveis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* A SOLUÇÃO (O Padrão gatobranco) */}
      <section id="solucao" className="py-20 md:py-28 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-3">// O padrão gatobranco</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
              Engenharia focada em conversão.
            </h2>
            <div className="w-12 h-0.5 bg-white mx-auto mt-6"></div>
          </div>

          {/* Centered high-performance image */}
          <div className="flex justify-center mb-16">
            <img 
              src="https://i.postimg.cc/wjFCWFwT/ac48f42a-4896-4a66-9efd-47849240652a.png" 
              alt="Engenharia de Conversão" 
              referrerPolicy="no-referrer"
              className="max-w-xl sm:max-w-2xl w-full h-auto object-contain select-none"
            />
          </div>

          {/* Three columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            
            {/* Column 1 - Código Puro */}
            <div className="border border-zinc-900 hover:border-zinc-700 bg-zinc-950/40 p-8 transition-all duration-300 relative group">
              <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center mb-6 bg-black text-white group-hover:border-zinc-500 transition-colors duration-300">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-4">
                Código Puro
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Sem o &quot;peso morto&quot; de construtores de sites lentos. Escrevemos cada linha para garantir performance máxima.
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Column 2 - Design de Alto Contraste */}
            <div className="border border-zinc-900 hover:border-zinc-700 bg-zinc-950/40 p-8 transition-all duration-300 relative group">
              <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center mb-6 bg-black text-white group-hover:border-zinc-500 transition-colors duration-300">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-4">
                Design de Alto Contraste
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Estética dark design mobile-first. Criamos uma hierarquia visual que guia o olho do cliente direto para o fechamento.
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Column 3 - Velocidade Instantânea */}
            <div className="border border-zinc-900 hover:border-zinc-700 bg-zinc-950/40 p-8 transition-all duration-300 relative group">
              <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center mb-6 bg-black text-white group-hover:border-zinc-500 transition-colors duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-4">
                Velocidade Instantânea
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Páginas que carregam em menos de 1 segundo. Transformamos a paciência do seu lead em lucro imediato.
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></div>
            </div>

          </div>

          {/* Quick statement block */}
          <div className="mt-16 text-center border-t border-zinc-900 pt-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Média de performance no Google Lighthouse: <span className="text-white font-extrabold ml-1">100 / 100</span>
            </p>
          </div>

        </div>
      </section>

      {/* ANTES E DEPOIS (Comparativo de Performance) */}
      <section id="antes-depois" className="py-20 md:py-28 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-3">// O contraste real</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
              Antes &amp; Depois
            </h2>
            <p className="text-zinc-400 text-sm font-light mt-4">
              Compare a diferença visual e de carregamento de um site comum versus o padrão cirúrgico de ultravelocidade da gatobranco.
            </p>
            <div className="w-12 h-0.5 bg-white mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            
            {/* Antes Panel */}
            <div className="border border-zinc-900 bg-zinc-950/20 p-4 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-zinc-850">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs tracking-widest text-zinc-500">// ANTES</span>
                  <span className="px-2 py-0.5 border border-zinc-900 bg-zinc-950 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                    Lento &amp; Genérico
                  </span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Templates pesados de construtores visuais arrastam a velocidade de carregamento lá para baixo, fazendo você perder mais da metade dos cliques que compra nos anúncios.
                </p>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/PJZxrkLt/2.png" 
                  alt="Antes - Site Lento" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover grayscale opacity-50 group-hover:opacity-75 group-hover:grayscale-0 transition-all duration-500 select-none"
                />
              </div>
            </div>

            {/* Depois Panel */}
            <div className="border border-zinc-800 bg-zinc-950/40 p-4 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-zinc-500">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs tracking-widest text-white">// DEPOIS</span>
                  <span className="px-2 py-0.5 border border-zinc-750 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                    Padrão Gatobranco
                  </span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Código puro otimizado cirurgicamente para carregamento instantâneo inferior a 1 segundo. Design de altíssimo contraste feito exclusivamente para maximizar suas conversões de ticket alto.
                </p>
              </div>
              <div className="bg-black border border-zinc-800 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/FRYz8SNV/Captura-de-tela-2026-07-03-012229.png" 
                  alt="Depois - Gatobranco Ultraveloz" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 select-none"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* A OFERTA IRRECUSÁVEL (O Modelo Risco Zero) */}
      <section id="oferta" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center mb-16 md:mb-20">
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-3">// O modelo risco zero</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
              Nós assumimos 100% do risco. <br />
              Você assume o lucro.
            </h2>
          </div>

          {/* Minimalist numbered cards list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Item 01 */}
            <div className="border border-zinc-900 bg-black p-6 flex gap-5 items-start">
              <span className="font-mono text-xs font-bold text-zinc-600 border border-zinc-800 px-2 py-1 shrink-0">
                01
              </span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                  Desenvolvimento Antecipado
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Não cobramos sinal. Criamos o projeto inteiro antes de você abrir a carteira.
                </p>
              </div>
            </div>

            {/* Item 02 */}
            <div className="border border-zinc-900 bg-black p-6 flex gap-5 items-start">
              <span className="font-mono text-xs font-bold text-zinc-600 border border-zinc-800 px-2 py-1 shrink-0">
                02
              </span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                  Privacidade Total
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Zero acesso a senhas ou hospedagem. Mantemos sua segurança intacta durante todo o processo.
                </p>
              </div>
            </div>

            {/* Item 03 */}
            <div className="border border-zinc-900 bg-black p-6 flex gap-5 items-start">
              <span className="font-mono text-xs font-bold text-zinc-600 border border-zinc-800 px-2 py-1 shrink-0">
                03
              </span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                  Visualização Real
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Você testa a página pronta no seu próprio celular através do nosso servidor exclusivo.
                </p>
              </div>
            </div>

            {/* Item 04 */}
            <div className="border border-zinc-900 bg-black p-6 flex gap-5 items-start">
              <span className="font-mono text-xs font-bold text-zinc-600 border border-zinc-800 px-2 py-1 shrink-0">
                04
              </span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                  Pagamento na Aprovação
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Se amar o design e a velocidade, faz o Pix. Enviamos o arquivo .zip com um vídeo tutorial de 1 minuto para instalação.
                </p>
              </div>
            </div>

          </div>

          {/* Core Guarantee Seal */}
          <div className="mt-12 p-6 border border-zinc-800 bg-zinc-900/30 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left justify-between">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-white shrink-0" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Risco Absolutamente Zero</h4>
                <p className="text-xs text-zinc-500">Se você não aprovar o design ou o carregamento, não deve nada. Simples assim.</p>
              </div>
            </div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest bg-black px-4 py-2 border border-zinc-800 shrink-0">
              Acordo de Cavalheiros
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER & CTA (PARE O VAZAMENTO DE ROI AGORA) */}
      <section id="cta" className="py-20 md:py-32 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          <div className="border border-zinc-800 bg-zinc-950 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full"></div>
            
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-4">// Chamada para ação final</span>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mb-6">
              PARE O VAZAMENTO DE ROI AGORA.
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Clique no botão abaixo para receber um diagnóstico gratuito da velocidade e conversão do seu site atual.
            </p>

            {/* Instagram Big Conversion CTA */}
            <div className="max-w-md mx-auto">
              <a 
                href="https://www.instagram.com/gatobranco.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-zinc-200 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group"
              >
                SOLICITAR DIAGNÓSTICO VIA DM
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] text-zinc-600 mt-4 tracking-normal">
                Você será direcionado diretamente para o nosso perfil oficial no Instagram para enviar uma mensagem.
              </p>
            </div>

          </div>

          {/* Footer Rights */}
          <footer className="mt-20 border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-600 text-xs font-light">
            <div className="flex items-center gap-3">
              <span className="font-mono tracking-widest text-zinc-500 text-sm">gato<span className="font-extrabold text-zinc-400">branco</span></span>
              <span>© {new Date().getFullYear()} • Todos os direitos reservados.</span>
            </div>
            <div className="flex gap-4">
              <a href="#hero" className="hover:text-zinc-400 transition-colors">Voltar ao topo</a>
              <span>•</span>
              <span className="text-zinc-600 font-mono">// Código puro. Zero templates genéricos.</span>
            </div>
          </footer>

        </div>
      </section>
    </div>
  );
}
