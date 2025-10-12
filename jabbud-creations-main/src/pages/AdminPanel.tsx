import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, Trash2, Upload, Plus, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageUploader from '@/components/ImageUploader';
import LogoCarousel from '@/components/LogoCarousel';
import ProjectForm from '@/components/ProjectForm';
import ProjectCard from '@/components/ProjectCard';
import { useCarouselImages } from '@/hooks/useCarouselImages';
import { usePortfolioProjects } from '@/hooks/usePortfolioProjects';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const { images: dbImages, uploadImage, deleteImage, loading } = useCarouselImages();
  const { projects, deleteProject, loading: projectsLoading } = usePortfolioProjects();

  // Senha do admin (em produção, isso deveria vir de um backend seguro)
  const ADMIN_PASSWORD = 'jabbud2024';

  useEffect(() => {
    // Carregar imagens salvas do localStorage
    const savedImages = localStorage.getItem('jabbud-carousel-images');
    if (savedImages) {
      setUploadedImages(JSON.parse(savedImages));
    }

    // Verificar se já está logado
    const isLoggedIn = sessionStorage.getItem('jabbud-admin-auth');
    if (isLoggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('jabbud-admin-auth', 'true');
      setError('');
    } else {
      setError('Senha incorreta');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('jabbud-admin-auth');
    setPassword('');
  };

  const handleImagesChange = (newImages: string[]) => {
    setUploadedImages(newImages);
    localStorage.setItem('jabbud-carousel-images', JSON.stringify(newImages));
  };

  // Se não estiver autenticado, mostrar tela de login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle>Acesso Administrativo</CardTitle>
            <p className="text-muted-foreground">
              Digite a senha para acessar o painel de controle
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite a senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <p className="text-destructive text-sm text-center">{error}</p>
            )}
            <Button onClick={handleLogin} className="w-full">
              Entrar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header do Admin */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">
            Painel Administrativo - Jabbud Creations
          </h1>
          <Button variant="outline" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <Tabs defaultValue="carousel" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="carousel">Carrossel de Logotipos</TabsTrigger>
            <TabsTrigger value="projects">Projetos de Sites</TabsTrigger>
          </TabsList>
          
          <TabsContent value="carousel" className="space-y-6">
            {/* Upload de Novas Imagens */}
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Imagens ao Carrossel</CardTitle>
                <p className="text-muted-foreground">
                  Faça upload de novas imagens para o carrossel (armazenadas no Supabase)
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={async (e) => {
                      const files = e.target.files;
                      if (files) {
                        for (let i = 0; i < files.length; i++) {
                          await uploadImage(files[i]);
                        }
                      }
                    }}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground">
                    Selecione uma ou mais imagens (PNG, JPG, WEBP)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Gerenciar Imagens do Supabase */}
            <Card>
              <CardHeader>
                <CardTitle>Imagens do Carrossel (Supabase)</CardTitle>
                <p className="text-muted-foreground">
                  {loading ? 'Carregando...' : `${dbImages.length} imagens no banco de dados`}
                </p>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dbImages.map((image) => (
                      <div key={image.id} className="relative group">
                        <img 
                          src={image.url} 
                          alt={image.filename}
                          className="w-full aspect-square object-cover rounded-lg border"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteImage(image)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          {image.filename}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Gerenciar Imagens Locais */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Local de Imagens</CardTitle>
                <p className="text-muted-foreground">
                  Adicione imagens temporárias (armazenadas localmente no navegador)
                </p>
              </CardHeader>
              <CardContent>
                <ImageUploader 
                  uploadedImages={uploadedImages} 
                  onImagesChange={handleImagesChange} 
                />
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{dbImages.length}</div>
                    <div className="text-sm text-muted-foreground">Imagens no Supabase</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">{uploadedImages.length}</div>
                    <div className="text-sm text-muted-foreground">Imagens Locais</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview do Carrossel */}
            <Card>
              <CardHeader>
                <CardTitle>Preview do Carrossel</CardTitle>
                <p className="text-muted-foreground">
                  Como o carrossel aparecerá no site
                </p>
              </CardHeader>
              <CardContent>
                <LogoCarousel uploadedImages={uploadedImages} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            {/* Adicionar Novo Projeto */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Projetos de Sites</CardTitle>
                  <p className="text-muted-foreground">
                    Gerencie os projetos exibidos no portfólio
                  </p>
                </div>
                <Button onClick={() => setShowProjectForm(!showProjectForm)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Projeto
                </Button>
              </CardHeader>
              {(showProjectForm || editingProject) && (
                <CardContent>
                  <ProjectForm 
                    project={editingProject}
                    onSuccess={() => {
                      setShowProjectForm(false)
                      setEditingProject(null)
                    }}
                    onCancel={() => {
                      setShowProjectForm(false)
                      setEditingProject(null)
                    }}
                  />
                </CardContent>
              )}
            </Card>

            {/* Lista de Projetos */}
            <Card>
              <CardHeader>
                <CardTitle>Projetos Existentes</CardTitle>
                <p className="text-muted-foreground">
                  {projectsLoading ? 'Carregando...' : `${projects.length} projetos no banco de dados`}
                </p>
              </CardHeader>
              <CardContent>
                {projectsLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : projects.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Nenhum projeto encontrado</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                      <div key={project.id} className="relative group">
                        <ProjectCard project={project} />
                         <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                           <Button
                             variant="secondary"
                             size="sm"
                             onClick={() => setEditingProject(project)}
                           >
                             <Edit className="w-4 h-4" />
                           </Button>
                           <Button
                             variant="destructive"
                             size="sm"
                             onClick={() => deleteProject(project.id)}
                           >
                             <Trash2 className="w-4 h-4" />
                           </Button>
                         </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;