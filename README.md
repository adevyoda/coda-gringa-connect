# Coda na Gringa Connect

Uma aplicação frontend moderna para conectar desenvolvedores brasileiros ao mercado internacional de tecnologia.  

---

## 🚀 Visão Geral

1. **Início leve**  
   - Código aberto no GitHub  
   - Frontend estático hospedado no GitHub Pages  
   - DNS e HTTPS gerenciados pelo Cloudflare  

2. **Próxima fase**  
   - Backend e APIs em cloud dedicada (Oracle Cloud Free Tier)  
   - Banco de dados MySQL/Autonomous DB  
   - Infraestrutura gerenciada com VM, Nginx e CI/CD automatizado  

---

## 📦 Tecnologias Principais (Frontend)

- **React** — biblioteca de UI  
- **Next.js** — SSG & SSR para React  
- **TypeScript** — tipagem estática  
- **Tailwind CSS** — utilitários CSS  
- **shadcn/ui** — componentes acessíveis (Radix + Tailwind)  
- **Lucide Icons** — ícones em React  
- **Framer Motion** — animações declarativas  
- **Recharts** — gráficos em React  
- **Vercel** — deploy contínuo (produção)  

---

## 📁 Estrutura do Repositório

coda-gringa-connect/
├── .github/ # Workflows de CI/CD
├── .vscode/ # Configurações do editor
├── cng/
│ ├── backend/ # (futuro) servidor e APIs
│ └── frontend/ # aplicação React + Vite/Next
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ └── pages/
│ ├── public/
│ ├── dist/ # build estático
│ └── package.json
├── docs/ # Documentação complementar
├── shared/ # Módulos compartilhados
└── README.md # Este documento

yaml
Copiar
Editar

---

## 📈 Próximos Passos

1. Ajustar CI/CD para deploy automático no GitHub Pages  
2. Configurar um Cloudflare Worker ou serviço backend leve  
3. Migrar backend completo para Oracle Cloud Free Tier  
4. Integrar banco de dados e monitoramento  

> **Comece simples, escale gradualmente.**  
> Frontend no GitHub Pages + Cloudflare hoje, backend robusto na Oracle amanhã.  