
import React from 'react';
import { ExternalLink } from 'lucide-react';

const AboutProject: React.FC = () => {
  return (
    <section className="section bg-white" id="about-section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Sobre o Projeto Coda na Gringa</h2>
          <div className="h-1 w-20 bg-coda-purple mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 animate-fade-up [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-3 text-coda-darkPurple">Um Experimento Transparente</h3>
            <p className="text-gray-700">
              O Coda na Gringa (a plataforma) é, hoje, um <strong>experimento sério</strong>. 
              Estamos na fase de <strong>MVP (Minimum Viable Product)</strong>, o que significa que estamos 
              testando hipóteses, aprendendo rápido e construindo com base no feedback da comunidade. 
              Sua participação e suas indicações são fundamentais para validarmos se estamos no caminho certo. 
              Queremos ouvir você!
            </p>
          </div>
          
          <div className="glass-card p-6 animate-fade-up [animation-delay:400ms]">
            <h3 className="text-xl font-semibold mb-3 text-coda-darkPurple">Já Estamos no Ar (com o Podcast!)</h3>
            <p className="text-gray-700 mb-4">
              A ideia da plataforma nasceu das conversas e da comunidade que estamos construindo com o 
              <strong> Podcast Coda na Gringa</strong>. Lá, batemos um papo com devs brasileiros que já 
              desbravaram o mercado internacional, compartilhando histórias, dicas e desafios. É a nossa 
              forma de já estar conectado com você e com o mercado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://youtube.com/@CodaNaGringa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-coda-purple hover:text-coda-darkPurple transition-colors"
              >
                YouTube <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <a 
                href="https://spotify.com/show/CodaNaGringa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-coda-purple hover:text-coda-darkPurple transition-colors"
              >
                Spotify <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="glass-card p-6 animate-fade-up [animation-delay:600ms]">
            <h3 className="text-xl font-semibold mb-3 text-coda-darkPurple">Quem Está Por Trás</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Nome do Projeto:</strong> Coda na Gringa</li>
              <li><strong>Empresa:</strong> Coda na Gringa Ltda</li>
              <li><strong>CNPJ:</strong> XX.XXX.XXX/0001-XX</li>
              <li><strong>Sede:</strong> São Paulo/SP, Brasil</li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-coda-purple hover:text-coda-darkPurple transition-colors"
                >
                  <strong>Contato Rápido (WhatsApp)</strong>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
