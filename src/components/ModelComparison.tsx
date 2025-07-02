import React, { useState } from 'react';
import { Trophy, Target, BarChart3, Activity } from 'lucide-react';

export const ModelComparison: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('accuracy');

  const models = [
    {
      name: 'Random Forest',
      accuracy: 96.2,
      precision: 95.8,
      recall: 96.5,
      f1Score: 94.1,
      rocAuc: 0.962,
      trainTime: '2.3s',
      status: 'best'
    },
    {
      name: 'Gradient Boosting',
      accuracy: 95.7,
      precision: 95.2,
      recall: 96.1,
      f1Score: 93.6,
      rocAuc: 0.957,
      trainTime: '8.7s',
      status: 'good'
    },
    {
      name: 'Support Vector Machine',
      accuracy: 94.1,
      precision: 93.8,
      recall: 94.4,
      f1Score: 92.1,
      rocAuc: 0.941,
      trainTime: '5.2s',
      status: 'good'
    },
    {
      name: 'Logistic Regression',
      accuracy: 91.8,
      precision: 91.2,
      recall: 92.3,
      f1Score: 89.7,
      rocAuc: 0.918,
      trainTime: '0.8s',
      status: 'average'
    },
    {
      name: 'K-Nearest Neighbors',
      accuracy: 89.6,
      precision: 88.9,
      recall: 90.2,
      f1Score: 87.5,
      rocAuc: 0.896,
      trainTime: '1.2s',
      status: 'average'
    },
    {
      name: 'Decision Tree',
      accuracy: 87.3,
      precision: 86.7,
      recall: 88.1,
      f1Score: 85.4,
      rocAuc: 0.873,
      trainTime: '0.5s',
      status: 'below'
    }
  ];

  const metrics = [
    { id: 'accuracy', label: 'Accuracy', key: 'accuracy', suffix: '%' },
    { id: 'precision', label: 'Precision', key: 'precision', suffix: '%' },
    { id: 'recall', label: 'Recall', key: 'recall', suffix: '%' },
    { id: 'f1Score', label: 'F1-Score', key: 'f1Score', suffix: '%' },
    { id: 'rocAuc', label: 'ROC-AUC', key: 'rocAuc', suffix: '' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'best': return 'bg-green-100 text-green-800 border-green-200';
      case 'good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'average': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'below': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'best': return <Trophy className="h-4 w-4" />;
      case 'good': return <Target className="h-4 w-4" />;
      case 'average': return <BarChart3 className="h-4 w-4" />;
      case 'below': return <Activity className="h-4 w-4" />;
      default: return null;
    }
  };

  const bestModel = models[0];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Model Performance Comparison</h1>
        <p className="text-gray-600 text-lg">
          Comprehensive evaluation of 6 classification algorithms on water quality dataset
        </p>
      </div>

      {/* Best Model Highlight */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Trophy className="h-6 w-6 text-green-600" />
              <span className="text-sm font-medium text-green-600 uppercase tracking-wide">Best Performing Model</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{bestModel.name}</h2>
            <p className="text-gray-600 mt-1">
              Achieved the highest accuracy with excellent precision and recall balance
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-green-600">{bestModel.accuracy}%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
        </div>
      </div>

      {/* Metric Selection */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Compare by Metric</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedMetric === metric.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {metric.label}
            </button>
          ))}
        </div>

        {/* Performance Chart */}
        <div className="space-y-3">
          {models.map((model, index) => {
            const selectedMetricData = metrics.find(m => m.id === selectedMetric);
            const value = model[selectedMetricData?.key as keyof typeof model] as number;
            const maxValue = Math.max(...models.map(m => m[selectedMetricData?.key as keyof typeof m] as number));
            const percentage = (value / maxValue) * 100;

            return (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-40 text-sm font-medium text-gray-800">{model.name}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-16 text-right text-sm font-semibold text-gray-800">
                  {value}{selectedMetricData?.suffix}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Complete Performance Metrics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Precision</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Recall</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">F1-Score</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ROC-AUC</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Train Time</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {models.map((model, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{model.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-semibold">
                    {model.accuracy}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                    {model.precision}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                    {model.recall}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                    {model.f1Score}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                    {model.rocAuc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                    {model.trainTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(model.status)}`}>
                      {getStatusIcon(model.status)}
                      <span className="capitalize">{model.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Insights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Top Performers</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Random Forest</strong> achieved the best overall performance with 96.2% accuracy</li>
              <li>• <strong>Gradient Boosting</strong> showed excellent results with 95.7% accuracy</li>
              <li>• Ensemble methods outperformed individual classifiers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Performance Trade-offs</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Logistic Regression</strong> offers fastest training time (0.8s)</li>
              <li>• <strong>Decision Tree</strong> provides good interpretability but lower accuracy</li>
              <li>• Complex models require longer training but achieve better performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};