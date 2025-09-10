import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jabbud-logo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/jabbudcreations", "_blank");
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Logo Principal */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="Jabbud Logo" 
              className="h-24 w-auto mx-auto object-contain animate-scale-in"
            />
          </div>
          
          {/* Título e Subtítulo */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Criações que 
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Inspiram</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformamos ideias em realidade com criatividade, qualidade e paixão. 
            Descubra nossos produtos únicos e artesanais.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              onClick={handleInstagram}
              className="group border-2"
            >
              <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              Ver Portfolio
            </Button>
          </div>

          {/* Destaque da Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Artesanal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Premium</div>
              <div className="text-muted-foreground">Qualidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Único</div>
              <div className="text-muted-foreground">Personalizado</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;