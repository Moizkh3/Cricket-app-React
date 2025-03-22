import React from 'react';

interface TeamCardProps {
  teamColor: 'blue' | 'orange';
  teamName: string;
  players: string[];
}

const TeamCard: React.FC<TeamCardProps> = ({ teamColor, teamName, players }) => {
  const bgColor = teamColor === 'blue' ? 'bg-[#1976D2]' : 'bg-[#FF9800]';
  const hoverBgColor = teamColor === 'blue' ? 'hover:bg-blue-50' : 'hover:bg-orange-50';
  const borderColor = teamColor === 'blue' ? 'border-[#1976D2]' : 'border-[#FF9800]';
  const textColor = teamColor === 'blue' ? 'text-[#1976D2]' : 'text-[#FF9800]';
  
  return (
    <div className="team-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      {/* Team header */}
      <div className={`${bgColor} text-white p-4`}>
        <h2 className="text-xl md:text-2xl font-montserrat font-bold uppercase tracking-wider text-center">
          <i className="fas fa-shield-alt mr-2"></i> {teamName}
        </h2>
      </div>
      
      {/* Team content */}
      <div className="p-4">
        <h3 className={`text-lg font-oswald border-b-2 ${borderColor} pb-2 mb-4 ${textColor}`}>
          <i className="fas fa-sort-numeric-down mr-2"></i> Batting Order
        </h3>
        
        <ul className="space-y-2 max-h-80 overflow-auto custom-scrollbar">
          {players.map((player, index) => (
            <li 
              key={`${player}-${index}`} 
              className={`flex items-center p-3 bg-gray-50 ${hoverBgColor} rounded-md transition-colors list-item-enter`} 
              style={{ animation: 'fadeInUp 0.4s forwards', animationDelay: `${index * 100}ms` }}
            >
              <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${bgColor} text-white font-oswald font-bold mr-3`}>
                {index + 1}
              </span>
              <span>{player}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
