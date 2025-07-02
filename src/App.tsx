import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { DataAnalysis } from './components/DataAnalysis';
import { ModelComparison } from './components/ModelComparison';
import { PredictionTool } from './components/PredictionTool';
import { AlgorithmDetails } from './components/AlgorithmDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'analysis':
        return <DataAnalysis />;
      case 'models':
        return <ModelComparison />;
      case 'predict':
        return <PredictionTool />;
      case 'algorithms':
        return <AlgorithmDetails />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;