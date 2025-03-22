import React from 'react';
import TeamCard from './TeamCard';

const TeamDisplaySection = ({ 
  team1Players, 
  team2Players, 
  visible 
}) => {
  if (!visible) return null;

  // If team2Players is empty and team1Players is not, this means we're in "batting order only" mode
  const isBattingOrderOnly = team1Players.length > 0 && team2Players.length === 0;

  if (isBattingOrderOnly) {
    return (
      <div className="grid grid-cols-1 gap-6">
        <TeamCard 
          teamColor="blue" 
          teamName="Batting Order" 
          players={team1Players}
          isBattingOrderOnly={true}
        />
      </div>
    );
  }

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