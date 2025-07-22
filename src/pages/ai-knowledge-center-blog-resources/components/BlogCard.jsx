import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogCard = ({ article, featured = false }) => {
  const formatDate = (date) => {
    if (!date) return 'Just now';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  /**
   * Calculates reading time.
   * It uses the full 'content' if available, otherwise it falls back to the 'excerpt'.
   * This prevents the component from crashing if the API doesn't provide full content.
   */
  const getReadingTime = (article) => {
    const textToMeasure = article.content || article.excerpt || ''; // Use content, fallback to excerpt, then to empty string
    const wordsPerMinute = 200;
    const wordCount = textToMeasure.split(/\s+/).length; // Split by any whitespace
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Safely access nested properties to prevent errors if data is incomplete
  const authorName = article?.author?.name || 'Givi AI';
  const authorRole = article?.author?.role || 'AI Author';
  const authorAvatar = article?.author?.avatar || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&crop=face';
  const views = article?.views || 0;

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-xl bg-card border border-border hover-lift transition-smooth">
        <div className="aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">
              {article.category}
            </span>
            <span className="text-accent font-medium text-sm">Featured</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-300 mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={authorAvatar}
                alt={authorName}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-white font-medium text-sm">{authorName}</p>
                <p className="text-gray-400 text-xs">{formatDate(article.publishedAt)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={14} />
                {getReadingTime(article)} min read
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Eye" size={14} />
                {views.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card border border-border rounded-xl overflow-hidden hover-lift transition-smooth">
      <div className="aspect-video overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
            {article.category}
          </span>
          <span className="text-muted-foreground text-sm">{formatDate(article.publishedAt)}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={authorAvatar}
              alt={authorName}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-foreground font-medium text-sm">{authorName}</p>
              <p className="text-muted-foreground text-xs">{authorRole}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              {getReadingTime(article)} min
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Eye" size={14} />
              {views.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;