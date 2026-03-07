import { MessageCircle, Car } from "lucide-react";

const DemoBanner = () => {
  const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Vi%20o%20site%20demonstra%C3%A7%C3%A3o%20do%20motorista%20e%20quero%20criar%20um%20site%20igual%20para%20meu%20neg%C3%B3cio!";

  return (
    <div className="bg-gradient-to-r from-blue-900/10 via-slate-800/10 to-blue-900/10 border-b border-blue-800/20 backdrop-blur-sm">
      <div className="container py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-blue-500 flex-shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm text-foreground">
              🚗 <span className="font-semibold">Este é um site de demonstração</span> criado pela LSB Business Intelligence.
              <span className="hidden sm:inline"> Podemos criar um site profissional como este para seu negócio em até 7 dias.</span>
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'demo_banner_criar_site'
                });
              }
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Criar meu site
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;