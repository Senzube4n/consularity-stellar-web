
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/hooks/useLanguage';

interface ServiceCardProps {
  title?: string;  // Make title optional
  description?: string;  // Make description optional
  icon: React.ReactNode;
  link?: string;
  titleKey?: string;  // Translation key for title
  descriptionKey?: string;  // Translation key for description
}

const ServiceCard = ({ title = '', description = '', icon, link, titleKey, descriptionKey }: ServiceCardProps) => {
  const { t } = useLanguage();
  
  // Use translation keys if provided, otherwise use the direct strings
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;
  
  const cardContent = (
    <>
      <CardHeader>
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="font-heading">{displayTitle}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-base">{displayDescription}</CardDescription>
      </CardContent>
    </>
  );
  
  if (link) {
    return (
      <Link to={link} className="block">
        <Card className="service-card hover:animate-pulse-glow overflow-hidden h-full transition-all duration-300 hover:shadow-lg group">
          <div className="absolute top-0 left-0 w-1 h-1/3 bg-primary transform translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          {cardContent}
        </Card>
      </Link>
    );
  }
  
  return (
    <Card className="service-card hover:animate-pulse-glow overflow-hidden h-full group">
      <div className="absolute top-0 left-0 w-1 h-1/3 bg-primary transform translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      {cardContent}
    </Card>
  );
};

export default ServiceCard;
