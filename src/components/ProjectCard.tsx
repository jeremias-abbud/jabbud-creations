import React from 'react'
import { ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { PortfolioProject } from '@/hooks/usePortfolioProjects'

interface ProjectCardProps {
  project: PortfolioProject
  className?: string
  style?: React.CSSProperties
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '', style }) => {
  const handleVisitSite = () => {
    if (project.website_url) {
      window.open(project.website_url, '_blank')
    }
  }

  return (
    <div className={`bg-card rounded-xl shadow-elegant border overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1 ${className}`} style={style}>
      {/* Image */}
      <div className="aspect-video relative overflow-hidden bg-muted/30">
        <img 
          src={project.image_url} 
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
        {project.is_featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              <Star className="w-3 h-3 mr-1" />
              Destaque
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        )}

        {/* Visit Button */}
        {project.website_url && (
          <Button 
            onClick={handleVisitSite}
            variant="outline" 
            size="sm" 
            className="w-full group"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visitar Site
            <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard