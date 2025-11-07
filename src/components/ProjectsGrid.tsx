import React from 'react'
import ProjectCard from './ProjectCard'
import { usePortfolioProjects } from '@/hooks/usePortfolioProjects'

interface ProjectsGridProps {
  maxItems?: number
  showFeaturedOnly?: boolean
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ 
  maxItems, 
  showFeaturedOnly = false 
}) => {
  const { projects, loading } = usePortfolioProjects()

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-card rounded-xl border animate-pulse">
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
        ))}
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  )
}

export default ProjectsGrid