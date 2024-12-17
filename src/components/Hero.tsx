import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './layout/Container';
import { Button } from './ui/Button';
import { CALENDLY_LINK } from '../constants/company';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-20">
      <Container className="pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Master Options Day Trading with{' '}
          <span className="text-blue-600">Advanced Backtesting</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Optimize your options trading strategies with institutional-grade backtesting.
          Perfect for day traders focused on maximizing profits while managing risk.
        </p>
        <div className="flex justify-center">
          <a 
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="inline-flex items-center px-6 py-3">
              Request a Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000"
            alt="Options trading dashboard"
            className="rounded-lg shadow-2xl mx-auto max-w-full"
          />
        </div>
      </Container>
    </div>
  );
}