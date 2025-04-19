
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, DollarSign, Rocket } from "lucide-react";

const WhyItMatters: React.FC = () => {
  return (
    <section className="section bg-white" id="why-section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Por Que Isso Importa?</h2>
          <div className="h-1 w-20 bg-coda-purple mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card p-6 shadow-md animate-fade-up [animation-delay:200ms]">
            <CardContent className="p-4">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="p-2 rounded-full bg-coda-lightPurple mr-3 flex items-center justify-center">
                  <Award className="text-coda-purple h-6 w-6" />
                </span>
                O Problema
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A gente sabe como é: talento tech brasileiro de altíssimo nível, mas muitas 
                vezes preso a salários que não refletem seu valor, burocracia e um mercado 
                local que nem sempre oferece os desafios e o crescimento que você busca. 
                Enquanto isso, o mundo precisa do seu código, e empresas lá fora pagam o 
                que você merece, em moeda forte. A ponte entre vocês e as oportunidades 
                ainda é complexa e cheia de ruídos.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card p-6 shadow-md animate-fade-up [animation-delay:400ms]">
            <CardContent className="p-4">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="p-2 rounded-full bg-coda-lightPurple mr-3 flex items-center justify-center">
                  <Globe className="text-coda-purple h-6 w-6" />
                </span>
                Nossa Visão
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Acreditamos que todo dev brasileiro talentoso merece acesso fácil e transparente 
                a oportunidades globais que reconheçam seu potencial. O Coda na Gringa nasceu dessa 
                crença: queremos ser a plataforma que descomplica sua jornada para trabalhar no exterior, 
                seja remoto ou presencial, ajudando você a ganhar mais, crescer na carreira e ter o impacto 
                que você sonha. Estamos começando, testando ideias, mas com a visão clara de construir essa 
                ponte junto com você.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          <div className="flex flex-col items-center max-w-[250px] animate-fade-up [animation-delay:600ms]">
            <div className="rounded-full bg-coda-lightPurple p-4 mb-4">
              <DollarSign className="h-8 w-8 text-coda-darkPurple" />
            </div>
            <h4 className="text-xl font-medium mb-2">Valorização Justa</h4>
            <p className="text-gray-600">Seja remunerado pelo seu real valor em moeda forte</p>
          </div>
          
          <div className="flex flex-col items-center max-w-[250px] animate-fade-up [animation-delay:800ms]">
            <div className="rounded-full bg-coda-lightPurple p-4 mb-4">
              <Rocket className="h-8 w-8 text-coda-darkPurple" />
            </div>
            <h4 className="text-xl font-medium mb-2">Crescimento Acelerado</h4>
            <p className="text-gray-600">Acesse projetos desafiadores e equipes de alto nível</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
