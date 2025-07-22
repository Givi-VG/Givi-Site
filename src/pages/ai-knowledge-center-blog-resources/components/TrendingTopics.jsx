import React from 'react';
import Icon from '../../../components/AppIcon';

const TrendingTopics = () => {
  const trendingTopics = [
    {
      id: 1,
      title: "GPT-4 Integration Strategies",
      trend: "up",
      change: "+24%",
      articles: 12,
      icon: "Brain"
    },
    {
      id: 2,
      title: "AI Ethics in Business",
      trend: "up",
      change: "+18%",
      articles: 8,
      icon: "Shield"
    },
    {
      id: 3,
      title: "Machine Learning ROI",
      trend: "up",
      change: "+15%",
      articles: 15,
      icon: "TrendingUp"
    },
    {
      id: 4,
      title: "Automated Customer Service",
      trend: "up",
      change: "+12%",
      articles: 10,
      icon: "MessageSquare"
    },
    {
      id: 5,
      title: "Data Privacy & AI",
      trend: "stable",
      change: "+3%",
      articles: 6,
      icon: "Lock"
    },
    {
      id: 6,
      title: "AI-Powered Analytics",
      trend: "up",
      change: "+9%",
      articles: 11,
      icon: "BarChart3"
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return 'TrendingUp';
      case 'down':
        return 'TrendingDown';
      default:
        return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-accent';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon name="Flame" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Trending Topics</h3>
          <p className="text-sm text-muted-foreground">Most searched AI topics this week</p>
        </div>
      </div>

      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div
            key={topic.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer group"
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-lg font-bold text-muted-foreground w-6">
                {index + 1}
              </span>
              <div className="p-2 bg-muted rounded-lg">
                <Icon name={topic.icon} size={16} className="text-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {topic.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {topic.articles} articles
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Icon 
                name={getTrendIcon(topic.trend)} 
                size={16} 
                className={getTrendColor(topic.trend)} 
              />
              <span className={`text-sm font-medium ${getTrendColor(topic.trend)}`}>
                {topic.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-center text-primary hover:text-primary/80 text-sm font-medium transition-colors">
          View All Trending Topics
          <Icon name="ArrowRight" size={16} className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TrendingTopics;