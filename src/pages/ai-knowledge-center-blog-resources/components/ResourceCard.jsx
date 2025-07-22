import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCard = ({ resource }) => {
  const getResourceIcon = (type) => {
    switch (type) {
      case 'whitepaper':
        return 'FileText';
      case 'calculator':
        return 'Calculator';
      case 'checklist':
        return 'CheckSquare';
      case 'video':
        return 'PlayCircle';
      case 'template':
        return 'Layout';
      default:
        return 'Download';
    }
  };

  const getResourceColor = (type) => {
    switch (type) {
      case 'whitepaper':
        return 'text-blue-400';
      case 'calculator':
        return 'text-green-400';
      case 'checklist':
        return 'text-purple-400';
      case 'video':
        return 'text-red-400';
      case 'template':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover-lift transition-smooth">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-muted/50 ${getResourceColor(resource.type)}`}>
          <Icon name={getResourceIcon(resource.type)} size={24} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {resource.title}
            </h3>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full whitespace-nowrap">
              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {resource.description}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            {resource.fileSize && (
              <span className="flex items-center gap-1">
                <Icon name="HardDrive" size={12} />
                {formatFileSize(resource.fileSize)}
              </span>
            )}
            {resource.duration && (
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={12} />
                {resource.duration}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Icon name="Download" size={12} />
              {resource.downloads.toLocaleString()} downloads
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {resource.category}
              </span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                {resource.difficulty}
              </span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              iconName={resource.type === 'video' ? 'Play' : 'Download'}
              iconPosition="left"
              className="hover-glow"
            >
              {resource.type === 'video' ? 'Watch' : 'Download'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;