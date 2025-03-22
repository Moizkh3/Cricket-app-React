import React from 'react';
import TeamCard from './TeamCard';

interface TeamDisplaySectionProps {
  team1Players: string[];
  team2Players: string[];
  visible: boolean;
}

const TeamDisplaySection: React.FC<TeamDisplaySectionProps> = ({ 
  team1Players, 
  team2Players, 
  visible 
}) => {
  if (!visible) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TeamCard 
        teamColor="blue" 
        teamName="Team Blue" 
        players={team1Players} 
      />
      
      <TeamCard 
        teamColor="orange" 
        teamName="Team Orange" 
        players={team2Players} 
      />
    </div>
  );
};

export default TeamDisplaySection;
