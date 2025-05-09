
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { useTheme } from '@/hooks/useTheme';

// Performance data
const performanceData = [
  { month: 'Jan', baseline: 40, withConsularity: 60 },
  { month: 'Feb', baseline: 45, withConsularity: 72 },
  { month: 'Mar', baseline: 42, withConsularity: 80 },
  { month: 'Apr', baseline: 47, withConsularity: 85 },
  { month: 'May', baseline: 44, withConsularity: 92 },
  { month: 'Jun', baseline: 48, withConsularity: 96 },
];

// Cost reduction data
const costData = [
  { month: 'Jan', before: 100, after: 100 },
  { month: 'Feb', before: 100, after: 85 },
  { month: 'Mar', before: 100, after: 75 },
  { month: 'Apr', before: 100, after: 68 },
  { month: 'May', before: 100, after: 62 },
  { month: 'Jun', before: 100, after: 60 },
];

// Implementation timeline data
const timelineData = [
  { phase: 'Planning', traditional: 30, consularity: 15 },
  { phase: 'Setup', traditional: 45, consularity: 20 },
  { phase: 'Configuration', traditional: 60, consularity: 25 },
  { phase: 'Testing', traditional: 40, consularity: 20 },
  { phase: 'Training', traditional: 30, consularity: 15 },
  { phase: 'Go Live', traditional: 20, consularity: 10 },
];

const PerformanceCharts = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState('performance');
  
  const textColor = theme === 'dark' ? '#f1f5f9' : '#334155';
  const gridColor = theme === 'dark' ? '#334155' : '#e2e8f0';
  const primaryColor = '#0EA5E9';
  const secondaryColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
      <Tabs defaultValue="performance" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="cost">Cost Reduction</TabsTrigger>
          <TabsTrigger value="timeline">Implementation Timeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance" className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={performanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="month" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                  color: textColor,
                  borderColor: gridColor
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="baseline" 
                name="Baseline" 
                stroke={secondaryColor} 
                activeDot={{ r: 8 }}
                strokeWidth={2} 
              />
              <Line 
                type="monotone" 
                dataKey="withConsularity" 
                name="With Consularity" 
                stroke={primaryColor} 
                activeDot={{ r: 8 }} 
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>
        
        <TabsContent value="cost" className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={costData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="month" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                  color: textColor,
                  borderColor: gridColor
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="before" 
                name="Before" 
                stroke={secondaryColor} 
                fill={secondaryColor} 
                fillOpacity={0.3}
              />
              <Area 
                type="monotone" 
                dataKey="after" 
                name="After Consularity" 
                stroke={primaryColor} 
                fill={primaryColor} 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>
        
        <TabsContent value="timeline" className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={timelineData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={false} />
              <XAxis type="number" stroke={textColor} />
              <YAxis type="category" dataKey="phase" stroke={textColor} width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                  color: textColor,
                  borderColor: gridColor
                }} 
              />
              <Legend />
              <Bar dataKey="traditional" name="Traditional Approach" fill={secondaryColor} />
              <Bar dataKey="consularity" name="Consularity Method" fill={primaryColor} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceCharts;
