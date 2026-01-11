import React from 'react';
import { Card } from '../src/components/ui/card';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-2xl font-bold text-gray-900 mb-6" style={{ color: '#111827' }}>
          🏠 人人网
        </div>
        
        <div className="renren-card p-6">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>
            分享你的新鲜事...
          </h2>
          <textarea
            placeholder="说点什么吧..."
            className="w-full p-3 border rounded-lg"
            style={{ borderColor: 'var(--renren-border)' }}
            rows={4}
          />
          <div className="flex justify-end mt-4">
            <button 
              className="px-6 py-2 rounded-lg text-white"
              style={{ backgroundColor: 'var(--renren-blue)' }}
            >
              发布
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;