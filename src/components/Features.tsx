import React from 'react';
import { LineChart, Database, Zap, BarChart4, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Options Data Import',
    description: 'Import and analyze historical options data including Greeks, implied volatility, and volume',
  },
  {
    icon: LineChart,
    title: 'Strategy Backtesting',
    description: 'Test complex options strategies with support for multi-leg trades and rolling positions',
  },
  {
    icon: BarChart4,
    title: 'Performance Analytics',
    description: 'Detailed P&L analysis, win rates, and risk metrics specific to options trading',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced Greeks analysis and position sizing recommendations for day trading',
  },
  {
    icon: Clock,
    title: 'Intraday Simulation',
    description: 'Simulate day trading scenarios with minute-by-minute options data',
  },
  {
    icon: Zap,
    title: 'Real-time Analysis',
    description: 'Lightning-fast calculations for quick decision making during market hours',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Built for Options Day Traders
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to develop and test winning options trading strategies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}