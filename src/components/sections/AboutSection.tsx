import { Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-transparent bg-gradient-primary bg-clip-text">Jabbud</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa dedicada à criação de produtos únicos e artesanais, 
              combinando tradição e inovação em cada peça.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto Principal */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nossa História
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Jabbud nasceu da paixão por criar produtos únicos que contam histórias. 
                Cada peça é cuidadosamente elaborada com atenção aos detalhes e 
                compromisso com a qualidade superior.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosso objetivo é transformar suas ideias em realidade, oferecendo 
                soluções criativas e personalizadas que superam expectativas.
              </p>
              
              {/* Valores */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Paixão em cada criação</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-secondary" />
                  <span className="text-foreground font-medium">Qualidade garantida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Atendimento personalizado</span>
                </div>
              </div>
            </div>

            {/* Imagem/Cards de destaque */}
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-elegant border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Criação Artesanal</h4>
                      <p className="text-sm text-muted-foreground">Feito à mão com cuidado</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Cada produto é único, criado especialmente para você com técnicas tradicionais e materiais de primeira qualidade.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elegant border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Qualidade Premium</h4>
                      <p className="text-sm text-muted-foreground">Materiais selecionados</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Utilizamos apenas os melhores materiais e técnicas aperfeiçoadas para garantir durabilidade e beleza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;