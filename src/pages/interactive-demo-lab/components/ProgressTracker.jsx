import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressTracker = ({ completedDemos, totalDemos, userProgress }) => {
  const completionRate = Math.round((completedDemos / totalDemos) * 100);
  
  const achievements = [
    { id: 'first-demo', name: 'First Steps', icon: 'Play', unlocked: completedDemos >= 1 },
    { id: 'explorer', name: 'Explorer', icon: 'Compass', unlocked: completedDemos >= 3 },
    { id: 'expert', name: 'AI Expert', icon: 'Award', unlocked: completedDemos >= 5 },
    { id: 'master', name: 'Demo Master', icon: 'Crown', unlocked: completedDemos >= 7 }
  ];

  return (
    <div className="surface-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Your Progress</h3>
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" size={20} className="text-accent" />
          <span className="text-sm font-medium text-accent">{completionRate}% Complete</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Demo Completion</span>
          <span className="text-sm text-muted-foreground">{completedDemos}/{totalDemos}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Achievements</h4>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex items-center space-x-2 p-3 rounded-lg border transition-smooth ${
                achievement.unlocked
                  ? 'bg-accent/10 border-accent/20 text-accent' :'bg-muted/20 border-muted text-muted-foreground'
              }`}
            >
              <Icon 
                name={achievement.icon} 
                size={16} 
                className={achievement.unlocked ? 'text-accent' : 'text-muted-foreground'} 
              />
              <span className="text-xs font-medium">{achievement.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground">Recent Activity</h4>
        {userProgress.recentActivity.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3 p-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-foreground">{activity.action}</p>
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
            <Icon name="CheckCircle" size={14} className="text-accent" />
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-foreground">{userProgress.totalTime}</div>
            <div className="text-xs text-muted-foreground">Time Spent</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground">{userProgress.avgScore}%</div>
            <div className="text-xs text-muted-foreground">Avg Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;