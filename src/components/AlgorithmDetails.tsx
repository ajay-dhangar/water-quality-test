import React, { useState } from 'react';
import { Brain, TreePine, Target, Zap, BarChart3, TrendingUp } from 'lucide-react';

export const AlgorithmDetails: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('random-forest');

  const algorithms = [
    {
      id: 'random-forest',
      name: 'Random Forest',
      icon: TreePine,
      accuracy: 96.2,
      description: 'Ensemble method that combines multiple decision trees to improve prediction accuracy and reduce overfitting.',
      howItWorks: 'Creates multiple decision trees using random subsets of features and data, then averages their predictions for final classification.',
      advantages: [
        'High accuracy and robust performance',
        'Handles missing values well',
        'Provides feature importance rankings',
        'Resistant to overfitting'
      ],
      disadvantages: [
        'Less interpretable than single decision trees',
        'Can be computationally expensive',
        'May overfit with very noisy data'
      ],
      bestFor: 'Large datasets with mixed feature types, when high accuracy is priority'
    },
    {
      id: 'gradient-boosting',
      name: 'Gradient Boosting',
      icon: TrendingUp,
      accuracy: 95.7,
      description: 'Sequential ensemble method that builds models iteratively, with each new model correcting errors from previous ones.',
      howItWorks: 'Trains weak learners sequentially, where each subsequent model focuses on correcting the mistakes of the previous models.',
      advantages: [
        'Excellent predictive performance',
        'Handles different data types well',
        'Provides feature importance',
        'Good for structured data'
      ],
      disadvantages: [
        'Prone to overfitting',
        'Requires careful parameter tuning',
        'Longer training time',
        'Sensitive to outliers'
      ],
      bestFor: 'Structured data problems where high performance is crucial'
    },
    {
      id: 'svm',
      name: 'Support Vector Machine',
      icon: Target,
      accuracy: 94.1,
      description: 'Finds optimal decision boundary by maximizing the margin between different classes in high-dimensional space.',
      howItWorks: 'Maps data to higher dimensions using kernel functions and finds the hyperplane that best separates classes.',
      advantages: [
        'Effective in high-dimensional spaces',
        'Memory efficient',
        'Versatile with different kernel functions',
        'Works well with small datasets'
      ],
      disadvantages: [
        'Slow on large datasets',
        'Sensitive to feature scaling',
        'No probabilistic output',
        'Difficult to interpret'
      ],
      bestFor: 'High-dimensional data, small to medium datasets, text classification'
    },
    {
      id: 'logistic-regression',
      name: 'Logistic Regression',
      icon: BarChart3,
      accuracy: 91.8,
      description: 'Linear model that uses logistic function to model the probability of binary outcomes.',
      howItWorks: 'Uses maximum likelihood estimation to find coefficients that best fit the logistic curve to the data.',
      advantages: [
        'Fast training and prediction',
        'Highly interpretable',
        'Provides probability estimates',
        'No hyperparameter tuning needed'
      ],
      disadvantages: [
        'Assumes linear relationship',
        'Sensitive to outliers',
        'Requires large sample sizes',
        'May struggle with complex patterns'
      ],
      bestFor: 'Baseline models, when interpretability is important, linear relationships'
    },
    {
      id: 'knn',
      name: 'K-Nearest Neighbors',
      icon: Zap,
      accuracy: 89.6,
      description: 'Instance-based learning that classifies data points based on the majority class of their k nearest neighbors.',
      howItWorks: 'Stores all training data and makes predictions by finding the k most similar examples and taking majority vote.',
      advantages: [
        'Simple and intuitive',
        'No assumptions about data distribution',
        'Adapts to new data easily',
        'Works well with small datasets'
      ],
      disadvantages: [
        'Computationally expensive for large datasets',
        'Sensitive to irrelevant features',
        'Requires choosing optimal k value',
        'Poor performance with high-dimensional data'
      ],
      bestFor: 'Small datasets, recommendation systems, when local patterns are important'
    },
    {
      id: 'decision-tree',
      name: 'Decision Tree',
      icon: Brain,
      accuracy: 87.3,
      description: 'Tree-like model that makes decisions by splitting data based on feature values to create pure leaf nodes.',
      howItWorks: 'Recursively splits data based on features that provide the best information gain or gini impurity reduction.',
      advantages: [
        'Highly interpretable',
        'Handles both numerical and categorical data',
        'Requires little data preparation',
        'Can capture non-linear relationships'
      ],
      disadvantages: [
        'Prone to overfitting',
        'Unstable (small data changes affect tree)',
        'Biased toward features with more levels',
        'Can create overly complex trees'
      ],
      bestFor: 'When interpretability is crucial, mixed data types, rule extraction'
    }
  ];

  const selectedAlgo = algorithms.find(algo => algo.id === selectedAlgorithm)!;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Classification Algorithms</h1>
        <p className="text-gray-600 text-lg">
          Deep dive into the 6 machine learning algorithms used for water quality classification
        </p>
      </div>

      {/* Algorithm Selection */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Algorithm</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              onClick={() => setSelectedAlgorithm(algo.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedAlgorithm === algo.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <algo.icon className={`h-6 w-6 ${
                  selectedAlgorithm === algo.id ? 'text-blue-600' : 'text-gray-600'
                }`} />
                <span className="font-semibold text-gray-800">{algo.name}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{algo.description}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Accuracy</span>
                <span className="font-semibold text-blue-600">{algo.accuracy}%</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Algorithm Information */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <selectedAlgo.icon className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{selectedAlgo.name}</h2>
              <p className="text-gray-600 mt-1">{selectedAlgo.description}</p>
            </div>
            <div className="ml-auto text-right">
              <div className="text-3xl font-bold text-blue-600">{selectedAlgo.accuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* How It Works */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
            <p className="text-gray-600 leading-relaxed">{selectedAlgo.howItWorks}</p>
          </div>

          {/* Advantages and Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Advantages
              </h3>
              <ul className="space-y-2">
                {selectedAlgo.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Disadvantages
              </h3>
              <ul className="space-y-2">
                {selectedAlgo.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Use Cases */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Best Use Cases</h3>
            <p className="text-gray-700">{selectedAlgo.bestFor}</p>
          </div>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Comparison</h3>
        <div className="space-y-3">
          {algorithms.map((algo, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-32 text-sm font-medium text-gray-800">{algo.name}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(algo.accuracy / 100) * 100}%` }}
                />
              </div>
              <div className="w-12 text-right text-sm font-semibold text-gray-800">
                {algo.accuracy}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};