import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { X, Upload } from 'lucide-react'
import { toast } from 'sonner'
import { usePortfolioProjects, type CreateProjectData } from '@/hooks/usePortfolioProjects'

interface ProjectFormProps {
  project?: any
  onSuccess?: () => void
  onCancel?: () => void
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSuccess, onCancel }) => {
  const { createProject, updateProject, uploadProjectImage } = usePortfolioProjects()
  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  
  const [formData, setFormData] = useState<CreateProjectData>(() => ({
    title: project?.title || '',
    description: project?.description || '',
    image_url: project?.image_url || '',
    website_url: project?.website_url || '',
    technologies: project?.technologies || [],
    category: project?.category || 'website',
    is_featured: project?.is_featured || false
  }))
  
  const [techInput, setTechInput] = useState('')

  // Inicializar preview da imagem para edição
  useEffect(() => {
    if (project?.image_url) {
      setImagePreview(project.image_url)
    }
  }, [project])

  const handleInputChange = (field: keyof CreateProjectData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      handleInputChange('technologies', [...formData.technologies, techInput.trim()])
      setTechInput('')
    }
  }

  const removeTechnology = (tech: string) => {
    handleInputChange('technologies', formData.technologies.filter(t => t !== tech))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.description || (!imageFile && !project?.image_url)) {
      toast.error('Preencha todos os campos obrigatórios')
      return
    }

    setLoading(true)
    
    try {
      let imageUrl = formData.image_url
      
      // Se há nova imagem, fazer upload
      if (imageFile) {
        imageUrl = await uploadProjectImage(imageFile)
      }
      
      const projectData = {
        ...formData,
        image_url: imageUrl
      }
      
      if (project) {
        // Editar projeto existente
        await updateProject(project.id, projectData)
      } else {
        // Criar novo projeto
        await createProject(projectData)
      }

      // Reset do formulário apenas se for criação
      if (!project) {
        setFormData({
          title: '',
          description: '',
          image_url: '',
          website_url: '',
          technologies: [],
          category: 'website',
          is_featured: false
        })
        setImageFile(null)
        setImagePreview('')
      }
      
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error('Error saving project:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Título do Projeto *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Ex: Site E-commerce Moderno"
              required
            />
          </div>

          <div>
            <Label htmlFor="website_url">URL do Site</Label>
            <Input
              id="website_url"
              type="url"
              value={formData.website_url}
              onChange={(e) => handleInputChange('website_url', e.target.value)}
              placeholder="https://exemplo.com"
            />
          </div>

          <div>
            <Label htmlFor="category">Categoria</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              placeholder="Ex: ecommerce, portfolio, dashboard"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.is_featured}
              onCheckedChange={(checked) => handleInputChange('is_featured', checked)}
            />
            <Label htmlFor="featured">Projeto em destaque</Label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="image">Imagem do Projeto *</Label>
            <div className="mt-2">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setImageFile(null)
                      setImagePreview('')
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Clique para enviar</span>
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG ou WEBP</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="description">Descrição *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Descreva o projeto, suas funcionalidades e características..."
          rows={4}
          required
        />
      </div>

      <div>
        <Label>Tecnologias Utilizadas</Label>
        <div className="flex gap-2 mt-2">
          <Input
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="Ex: React, Node.js, Tailwind"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addTechnology()
              }
            }}
          />
          <Button type="button" onClick={addTechnology} variant="outline">
            Adicionar
          </Button>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {formData.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="cursor-pointer" onClick={() => removeTechnology(tech)}>
              {tech}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" disabled={loading} className="flex-1">
          {loading ? 'Salvando...' : project ? 'Atualizar Projeto' : 'Salvar Projeto'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  )
}

export default ProjectForm