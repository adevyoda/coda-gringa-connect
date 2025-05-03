
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-600">
              © {currentYear} Coda na Gringa | EXPECIAL SERVICOS DO BRASIL LTDA | CNPJ: 44.860.681.0001/33
            </p>
            <p className="text-gray-600 text-sm">
              Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="/privacidade" 
              className="text-gray-600 hover:text-coda-purple transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href="https://wa.me/5581991896229" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-600 hover:text-coda-purple transition-colors"
            >
              Contato <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
