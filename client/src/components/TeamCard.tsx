import React from 'react';

interface TeamCardProps {
  teamColor: 'blue' | 'orange';
  teamName: string;
  players: string[];
}

const TeamCard: React.FC<TeamCardProps> = ({ teamColor, teamName, players }) => {
  const bgColor = teamColor === 'blue' ? 'bg-[#0D47A1]' : 'bg-[#E65100]';
  const hoverBgColor = teamColor === 'blue' ? 'hover:bg-blue-50' : 'hover:bg-orange-50';
  const borderColor = teamColor === 'blue' ? 'border-[#0D47A1]' : 'border-[#E65100]';
  const textColor = teamColor === 'blue' ? 'text-[#0D47A1]' : 'text-[#E65100]';
  
  return (
    <div className="team-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl border-2 border-gray-200">
      {/* Team header */}
      <div className={`${bgColor} text-white p-4 relative`}>
        <h2 className="text-xl md:text-2xl font-montserrat font-bold uppercase tracking-wider text-center">
          <i className="fas fa-trophy mr-2"></i> {teamName}
        </h2>
        {/* Cricket ball decoration */}
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#D32F2F] border-2 border-white animate-pulse"></div>
      </div>
      
      {/* Team content */}
      <div className="p-4">
        <h3 className={`text-lg font-oswald border-b-2 ${borderColor} pb-2 mb-4 ${textColor} flex items-center`}>
          <i className="fas fa-baseball-ball mr-2"></i> Batting Order
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
