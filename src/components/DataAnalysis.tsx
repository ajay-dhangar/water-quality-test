import React, { useState } from 'react';
import { BarChart, LineChart, TrendingUp, Database, Eye } from 'lucide-react';

export const DataAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState('distribution');

  const features = [
    { name: 'pH', mean: 7.08, std: 1.59, min: 0.0, max: 14.0 },
    { name: 'Hardness', mean: 196.37, std: 32.88, min: 47.43, max: 323.12 },
    { name: 'Solids', mean: 22014.09, std: 8768.57, min: 320.94, max: 61227.19 },
    { name: 'Chloramines', mean: 7.12, std: 1.58, min: 0.35, max: 13.13 },
    { name: 'Sulfate', mean: 333.78, std: 41.42, min: 129.00, max: 481.03 },
    { name: 'Conductivity', mean: 426.21, std: 80.82, min: 181.48, max: 753.34 },
    { name: 'Organic_carbon', mean: 14.28, std: 3.31, min: 2.20, max: 28.30 },
    { name: 'Trihalomethanes', mean: 66.40, std: 16.18, min: 0.74, max: 124.00 },
    { name: 'Turbidity', mean: 3.97, std: 0.78, min: 1.45, max: 6.74 }
  ];

  const correlationData = [
    { feature1: 'pH', feature2: 'Sulfate', correlation: 0.15 },
    { feature1: 'Hardness', feature2: 'Solids', correlation: 0.18 },
    { feature1: 'Chloramines', feature2: 'pH', correlation: -0.07 },
    { feature1: 'Conductivity', feature2: 'Solids', correlation: 0.07 },
    { feature1: 'Organic_carbon', feature2: 'Trihalomethanes', correlation: 0.11 },
    { feature1: 'Turbidity', feature2: 'Hardness', correlation: 0.03 }
  ];

  const renderDistributionChart = (feature: any) => {
    const width = 300;
    const height = 200;
    const bars = 20;
    
    return (
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-semibold text-gray-800 mb-2">{feature.name}</h4>
        <div className="flex items-end justify-center space-x-1 h-32">
          {Array.from({ length: bars }, (_, i) => {
            const height = Math.random() * 100 + 20;
            return (
              <div
                key={i}
                className="bg-blue-500 w-3 rounded-t"
                style={{ height: `${height}px` }}
              />
            );
          })}
        </div>
        <div className="text-xs text-gray-600 mt-2">
          <div>Mean: {feature.mean}</div>
          <div>Std: {feature.std}</div>
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'distribution', label: 'Feature Distributions', icon: BarChart },
    { id: 'correlation', label: 'Correlation Analysis', icon: TrendingUp },
    { id: 'summary', label: 'Statistical Summary', icon: Database },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Exploratory Data Analysis</h1>
        <p className="text-gray-600 text-lg">
          Comprehensive analysis of water quality dataset with 3276 samples and 9 features
        </p>
      </div>

      {/* Dataset Overview */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Database className="h-5 w-5 mr-2 text-blue-600" />
          Dataset Overview
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">3,276</div>
            <div className="text-sm text-gray-600">Total Samples</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">9</div>
            <div className="text-sm text-gray-600">Features</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">61%</div>
            <div className="text-sm text-gray-600">Safe Water</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">39%</div>
            <div className="text-sm text-gray-600">Unsafe Water</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 flex-1 ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        {activeTab === 'distribution' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Feature Distribution Analysis</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {features.slice(0, 6).map((feature, index) => renderDistributionChart(feature))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                Key Observations
              </h4>
              <ul className="text-gray-600 space-y-1">
                <li>• pH values show normal distribution around 7.08</li>
                <li>• Solids content varies significantly (320 - 61,227)</li>
                <li>• Most features follow approximately normal distributions</li>
                <li>• Some outliers detected in Solids and Sulfate measurements</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'correlation' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Feature Correlation Matrix</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Correlation Heatmap</h4>
                <div className="bg-gradient-to-br from-blue-100 to-red-100 p-6 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                    <div>Interactive Correlation Matrix</div>
                    <div className="text-sm">Visual representation of feature relationships</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Strong Correlations</h4>
                <div className="space-y-3">
                  {correlationData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm">
                        <span className="font-medium">{item.feature1}</span> ↔ <span className="font-medium">{item.feature2}</span>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        Math.abs(item.correlation) > 0.1 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {item.correlation > 0 ? '+' : ''}{item.correlation}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm text-gray-600">
                    <strong>Insight:</strong> Low correlation values indicate good feature independence, 
                    reducing multicollinearity concerns for model training.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'summary' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Statistical Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-3 text-left font-semibold">Feature</th>
                    <th className="border border-gray-200 p-3 text-center font-semibold">Mean</th>
                    <th className="border border-gray-200 p-3 text-center font-semibold">Std Dev</th>
                    <th className="border border-gray-200 p-3 text-center font-semibold">Min</th>
                    <th className="border border-gray-200 p-3 text-center font-semibold">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium">{feature.name}</td>
                      <td className="border border-gray-200 p-3 text-center">{feature.mean}</td>
                      <td className="border border-gray-200 p-3 text-center">{feature.std}</td>
                      <td className="border border-gray-200 p-3 text-center">{feature.min}</td>
                      <td className="border border-gray-200 p-3 text-center">{feature.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};