import React, { useState } from 'react';
import PlayerInputSection from '@/components/PlayerInputSection';
import TeamDisplaySection from '@/components/TeamDisplaySection';
import { fisherYatesShuffle } from '@/lib/utils/shuffle';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Home: React.FC = () => {
  const [team1, setTeam1] = useState<string[]>([]);
  const [team2, setTeam2] = useState<string[]>([]);
  const [teamsGenerated, setTeamsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const showError = (message: string) => {
    setErrorMessage(message);
    // Auto hide error after 5 seconds
    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  };
  
  const generateTeams = (players: string[]) => {
    // Validation
    if (players.length < 2) {
      showError('Please enter at least 2 player names.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate loading with timeout (just like in the reference)
    setTimeout(() => {
      // Shuffle players
      const shuffledPlayers = fisherYatesShuffle(players);
      
      // Split into two teams
      const midPoint = Math.ceil(shuffledPlayers.length / 2);
      setTeam1(shuffledPlayers.slice(0, midPoint));
      setTeam2(shuffledPlayers.slice(midPoint));
      
      // Show team display section
      setTeamsGenerated(true);
      setIsLoading(false);
    }, 1000);
  };
  
  const shuffleBattingOrder = () => {
    if (!teamsGenerated) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setTeam1(prevTeam => fisherYatesShuffle(prevTeam));
      setTeam2(prevTeam => fisherYatesShuffle(prevTeam));
      setIsLoading(false);
    }, 1000);
  };
  
  const resetTeams = () => {
    setTeam1([]);
    setTeam2([]);
    setTeamsGenerated(false);
  };

  return (
    <div className="bg-[#4CAF50] bg-opacity-10 min-h-screen font-roboto text-gray-800">
      {/* Cricket pitch background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4CAF50]/20 to-[#4CAF50]/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 relative">
        {/* App Header with cricket theme */}
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-[#3B8F3E] inline-flex items-center justify-center">
            <i className="fas fa-baseball-ball fa-spin text-[#D32F2F] mr-3"></i>
            Cricket Team Shuffler
            <i className="fas fa-baseball-ball fa-spin text-[#D32F2F] ml-3"></i>
          </h1>
          <p className="text-gray-600 mt-2">Split players into teams and generate batting orders</p>
        </header>

        <PlayerInputSection 
          onGenerateTeams={generateTeams}
          onShuffleBattingOrder={shuffleBattingOrder}
          onReset={resetTeams}
          teamsGenerated={teamsGenerated}
        />
        
        {/* Error Display */}
        {errorMessage && (
          <Alert variant="destructive" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        
        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center items-center mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#4CAF50]"></div>
          </div>
        )}

        <TeamDisplaySection 
          team1Players={team1} 
          team2Players={team2} 
          visible={teamsGenerated}
        />
        
        {/* Cricket decorative elements */}
        <div className="fixed bottom-0 right-0 opacity-10 pointer-events-none">
          <svg width="500" height="300" viewBox="0 0 500 300">
            <path 
              d="M460.9,243.3c-23.6,28.7-59.1,46.9-98.9,46.9c-70.8,0-128.2-57.4-128.2-128.2c0-54.9,34.5-101.7,83-120.1 c-6.9-0.9-13.9-1.4-21-1.4c-88.6,0-160.4,71.8-160.4,160.4c0,88.6,71.8,160.4,160.4,160.4c76.2,0,140.1-53.1,156.5-124.1" 
              fill="#3B8F3E" 
              stroke="#4CAF50" 
              strokeWidth="4"
            />
            <circle cx="400" cy="120" r="30" fill="#D32F2F" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
