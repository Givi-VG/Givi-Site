import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DemoCard = ({ demo, onStartDemo, isActive }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-accent';
      case 'Intermediate': return 'text-warning';
      case 'Advanced': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getDifficultyIcon = (level) => {
    switch (level) {
      case 'Beginner': return 'Circle';
      case 'Intermediate': return 'CircleDot';
      case 'Advanced': return 'Target';
      default: return 'Circle';
    }
  };

  return (
    <div className={`surface-elevated p-6 hover-lift transition-smooth ${
      isActive ? 'border-primary bg-primary/5' : ''
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            isActive ? 'bg-primary text-white' : 'bg-muted'
          }`}>
            <Icon name={demo.icon} size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{demo.title}</h3>
            <p className="text-sm text-muted-foreground">{demo.category}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icon 
            name={getDifficultyIcon(demo.difficulty)} 
            size={16} 
            className={getDifficultyColor(demo.difficulty)} 
          />
          <span className={`text-xs font-medium ${getDifficultyColor(demo.difficulty)}`}>
            {demo.difficulty}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 line-clamp-2">{demo.description}</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{demo.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>{demo.completions}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={12}
              className={i < demo.rating ? 'text-warning fill-current' : 'text-muted'}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({demo.rating})</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {demo.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-muted/50 text-xs rounded-md text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button
        variant="default"
        fullWidth
        iconName="Play"
        iconPosition="left"
        onClick={() => onStartDemo(demo)}
        className="btn-primary"
      >
        Start Demo
      </Button>
    </div>
  );
};

export default DemoCard;