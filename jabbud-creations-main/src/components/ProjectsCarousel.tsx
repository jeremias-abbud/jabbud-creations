import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ProjectCard from './ProjectCard'
import { usePortfolioProjects } from '@/hooks/usePortfolioProjects'
import Autoplay from 'embla-carousel-autoplay'

interface ProjectsCarouselProps {
  maxItems?: number
  showFeaturedOnly?: boolean
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ 
  maxItems, 
  showFeaturedOnly = false 
}) => {
  const { projects, loading } = usePortfolioProjects()
  
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  if (loading) {
    return (
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {[...Array(3)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-xl border animate-pulse">
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                    <div className="flex gap-1">
                      <div className="h-5 bg-muted rounded w-16"></div>
                      <div className="h-5 bg-muted rounded w-16"></div>
                    </div>
                    <div className="h-8 bg-muted rounded"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    )
  }

  let filteredProjects = showFeaturedOnly 
    ? projects.filter(project => project.is_featured)
    : projects

  if (maxItems) {
    filteredProjects = filteredProjects.slice(0, maxItems)
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚧</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Projetos em Breve
          </h3>
          <p className="text-muted-foreground text-sm">
            Estamos preparando nossos melhores projetos para mostrar aqui. 
            Volte em breve para conferir!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <Carousel 
        className="w-full"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {filteredProjects.map((project, index) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <ProjectCard 
                project={project}
                className="animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {filteredProjects.length > 3 && (
          <>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 backdrop-blur-sm border-2 hover:bg-background" />
            <CarouselNext className="hidden md:flex -right-4 bg-background/80 backdrop-blur-sm border-2 hover:bg-background" />
          </>
        )}
      </Carousel>
      
      {/* Indicadores de navegação para mobile */}
      {filteredProjects.length > 1 && (
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {filteredProjects.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-muted rounded-full"></div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsCarousel