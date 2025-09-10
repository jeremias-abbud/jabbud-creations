import { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import dos logotipos de exemplo (substitua pelos seus próprios)
import logo1 from "@/assets/logo-sample-1.png";
import logo2 from "@/assets/logo-sample-2.png";
import logo3 from "@/assets/logo-sample-3.png";
import logo4 from "@/assets/logo-sample-4.png";
import logo5 from "@/assets/logo-sample-5.png";
import logo6 from "@/assets/logo-sample-6.png";

const LogoCarousel = () => {
  // Dados dos logotipos - você pode facilmente modificar estes dados
  const logos = [
    {
      id: 1,
      image: logo1,
      title: "Brand Identity",
      category: "Tecnologia",
      description: "Logotipo moderno e minimalista para startup de tecnologia"
    },
    {
      id: 2,
      image: logo2,
      title: "Creative Studio",
      category: "Criativo",
      description: "Identidade visual artística para estúdio criativo"
    },
    {
      id: 3,
      image: logo3,
      title: "Tech Innovation",
      category: "Startup",
      description: "Logo inovador para empresa de tecnologia digital"
    },
    {
      id: 4,
      image: logo4,
      title: "Luxury Brand",
      category: "Luxo",
      description: "Identidade elegante para marca premium"
    },
    {
      id: 5,
      image: logo5,
      title: "Creative Agency",
      category: "Agência",
      description: "Logotipo vibrante para agência criativa"
    },
    {
      id: 6,
      image: logo6,
      title: "Healthcare Plus",
      category: "Saúde",
      description: "Identidade profissional para área da saúde"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {logos.map((logo) => (
            <CarouselItem key={logo.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-card rounded-xl shadow-elegant border p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                {/* Container da imagem */}
                <div className="aspect-square bg-muted/20 rounded-lg p-6 mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo.image} 
                    alt={logo.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
                
                {/* Informações do projeto */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{logo.title}</h4>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {logo.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {logo.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Controles do carrossel */}
        <CarouselPrevious className="hidden md:flex -left-12 bg-card/80 hover:bg-card border-border" />
        <CarouselNext className="hidden md:flex -right-12 bg-card/80 hover:bg-card border-border" />
      </Carousel>
      
      {/* Indicadores mobile */}
      <div className="flex md:hidden justify-center mt-4 space-x-2">
        {logos.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-muted-foreground/30"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;