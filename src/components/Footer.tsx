import { Heart, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/jabbud-logo-dark.png";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5531986752884?text=Olá! Gostaria de saber mais sobre os serviços da Jabbud Creations e fazer um orçamento.", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/jabbudcreations", "_blank");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-dark text-dark-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <img 
                  src={logo} 
                  alt="Jabbud Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-dark-foreground/80 leading-relaxed mb-4">
                Especialistas em logotipos e identidade visual digital. Criamos designs únicos 
                que fazem sua marca se destacar no ambiente digital com profissionalismo e criatividade.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center hover:bg-whatsapp/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleInstagram}
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="font-semibold text-dark-foreground mb-4">Navegação</h4>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection("#inicio")}
                  className="block text-dark-foreground/80 hover:text-primary transition-colors"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection("#sobre")}
                  className="block text-dark-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection("#produtos")}
                  className="block text-dark-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection("#portfolio")}
                  className="block text-dark-foreground/80 hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection("#contato")}
                  className="block text-dark-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold text-dark-foreground mb-4">Contato</h4>
              <div className="space-y-2 text-dark-foreground/80 text-sm">
                <div>
                  <strong>WhatsApp:</strong>
                  <br />
                  (31) 98675-2884
                </div>
                <div>
                  <strong>Instagram:</strong>
                  <br />
                  @jabbudcreations
                </div>
                <div>
                  <strong>Horário:</strong>
                  <br />
                  Seg-Sex: 8h às 18h
                  <br />
                  Sáb: 8h às 14h
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-dark-foreground/20 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dark-foreground/60">
              <div className="flex items-center gap-1">
                <span>© 2024 Jabbud. Feito com</span>
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span>para você.</span>
              </div>
              <div>
                Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;