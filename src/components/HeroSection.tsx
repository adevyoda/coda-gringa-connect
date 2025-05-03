
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-coda-lightPurple via-white to-coda-blue min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
          SEU CÓDIGO VALE MAIS LÁ FORA. CHEGOU A HORA DE GANHAR EM MOEDA FORTE.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Estamos construindo a ponte para conectar você, dev brasileiro, às melhores vagas
            de tecnologia no exterior (remotas ou presenciais). Um projeto Coda na Gringa
            em fase de testes, feito por devs, para devs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-coda-purple hover:bg-coda-darkPurple text-white rounded-full"
              onClick={() => {
                const form = document.getElementById('referral-form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Indicar um Dev <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-coda-purple text-coda-darkPurple hover:bg-coda-lightPurple rounded-full"
              onClick={() => {
                const about = document.getElementById('about-section');
                about?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full md:w-1/2 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=1600&q=80')] bg-cover bg-right"></div>
      </div>
    </section>
  );
};

export default HeroSection;
