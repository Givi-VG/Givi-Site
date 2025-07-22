import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Button from '../../../components/ui/Button';


const PerformanceBenchmarks = ({ selectedDemo }) => {
  const [activeMetric, setActiveMetric] = useState('accuracy');

  const benchmarkData = {
    'text-to-speech': {
      accuracy: [
        { name: 'Givi AI', value: 98.5, color: '#4f8cf7' },
        { name: 'Competitor A', value: 94.2, color: '#6b7280' },
        { name: 'Competitor B', value: 91.8, color: '#9ca3af' },
        { name: 'Industry Avg', value: 89.5, color: '#d1d5db' }
      ],
      speed: [
        { name: 'Givi AI', value: 1.2, color: '#4f8cf7' },
        { name: 'Competitor A', value: 2.8, color: '#6b7280' },
        { name: 'Competitor B', value: 3.5, color: '#9ca3af' },
        { name: 'Industry Avg', value: 4.1, color: '#d1d5db' }
      ],
      cost: [
        { name: 'Givi AI', value: 0.008, color: '#4f8cf7' },
        { name: 'Competitor A', value: 0.015, color: '#6b7280' },
        { name: 'Competitor B', value: 0.022, color: '#9ca3af' },
        { name: 'Industry Avg', value: 0.018, color: '#d1d5db' }
      ]
    },
    'speech-to-text': {
      accuracy: [
        { name: 'Givi AI', value: 99.2, color: '#4f8cf7' },
        { name: 'Competitor A', value: 96.8, color: '#6b7280' },
        { name: 'Competitor B', value: 94.5, color: '#9ca3af' },
        { name: 'Industry Avg', value: 92.3, color: '#d1d5db' }
      ],
      speed: [
        { name: 'Givi AI', value: 0.8, color: '#4f8cf7' },
        { name: 'Competitor A', value: 1.5, color: '#6b7280' },
        { name: 'Competitor B', value: 2.1, color: '#9ca3af' },
        { name: 'Industry Avg', value: 1.9, color: '#d1d5db' }
      ],
      cost: [
        { name: 'Givi AI', value: 0.006, color: '#4f8cf7' },
        { name: 'Competitor A', value: 0.012, color: '#6b7280' },
        { name: 'Competitor B', value: 0.018, color: '#9ca3af' },
        { name: 'Industry Avg', value: 0.014, color: '#d1d5db' }
      ]
    }
  };

  const performanceMetrics = [
    { id: 'accuracy', name: 'Accuracy', icon: 'Target', unit: '%' },
    { id: 'speed', name: 'Processing Speed', icon: 'Zap', unit: 's' },
    { id: 'cost', name: 'Cost per Request', icon: 'DollarSign', unit: '$' }
  ];

  const currentData = benchmarkData[selectedDemo?.id] || benchmarkData['text-to-speech'];
  const chartData = currentData[activeMetric] || [];

  const getMetricDescription = (metric) => {
    const descriptions = {
      accuracy: 'Percentage of correctly processed requests with high confidence scores',
      speed: 'Average processing time per request in seconds (lower is better)',
      cost: 'Cost per API request in USD (lower is better)'
    };
    return descriptions[metric] || '';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const metric = performanceMetrics.find(m => m.id === activeMetric);
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-foreground">{label}</p>
          <p className="text-primary">
            {data.value}{metric?.unit} {metric?.name}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="surface-elevated">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="BarChart3" size={24} className="text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Performance Benchmarks</h3>
              <p className="text-sm text-muted-foreground">
                Compare Givi AI performance against industry standards
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" iconName="Download">
              Export Data
            </Button>
            <Button variant="outline" size="sm" iconName="RefreshCw">
              Refresh
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {selectedDemo ? (
          <div className="space-y-6">
            <div className="flex items-center space-x-1 overflow-x-auto">
              {performanceMetrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeMetric === metric.id
                      ? 'bg-primary text-white' :'bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                  }`}
                >
                  <Icon name={metric.icon} size={16} />
                  <span>{metric.name}</span>
                </button>
              ))}
            </div>

            <div className="bg-muted/10 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                {getMetricDescription(activeMetric)}
              </p>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2c2c2c" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#a0a0a0" 
                    fontSize={12}
                    tick={{ fill: '#a0a0a0' }}
                  />
                  <YAxis 
                    stroke="#a0a0a0" 
                    fontSize={12}
                    tick={{ fill: '#a0a0a0' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill="#4f8cf7"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-smooth ${
                    item.name === 'Givi AI' ?'bg-primary/10 border-primary/20' :'bg-muted/10 border-muted/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    {item.name === 'Givi AI' && (
                      <Icon name="Crown" size={16} className="text-primary" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {item.value}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      {performanceMetrics.find(m => m.id === activeMetric)?.unit}
                    </span>
                  </div>
                  {item.name === 'Givi AI' && (
                    <div className="mt-2 text-xs text-accent">
                      ↑ {activeMetric === 'speed' || activeMetric === 'cost' ? 'Faster' : 'Better'} than average
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="TrendingUp" size={20} className="text-accent mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Performance Advantage</h4>
                  <p className="text-sm text-muted-foreground">
                    Givi AI consistently outperforms industry standards across all key metrics, 
                    delivering superior accuracy, faster processing times, and cost-effective solutions 
                    for your AI implementation needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Benchmarks updated: July 12, 2025 • Based on 10,000+ test samples
              </div>
              <Button variant="outline" size="sm" iconName="ExternalLink">
                View Full Report
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="BarChart3" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h4 className="text-lg font-medium text-foreground mb-2">No Demo Selected</h4>
            <p className="text-muted-foreground">
              Choose a demo from the lab to view performance benchmarks
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceBenchmarks;