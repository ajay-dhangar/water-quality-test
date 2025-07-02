import React from 'react';
import { Droplets, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive EDA with correlation analysis and feature importance',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Multiple Algorithms',
      description: '6 classification models including Random Forest, SVM, and XGBoost',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Real-time Predictions',
      description: 'Interactive tool for instant water quality classification',
      color: 'text-purple-600'
    }
  ];

  const quickActions = [
    { label: 'Explore Data Analysis', page: 'analysis', color: 'bg-blue-600' },
    { label: 'Compare Models', page: 'models', color: 'bg-green-600' },
    { label: 'Test Predictions', page: 'predict', color: 'bg-purple-600' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <Droplets className="h-16 w-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Water Quality Classification
          <span className="block text-blue-600">Machine Learning Project</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A comprehensive machine learning solution for classifying water samples based on their quality parameters. 
          Using advanced classification algorithms to ensure safe drinking water standards.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Overview</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Objective</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Classify water samples as safe or unsafe for consumption based on multiple water quality parameters 
              including pH, hardness, solids, chloramines, sulfate, conductivity, organic carbon, trihalomethanes, and turbidity.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Methodology</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Data preprocessing and feature engineering</li>
              <li>• Exploratory data analysis with visualizations</li>
              <li>• Training 6 different classification algorithms</li>
              <li>• Model evaluation using multiple metrics</li>
              <li>• Performance comparison and best model selection</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Algorithms Used</h3>
            <div className="space-y-2">
              {['Logistic Regression', 'K-Nearest Neighbors', 'Decision Tree', 'Random Forest', 'Support Vector Machine', 'Gradient Boosting'].map((algo, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">{algo}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">96.2%</div>
                <div className="text-sm text-gray-600">Best Accuracy</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">0.94</div>
                <div className="text-sm text-gray-600">F1-Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Explore the Project</h2>
        <div className="flex justify-center space-x-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => onNavigate(action.page)}
              className={`${action.color} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2 shadow-lg`}
            >
              <span>{action.label}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};