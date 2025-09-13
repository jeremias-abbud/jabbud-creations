import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

export type PortfolioProject = {
  id: string
  title: string
  description: string
  image_url: string
  website_url?: string
  technologies: string[]
  category: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export type CreateProjectData = Omit<PortfolioProject, 'id' | 'created_at' | 'updated_at'>

export const usePortfolioProjects = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch projects from Supabase
  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
      toast.error('Erro ao carregar projetos')
    } finally {
      setLoading(false)
    }
  }

  // Create new project
  const createProject = async (projectData: CreateProjectData): Promise<void> => {
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .insert(projectData)

      if (error) throw error

      toast.success('Projeto criado com sucesso!')
      fetchProjects() // Refresh the list
    } catch (error) {
      console.error('Error creating project:', error)
      toast.error('Erro ao criar projeto')
    }
  }

  // Update existing project
  const updateProject = async (id: string, projectData: Partial<CreateProjectData>): Promise<void> => {
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .update(projectData)
        .eq('id', id)

      if (error) throw error

      toast.success('Projeto atualizado com sucesso!')
      fetchProjects() // Refresh the list
    } catch (error) {
      console.error('Error updating project:', error)
      toast.error('Erro ao atualizar projeto')
    }
  }

  // Delete project
  const deleteProject = async (id: string): Promise<void> => {
    try {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', id)

      if (error) throw error

      toast.success('Projeto removido com sucesso!')
      fetchProjects() // Refresh the list
    } catch (error) {
      console.error('Error deleting project:', error)
      toast.error('Erro ao remover projeto')
    }
  }

  // Upload image to Supabase Storage and return URL
  const uploadProjectImage = async (file: File): Promise<string> => {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `projects/${fileName}`

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath)

      return publicUrl
    } catch (error) {
      console.error('Error uploading project image:', error)
      toast.error('Erro ao enviar imagem do projeto')
      throw error
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return {
    projects,
    loading,
    createProject,
    updateProject,
    deleteProject,
    uploadProjectImage,
    refetch: fetchProjects
  }
}