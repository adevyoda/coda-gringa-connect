
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Rocket } from "lucide-react";

const ReferralForm: React.FC = () => {
  const [formData, setFormData] = useState({
    referrerName: '',
    refereeName: '',
    refereeEmail: '',
    mainArea: '',
    alreadyWorksAbroad: '',
    englishLevel: '',
    profileLink: '',
    observations: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['referrerName', 'refereeName', 'refereeEmail', 'mainArea', 'alreadyWorksAbroad', 'englishLevel', 'profileLink'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Indicação enviada!",
        description: "Recebemos sua indicação com sucesso.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        referrerName: '',
        refereeName: '',
        refereeEmail: '',
        mainArea: '',
        alreadyWorksAbroad: '',
        englishLevel: '',
        profileLink: '',
        observations: ''
      });
    }, 1500);
  };

  return (
    <section className="section bg-gradient-to-br from-coda-lightPurple to-white" id="referral-form">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Indique um(a) Dev para o Coda na Gringa</h2>
                <p className="text-gray-700">
                  Ajude a construir a comunidade Coda na Gringa. Sua indicação faz a diferença.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="glass-card p-8 animate-fade-up [animation-delay:200ms]">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="referrerName">Seu Nome Completo</Label>
                    <Input 
                      id="referrerName" 
                      name="referrerName" 
                      placeholder="Digite seu nome completo" 
                      value={formData.referrerName}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-gray-500">Pra gente saber quem é o(a) "Founder Member"!</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="refereeName">Nome Completo do(a) Indicado(a)</Label>
                    <Input 
                      id="refereeName" 
                      name="refereeName" 
                      placeholder="Digite o nome da pessoa indicada" 
                      value={formData.refereeName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="refereeEmail">E-mail do(a) Indicado(a)</Label>
                    <Input 
                      id="refereeEmail" 
                      name="refereeEmail" 
                      type="email"
                      placeholder="email@exemplo.com" 
                      value={formData.refereeEmail}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-gray-500">Usaremos este e-mail para o convite.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mainArea">Área de Atuação Principal</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('mainArea', value)}
                      value={formData.mainArea}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione a área principal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="backend">Backend</SelectItem>
                        <SelectItem value="fullstack">Fullstack</SelectItem>
                        <SelectItem value="mobile">Mobile (iOS/Android)</SelectItem>
                        <SelectItem value="devops">DevOps</SelectItem>
                        <SelectItem value="data">Dados (Engenharia/Ciência)</SelectItem>
                        <SelectItem value="qa">QA</SelectItem>
                        <SelectItem value="security">Segurança</SelectItem>
                        <SelectItem value="other">Outra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Essa pessoa já trabalha remoto para fora do Brasil?</Label>
                    <RadioGroup 
                      onValueChange={(value) => handleRadioChange('alreadyWorksAbroad', value)}
                      value={formData.alreadyWorksAbroad}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="englishLevel">Nível de Inglês (Autoavaliação)</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('englishLevel', value)}
                      value={formData.englishLevel}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o nível de inglês" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Básico</SelectItem>
                        <SelectItem value="intermediate">Intermediário</SelectItem>
                        <SelectItem value="advanced">Avançado</SelectItem>
                        <SelectItem value="fluent">Fluente</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500">Seja honesto(a), ajuda na avaliação.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profileLink">LinkedIn ou Portfólio</Label>
                    <Input 
                      id="profileLink" 
                      name="profileLink" 
                      placeholder="https://" 
                      value={formData.profileLink}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-gray-500">Cole o link principal aqui (Ex: LinkedIn, GitHub, site pessoal).</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="observations">Algo mais que devemos saber? (Opcional)</Label>
                    <Textarea 
                      id="observations" 
                      name="observations" 
                      placeholder="Ex: 'Excelente em React Native', 'Procurando vaga na Europa'"
                      value={formData.observations}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-coda-purple hover:bg-coda-darkPurple text-white rounded-full font-semibold py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "INDICAR AGORA E CONSTRUIR O FUTURO 🚀"}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="glass-card p-8 text-center animate-fade-in">
              <div className="rounded-full bg-green-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-coda-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Valeu!</h3>
              <p className="text-gray-700 mb-6">
                Sua indicação foi recebida. Entraremos em contato com você e com {formData.refereeName} em 
                breve com os próximos passos. Fique de olho no seu e-mail e bora construir o Coda na Gringa juntos!
              </p>
              <div className="mt-8">
                <p className="font-medium text-gray-700 mb-2">Que tal ouvir nosso último podcast enquanto espera?</p>
                <a 
                  href="https://youtube.com/@CodaNaGringa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-coda-purple text-white px-6 py-2 rounded-full hover:bg-coda-darkPurple transition-colors"
                >
                  Ouvir o Podcast <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReferralForm;
