import { motion } from "framer-motion";
import { Plane, MapPin, Building2, Calendar, PartyPopper, Briefcase, Hotel, Car, Clock } from "lucide-react";

const services = [
  { icon: Car, title: "Corridas Particulares na Cidade", desc: "Transporte confortável para seus deslocamentos urbanos diários." },
  { icon: Plane, title: "Transporte para Aeroportos", desc: "Viagens para Guarulhos, Congonhas e Viracopos com pontualidade." },
  { icon: MapPin, title: "Viagens Intermunicipais", desc: "Deslocamentos entre cidades com segurança e conforto." },
  { icon: Briefcase, title: "Transporte Executivo", desc: "Serviço premium para executivos e empresários." },
  { icon: Calendar, title: "Corridas Agendadas", desc: "Agende com antecedência suas viagens e compromissos." },
  { icon: PartyPopper, title: "Transporte para Eventos", desc: "Leve e busque convidados em festas e eventos especiais." },
  { icon: Building2, title: "Transporte para Empresas", desc: "Serviços corporativos para transporte de colaboradores." },
  { icon: Hotel, title: "Transporte para Hotéis", desc: "Transfer de hotéis para aeroportos e pontos turísticos." },
  { icon: Clock, title: "Motorista Particular sob Agendamento", desc: "Disponibilidade por período com agendamento prévio." },
];

const ServicosSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços de Transporte</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Soluções completas de mobilidade para você e sua empresa
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover electric-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Nota sobre plataformas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted-foreground/80 max-w-3xl mx-auto">
          <span className="font-semibold">Trabalho com diversas plataformas:</span> Realizo corridas usando Uber, 99 e InDrive. 
          Este é um site de serviços independentes, não oficial de nenhuma plataforma.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ServicosSection;