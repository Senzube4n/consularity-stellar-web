
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface FeatureColumnProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureColumn = ({ title, description, icon }: FeatureColumnProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-start">
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-heading mb-2">{t(title)}</h3>
      <p className="text-muted-foreground">{t(description)}</p>
    </div>
  );
};

export default FeatureColumn;
