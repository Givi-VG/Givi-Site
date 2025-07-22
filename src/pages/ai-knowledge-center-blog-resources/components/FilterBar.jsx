import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedAudience, 
  onAudienceChange,
  selectedComplexity,
  onComplexityChange,
  searchQuery,
  onSearchChange,
  onClearFilters
}) => {
  const categories = [
    { id: 'all', name: 'All Topics', icon: 'Grid3X3' },
    { id: 'implementation', name: 'Implementation Guides', icon: 'Settings' },
    { id: 'trends', name: 'Industry Trends', icon: 'TrendingUp' },
    { id: 'technical', name: 'Technical Deep Dives', icon: 'Code' },
    { id: 'case-studies', name: 'Case Studies', icon: 'FileText' },
    { id: 'tutorials', name: 'Tutorials', icon: 'PlayCircle' }
  ];

  const audiences = [
    { id: 'all', name: 'All Audiences' },
    { id: 'technical', name: 'Technical Teams' },
    { id: 'executive', name: 'Executives' },
    { id: 'operational', name: 'Operations' }
  ];

  const complexityLevels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedAudience !== 'all' || selectedComplexity !== 'all' || searchQuery;

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon
          name="Search"
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Search articles, guides, and resources..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">Content Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Icon name={category.icon} size={16} />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Audience and Complexity Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Target Audience</h3>
          <div className="flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => onAudienceChange(audience.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-smooth ${
                  selectedAudience === audience.id
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {audience.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Complexity Level</h3>
          <div className="flex flex-wrap gap-2">
            {complexityLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => onComplexityChange(level.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-smooth ${
                  selectedComplexity === level.id
                    ? 'bg-warning text-warning-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;