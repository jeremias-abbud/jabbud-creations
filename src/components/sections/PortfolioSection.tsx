import { Instagram, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const handleInstagram = () => {
    window.open("https://instagram.com/jabbudcreations", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5531986752884", "_blank");
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nosso <span className="text-transparent bg-gradient-primary bg-clip-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore nossa coleção de trabalhos e inspire-se com as possibilidades. 
              Cada projeto conta uma história única.
            </p>
          </div>

          {/* Instagram Integration */}
          <div className="text-center mb-12">
            <div className="bg-card p-8 md:p-12 rounded-xl shadow-elegant border animate-fade-in">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-semibold text-foreground mb-4">
                  @jabbudcreations
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Acompanhe nossos trabalhos mais recentes no Instagram! 
                  Lá você encontra o processo criativo, produtos finalizados e muito mais.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={handleInstagram}
                    className="group"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Ver no Instagram
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleWhatsApp}
                    className="group border-2"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Solicitar Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Destaques do Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-elegant border animate-fade-in hover:shadow-glow transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">50+</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Projetos Realizados</h4>
                <p className="text-muted-foreground text-sm">Diversas criações únicas e personalizadas</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elegant border animate-fade-in hover:shadow-glow transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground font-bold">100%</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Clientes Satisfeitos</h4>
                <p className="text-muted-foreground text-sm">Qualidade e dedicação em cada projeto</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elegant border animate-fade-in hover:shadow-glow transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">∞</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Possibilidades</h4>
                <p className="text-muted-foreground text-sm">Sua imaginação é o limite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;