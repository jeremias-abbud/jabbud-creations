import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCarouselImages } from "@/hooks/useCarouselImages";

// Import dos logotipos de exemplo (substitua pelos seus próprios)
import logo1 from "@/assets/logo-sample-1.png";
import logo2 from "@/assets/logo-sample-2.png";
import logo3 from "@/assets/logo-sample-3.png";
import logo4 from "@/assets/logo-sample-4.png";
import logo5 from "@/assets/logo-sample-5.png";
import logo6 from "@/assets/logo-sample-6.png";
import logo7 from "@/assets/logo-sample-7.png";
import logo8 from "@/assets/logo-sample-8.png";
import logo9 from "@/assets/logo-sample-9.png";
import logo10 from "@/assets/logo-sample-10.png";
import logo11 from "@/assets/logo-sample-11.png";
import logo12 from "@/assets/logo-sample-12.png";
import logo13 from "@/assets/logo-sample-13.png";
import logo14 from "@/assets/logo-sample-14.png";
import logo15 from "@/assets/logo-sample-15.png";
import logo16 from "@/assets/logo-sample-16.png";
import logo17 from "@/assets/logo-sample-17.png";
import logo18 from "@/assets/logo-sample-18.png";

interface LogoCarouselProps {
  uploadedImages?: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ uploadedImages = [] }) => {
  const { images: dbImages, loading } = useCarouselImages();
  // Dados dos logotipos - você pode facilmente modificar estes dados
  const logos = [
    {
      id: 1,
      image: logo1,
    },
    {
      id: 2,
      image: logo2,
    },
    {
      id: 3,
      image: logo3,
    },
    {
      id: 4,
      image: logo4,
    },
    {
      id: 5,
      image: logo5,
    },
    {
      id: 6,
      image: logo6,
    },
    {
      id: 7,
      image: logo7,
    },
    {
      id: 8,
      image: logo8,
    },
    {
      id: 9,
      image: logo9,
    },
    {
      id: 10,
      image: logo10,
    },
    {
      id: 11,
      image: logo11,
    },
    {
      id: 12,
      image: logo12,
    },
    {
      id: 13,
      image: logo13,
    },
    {
      id: 14,
      image: logo14,
    },
    {
      id: 15,
      image: logo15,
    },
    {
      id: 16,
      image: logo16,
    },
    {
      id: 17,
      image: logo17,
    },
    {
      id: 18,
      image: logo18,
    },
  ];

  // Combinar logos estáticos com imagens do banco e do localStorage
  const allImages = [
    ...logos.map(logo => ({ id: logo.id, image: logo.image, isUploaded: false })),
    ...dbImages.map(img => ({ 
      id: img.id, 
      image: img.url, 
      isUploaded: true,
      filename: img.filename
    })),
    ...uploadedImages.map((image, index) => ({ 
      id: `local-${index}`, 
      image, 
      isUploaded: true 
    }))
  ];

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

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
          {allImages.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-card rounded-xl shadow-elegant border p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                {/* Container da imagem */}
                <div className="aspect-square bg-muted/20 rounded-lg p-6 mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.isUploaded ? "Imagem carregada" : "Logo exemplo"}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
                {/* {item.isUploaded && (
                  <div className="text-center">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Sua Imagem
                    </span>
                  </div>
                )} */}
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
        {allImages.map((_, index) => (
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