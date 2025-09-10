import { Palette, Package, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5531986752884", "_blank");
  };

  const products = [
    {
      icon: Palette,
      title: "Arte Personalizada",
      description: "Criações únicas desenvolvidas especialmente para você, desde ilustrações até peças decorativas personalizadas.",
      features: ["Desenhos exclusivos", "Diferentes técnicas", "Personalização completa"]
    },
    {
      icon: Package,
      title: "Produtos Artesanais",
      description: "Itens feitos à mão com materiais premium, perfeitos para decoração ou presentes especiais.",
      features: ["Materiais naturais", "Acabamento premium", "Peças únicas"]
    },
    {
      icon: Sparkles,
      title: "Projetos Especiais",
      description: "Desenvolvemos projetos sob medida para eventos, empresas ou ocasiões especiais.",
      features: ["Consultoria incluída", "Prazos flexíveis", "Acompanhamento total"]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-transparent bg-gradient-primary bg-clip-text">Produtos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada categoria representa nossa dedicação à excelência e criatividade. 
              Descubra as possibilidades que podemos criar juntos.
            </p>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group border-primary/20 hover:border-primary"
                  onClick={handleWhatsApp}
                >
                  Saiba Mais
                  <Sparkles className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card p-8 rounded-xl shadow-elegant border animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Tem uma ideia especial?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Adoramos desafios criativos! Entre em contato e vamos transformar sua visão em realidade.
            </p>
            <Button variant="hero" size="lg" onClick={handleWhatsApp}>
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;