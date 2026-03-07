import { MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Motorista Particular Profissional</h3>
          <p className="text-primary-foreground/70 mb-4">
            Transporte executivo, corridas para aeroportos e viagens com segurança e conforto em São Paulo e região.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Área de Atendimento
          </h3>
          <ul className="text-primary-foreground/70 space-y-2">
            <li>• São Paulo</li>
            <li>• Osasco</li>
            <li>• Taboão da Serra</li>
            <li>• Barueri</li>
            <li>• Região Metropolitana</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Motorista Particular Profissional. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;