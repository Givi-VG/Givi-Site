import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AuthorSpotlight = () => {
  const featuredAuthor = {
    id: 1,
    name: "Giri Angappan",
    role: "Applied ML Engineer and Research Scientist",
    company: "Givi AI",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e8c8b4?w=400&h=400&fit=crop&crop=face",
    bio: `Leading AI researcher with 3+ years in machine learning and enterprise AI implementation.
    Specializes in making complex AI concepts accessible to business leaders and technical teams.`,
    expertise: ["Machine Learning", "AI Strategy", "Enterprise AI", "Data Science"],
    stats: {
      articles: 47,
      followers: 12500,
      citations: 2800
    },
    recentArticles: [
      {
        id: 1,
        title: "The Future of AI in Enterprise Decision Making",
        publishedAt: "2025-01-10",
        readTime: 8
      },
      {
        id: 2,
        title: "Building Ethical AI Systems: A Practical Guide",
        publishedAt: "2025-01-05",
        readTime: 12
      },
      {
        id: 3,
        title: "ROI Measurement for AI Implementations",
        publishedAt: "2024-12-28",
        readTime: 6
      }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen_ai",
      github: "https://github.com/sarahchen"
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Icon name="Star" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Author Spotlight</h3>
          <p className="text-sm text-muted-foreground">Featured AI expert this month</p>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <Image
            src={featuredAuthor.avatar}
            alt={featuredAuthor.name}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <Icon name="CheckCircle" size={16} color="white" />
          </div>
        </div>
        
        <h4 className="text-xl font-bold text-foreground mb-1">
          {featuredAuthor.name}
        </h4>
        <p className="text-primary font-medium mb-1">{featuredAuthor.role}</p>
        <p className="text-sm text-muted-foreground mb-4">{featuredAuthor.company}</p>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {featuredAuthor.bio}
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {featuredAuthor.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">
              {featuredAuthor.stats.articles}
            </div>
            <div className="text-xs text-muted-foreground">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">
              {(featuredAuthor.stats.followers / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">
              {(featuredAuthor.stats.citations / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-muted-foreground">Citations</div>
          </div>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="mb-6">
        <h5 className="font-semibold text-foreground mb-3">Recent Articles</h5>
        <div className="space-y-3">
          {featuredAuthor.recentArticles.map((article) => (
            <div
              key={article.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer group"
            >
              <div className="flex-1">
                <h6 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm line-clamp-2">
                  {article.title}
                </h6>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span>{formatDate(article.publishedAt)}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-smooth">
          <Icon name="Linkedin" size={16} className="text-foreground" />
        </button>
        <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-smooth">
          <Icon name="Twitter" size={16} className="text-foreground" />
        </button>
        <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-smooth">
          <Icon name="Github" size={16} className="text-foreground" />
        </button>
      </div>

      <Button
        variant="outline"
        size="sm"
        fullWidth
        iconName="User"
        iconPosition="left"
      >
        View Author Profile
      </Button>
    </div>
  );
};

export default AuthorSpotlight;