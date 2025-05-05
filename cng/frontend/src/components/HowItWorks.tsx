
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Star } from "lucide-react";

const HowItWorks: React.FC = () => {
  return (
    <section className="section bg-coda-lightGray" id="how-section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Como Funciona (e Por Que Indicar)?</h2>
          <div className="h-1 w-20 bg-coda-purple mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Nossa ideia é simples: criar um espaço focado em conectar devs brasileiros como você 
            a oportunidades internacionais selecionadas. Menos ruído, mais relevância. Estamos validando 
            hipóteses sobre como fazer isso da melhor forma: curadoria de vagas? Preparação? Comunidade ativa? 
            Sua participação (e indicação) nos ajuda a construir a solução certa.
          </p>
        </div>
        
        <div className="mb-16">
          <Card className="glass-card animate-fade-up [animation-delay:200ms]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Users className="text-coda-purple h-6 w-6 mr-2" />
                Indique um Dev e Ajude a Construir o Futuro
              </h3>
              <p className="text-gray-700 mb-6">
                Para dar o start no Coda na Gringa, estamos começando com indicações qualificadas. 
                Conhece um(a) dev brasileiro(a) incrível (entre 25-35 anos) que sonha em trabalhar pra fora? 
                Indique essa pessoa! Tanto você quanto quem for indicado(a) passam por uma avaliação inicial – 
                queremos garantir que estamos conectando os talentos certos com as oportunidades certas desde o início. 
                É a sua chance de fazer parte e moldar o futuro da plataforma.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-coda-darkPurple">Benefícios para QUEM INDICA (Você!)</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Acesso Antecipado:</strong> Seja um dos primeiros a usar a plataforma quando lançarmos features.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Status de "Founder Member":</strong> Reconhecimento especial na comunidade e acesso a canais exclusivos.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Voz Ativa:</strong> Sua opinião e feedback terão peso extra na definição do produto.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Impacto Real:</strong> Ajude a construir algo que vai mudar a carreira de muitos devs brasileiros.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-coda-darkPurple">Benefícios para QUEM É INDICADO</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Prioridade na Fila:</strong> Seu perfil será um dos primeiros a ser considerado para futuras vagas e testes.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Entrada na Comunidade:</strong> Acesso à comunidade Coda na Gringa para networking e troca de experiências.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Oportunidades Curadas (Futuro):</strong> Acesso a uma seleção inicial de oportunidades alinhadas ao seu perfil.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Jornada Facilitada:</strong> Conte com o Coda na Gringa para simplificar sua busca por vagas internacionais.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-coda-purple p-3 mb-4">
            <Star className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Faça parte do início. Indique um talento e ajude a abrir as portas do mundo para devs BR.</h3>
          <div className="flex items-center mt-4 animate-fade-up [animation-delay:400ms]">
            <ArrowRight className="h-5 w-5 text-coda-purple mr-2" />
            <p className="text-coda-darkPurple font-medium">Role para baixo para fazer sua indicação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
