import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5531986752884?text=Olá! Gostaria de saber mais sobre os serviços da Jabbud Creations.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-14 h-14 rounded-full shadow-glow animate-pulse hover:animate-none"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;