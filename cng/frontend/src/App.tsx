import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter , Routes, Route, Navigate } from "react-router-dom"; // Adicione Navigate aqui
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter basename={import.meta.env.MODE === 'development' ? '' : '/coda-gringa-connect/cng/'}>
        <Routes>
          <Route path="/" element={<Navigate to="/cng" replace />} /> {/* Adicione este redirecionamento */}
          <Route path="/cng" element={<Index />} /> {/* Certifique-se de que esta rota esteja correta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;