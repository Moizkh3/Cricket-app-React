import React from 'react';

const TeamCard = ({ 
  teamColor, 
  teamName, 
  players, 
  isBattingOrderOnly = false 
}) => {
  // For batting order only mode, use a special color scheme
  const bgColor = isBattingOrderOnly 
    ? 'bg-gradient-to-r from-[#0E5626] to-[#0D47A1]' 
    : (teamColor === 'blue' ? 'bg-[#0D47A1]' : 'bg-[#E65100]');
  
  const hoverBgColor = isBattingOrderOnly 
    ? 'hover:bg-green-50' 
    : (teamColor === 'blue' ? 'hover:bg-blue-50' : 'hover:bg-orange-50');
    
  const borderColor = isBattingOrderOnly 
    ? 'border-[#0E5626]' 
    : (teamColor === 'blue' ? 'border-[#0D47A1]' : 'border-[#E65100]');
    
  const textColor = isBattingOrderOnly 
    ? 'text-[#0E5626]' 
    : (teamColor === 'blue' ? 'text-[#0D47A1]' : 'text-[#E65100]');

  const cardWidth = isBattingOrderOnly ? "max-w-2xl mx-auto" : "";
  
  return (
    <div className={`team-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl border-2 border-gray-200 ${cardWidth}`}>
      {/* Team header */}
      <div className={`${bgColor} text-white p-4 relative`}>
        <h2 className="text-xl md:text-2xl font-montserrat font-bold uppercase tracking-wider text-center flex items-center justify-center">
          {isBattingOrderOnly ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
            </svg>
          )}
          {teamName}
        </h2>
        {/* Cricket ball decoration */}
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#D32F2F] border-2 border-white animate-pulse"></div>
      </div>
      
      {/* Team content */}
      <div className="p-4">
        <h3 className={`text-lg font-semibold border-b-2 ${borderColor} pb-2 mb-4 ${textColor} flex items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
          {isBattingOrderOnly ? 'Batting Sequence' : 'Batting Order'}
        </h3>
        
        <ul className={`space-y-2 ${isBattingOrderOnly ? 'max-h-[500px]' : 'max-h-80'} overflow-auto custom-scrollbar`}>
          {players.map((player, index) => (
            <li 
              key={`${player}-${index}`} 
              className={`flex items-center p-3 bg-gray-50 ${hoverBgColor} rounded-md transition-colors list-item-enter border border-gray-100`} 
              style={{ animation: 'fadeInUp 0.4s forwards', animationDelay: `${index * 100}ms` }}
            >
              <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${bgColor} text-white font-bold mr-3`}>
                {index + 1}
              </span>
              <span className="text-gray-800 font-medium">{player}</span>
              
              {/* Show batting position icons for better visualization */}
              {index === 0 && (
                <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">Opener</span>
              )}
              {index === players.length - 1 && (
                <span className="ml-auto bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">Last</span>
              )}
            </li>
          ))}
        </ul>
        
        {/* Empty state message */}
        {players.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>No players in this team yet</p>
          </div>
        )}
      </div>
      
      {/* Footer with statistics */}
      {players.length > 0 && (
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Players: <span className="font-medium">{players.length}</span></span>
            {!isBattingOrderOnly && <span className="text-gray-600">Team: <span className={textColor + " font-medium"}>{teamName}</span></span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard; 