
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/hooks/useLanguage';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="service-card hover:animate-pulse-glow overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-1/3 bg-primary transform translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <CardHeader>
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="font-heading">{t(title)}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-base">{t(description)}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
