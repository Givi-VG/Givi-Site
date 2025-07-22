import React from 'react';
// FIX: The path is corrected to look in the current directory.
import Icon from './AppIcon';

const TrendingTopics = ({ articles = [], isLoading }) => {
  // Display a subset of articles as "trending"
  const trendingArticles = articles.slice(0, 5);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <Icon name="TrendingUp" size={20} className="text-primary" />
        Trending Topics
      </h3>

      {isLoading ? (
        // Show skeleton loaders while fetching data
        <div className="space-y-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-4 bg-muted/50 rounded-md animate-pulse" />
          ))}
        </div>
      ) : trendingArticles.length > 0 ? (
        <ul className="space-y-3">
          {trendingArticles.map((article) => (
            <li key={article.id} className="group">
              <a
                href="#" // In a real app, this would link to the article detail page
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="mt-1 text-primary/60 group-hover:text-primary">
                  <Icon name="Hash" size={16} />
                </span>
                <span className="line-clamp-2 font-medium">
                  {article.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        // Message to show if no articles are found
        <p className="text-sm text-muted-foreground">No trending topics available at the moment.</p>
      )}
    </div>
  );
};

export default TrendingTopics;