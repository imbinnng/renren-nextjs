import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  subtitle?: string;
}

export default function PageHeader({ title, description, actions, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        {actions && (
          <div className="flex items-center space-x-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}