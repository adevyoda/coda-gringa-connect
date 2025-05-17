import LogoExpecial from "../assets/expeciallogo.png";
import LogoCoda from "../assets/codanagringalogo.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Parece que essa rota fugiu pro café.
        </p><p className="text-xl text-gray-600 mb-4">Volte pra base. O deploy te espera.</p>

        {/* LOGOS AQUI */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <img
            src={LogoExpecial}
            alt="Expecial Servicos do Brasil"
            className="h-[62px] w-auto"
          />
          <img
            src={LogoCoda}
            alt="Coda na Gringa"
            className="h-24 w-auto"
          />
        </div>
        
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
