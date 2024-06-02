// English: Importing libraries
// Portuguese: Importando bibliotecas
// Spanish: Importando bibliotecas
// German: Bibliotheken importieren
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// English: Importing pages
// Portuguese: Importando páginas
// Spanish: Importando páginas
// German: Seiten importieren
import Solicitacao_ticket from './components/pages/solicitacao_ticket/solicitacao_ticket';
import Home from './components/pages/home/Home';
import Pergunta from './components/pages/pergunta_ticket/Pergunta_ticket';
import PreenchimentoDeTicket from './components/pages/Preenchimento_ticket/Preenchimento_ticket';
import Dashboard from './components/pages/dashboard/Dashboard';

// English: Importing components
// Portuguese: Importando componentes
// Spanish: Importando componentes
// German: Komponenten importieren
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// English: Getting the root element from the DOM
// Portuguese: Obtendo o elemento raiz do DOM
// Spanish: Obteniendo el elemento raíz del DOM
// German: Holen Sie sich das Root-Element aus dem DOM
const rootElement = document.getElementById('root');

// English: Rendering the React application
// Portuguese: Renderizando a aplicação React
// Spanish: Renderizando la aplicación React
// German: Die React-Anwendung rendern
ReactDOM.render(
  <Router>
    {/* English: Rendering the Navbar component */}
    {/* Portuguese: Renderizando o componente Navbar */}
    {/* Spanish: Renderizando el componente Navbar */}
    {/* German: Das Navbar-Komponente rendern */}
    <Navbar/>

    {/* English: Defining the routes for the application */}
    {/* Portuguese: Definindo as rotas para a aplicação */}
    {/* Spanish: Definiendo las rutas para la aplicación */}
    {/* German: Definition der Routen für die Anwendung */}
    <Routes>
      <Route exact path="/dashboards" element={<Dashboard/>} /> {/* English: Route for the Dashboard page */}
      <Route exact path="/preenchimento" element={<PreenchimentoDeTicket/>} /> {/* English: Route for the Ticket Filling page */}
      <Route exact path="/pergunta" element={<Pergunta/>} /> {/* English: Route for the Question page */}
      <Route exact path="/solicitacao" element={<Solicitacao_ticket />} /> {/* English: Route for the Request page */}
      <Route path="/" element={<Home />} /> {/* English: Default route for the Home page */}
    </Routes>

    {/* English: Rendering the Footer component */}
    {/* Portuguese: Renderizando o componente Footer */}
    {/* Spanish: Renderizando el componente Footer */}
    {/* German: Das Footer-Komponente rendern */}
    <Footer/>
  </Router>,
  rootElement
);
