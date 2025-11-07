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
              Somos especialistas em design gráfico e identidade visual digital, criando logotipos 
              e materiais digitais que fazem sua marca se destacar no mercado online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto Principal */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nossa Especialidade
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Jabbud é especializada na criação de identidades visuais digitais impactantes. 
                Nosso foco principal são logotipos únicos, mas também desenvolvemos 
                sites, motion graphics e campanhas completas para o digital.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto é desenvolvido com estratégia, criatividade e atenção aos 
                detalhes, garantindo que sua marca tenha a personalidade e o impacto 
                visual necessários para se destacar no ambiente digital.
              </p>
              
              {/* Valores */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  <span className="text-foreground font-medium">Design estratégico e criativo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-secondary" />
                  <span className="text-foreground font-medium">Identidade visual completa</span>
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
                      <h4 className="font-semibold text-foreground">Design Estratégico</h4>
                      <p className="text-sm text-muted-foreground">Logotipos com propósito</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Criamos identidades visuais digitais que comunicam os valores da sua marca de forma clara e impactante.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elegant border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Versatilidade Visual</h4>
                      <p className="text-sm text-muted-foreground">Múltiplas aplicações</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Do logotipo aos sites e campanhas digitais, criamos uma identidade completa e consistente para o ambiente online.
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