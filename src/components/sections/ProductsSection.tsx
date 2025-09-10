import { Crown, FileImage, Globe, Video, Paintbrush, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5531986752884", "_blank");
  };

  const services = [
    {
      icon: Crown,
      title: "Logotipos",
      description: "Nossa especialidade! Criamos logotipos únicos e marcantes que representam perfeitamente sua marca e valores.",
      features: ["Design exclusivo", "Múltiplas versões", "Formatos PNG / PDF"],
      highlight: true
    },
    {
      icon: FileImage,
      title: "Design Digital",
      description: "Materiais gráficos digitais, posts para redes sociais, banners web e artes para plataformas online.",
      features: ["Posts criativos", "Banners web", "Artes digitais"]
    },
    {
      icon: Globe,
      title: "Sites & Interfaces",
      description: "Desenvolvimento de sites responsivos e interfaces digitais que complementam sua identidade visual.",
      features: ["Design responsivo", "SEO otimizado", "Interface moderna"]
    },
    {
      icon: Video,
      title: "Motion Graphics",
      description: "Criação de vídeos promocionais, animações e motion graphics para suas campanhas digitais.",
      features: ["Animações fluidas", "Roteiro incluído", "Múltiplos formatos"]
    },
    {
      icon: Paintbrush,
      title: "Ilustrações Digitais",
      description: "Criação de mascotes digitais e ilustrações personalizadas para dar personalidade à sua marca online.",
      features: ["Estilo único", "Múltiplas versões", "Formatos digitais"]
    },
    {
      icon: Megaphone,
      title: "Campanhas Digitais",
      description: "Desenvolvimento completo de campanhas visuais para redes sociais e plataformas digitais.",
      features: ["Estratégia visual", "Múltiplas peças", "Identidade consistente"]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-transparent bg-gradient-primary bg-clip-text">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Do logotipo ao site completo, oferecemos soluções digitais completas em design 
              e comunicação visual para fortalecer sua marca no ambiente digital.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-card p-8 rounded-xl shadow-elegant border transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                  service.highlight 
                    ? 'ring-2 ring-primary/50 hover:shadow-glow' 
                    : 'hover:shadow-glow'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.highlight && (
                  <div className="flex justify-center mb-2">
                    <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      ESPECIALIDADE
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    service.highlight 
                      ? 'bg-gradient-primary' 
                      : 'bg-primary/20'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.highlight 
                        ? 'text-white' 
                        : 'text-primary'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={service.highlight ? "hero" : "outline"}
                  className="w-full group"
                  onClick={handleWhatsApp}
                >
                  {service.highlight ? "Solicitar Logotipo" : "Saiba Mais"}
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card p-8 rounded-xl shadow-elegant border animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Precisa de uma identidade visual completa?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Oferecemos pacotes completos que incluem logotipo, materiais digitais, 
              site e tudo que sua marca precisa para se destacar no mundo digital.
            </p>
            <Button variant="hero" size="lg" onClick={handleWhatsApp}>
              Conversar sobre meu projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;