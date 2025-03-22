import React, { useState } from 'react';
import PlayerInputSection from '@/components/PlayerInputSection';
import TeamDisplaySection from '@/components/TeamDisplaySection';
import { fisherYatesShuffle } from '@/lib/utils/shuffle';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Home = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [teamsGenerated, setTeamsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const showError = (message) => {
    setErrorMessage(message);
    // Auto hide error after 5 seconds
    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  };
  
  const generateTeams = (players) => {
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
  
  const shuffleBattingOrder = (inputPlayers) => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (teamsGenerated) {
        // If teams are already generated, shuffle both teams independently
        setTeam1(prevTeam => fisherYatesShuffle(prevTeam));
        setTeam2(prevTeam => fisherYatesShuffle(prevTeam));
      } else {
        // For batting order only mode
        // Show a single consolidated list of all players in a shuffled order
        const players = inputPlayers || [];
        if (players.length < 2) {
          showError('Please enter at least 2 player names.');
          setIsLoading(false);
          return;
        }
        setTeam1(fisherYatesShuffle(players));
        setTeam2([]); // Empty team2 indicates batting order only mode
        setTeamsGenerated(true);
      }
      setIsLoading(false);
    }, 1000);
  };
  
  const resetTeams = () => {
    setTeam1([]);
    setTeam2([]);
    setTeamsGenerated(false);
  };

  return (
    <div className="bg-[#0E5626] bg-opacity-10 min-h-screen font-roboto text-gray-800">
      {/* Cricket pitch background with subtle pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJncmFzcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMEU1NjI2IiBvcGFjaXR5PSIwLjA1Ii8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMEU1NjI2IiBvcGFjaXR5PSIwLjAyIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3Jhc3MpIi8+PC9zdmc+')]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E5626]/10 to-[#0E5626]/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 relative">
        {/* App Header with cricket theme */}
        <header className="text-center mb-6 relative">
          {/* Cricket wickets on left */}
          <div className="absolute left-0 md:left-20 top-1/2 transform -translate-y-1/2 opacity-20 hidden md:block">
            <svg width="50" height="80" viewBox="0 0 50 80">
              <rect x="10" y="5" width="5" height="70" fill="#964B00" />
              <rect x="22" y="5" width="5" height="70" fill="#964B00" />
              <rect x="34" y="5" width="5" height="70" fill="#964B00" />
              <rect x="5" y="10" width="40" height="5" fill="#964B00" />
              <rect x="5" y="30" width="40" height="5" fill="#964B00" />
            </svg>
          </div>
          
          {/* Cricket wickets on right */}
          <div className="absolute right-0 md:right-20 top-1/2 transform -translate-y-1/2 opacity-20 hidden md:block">
            <svg width="50" height="80" viewBox="0 0 50 80">
              <rect x="10" y="5" width="5" height="70" fill="#964B00" />
              <rect x="22" y="5" width="5" height="70" fill="#964B00" />
              <rect x="34" y="5" width="5" height="70" fill="#964B00" />
              <rect x="5" y="10" width="40" height="5" fill="#964B00" />
              <rect x="5" y="30" width="40" height="5" fill="#964B00" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-[#0E5626] inline-flex items-center justify-center">
            <i className="fas fa-baseball-ball fa-spin text-[#D32F2F] mr-3"></i>
            Cricket Team Shuffler
            <i className="fas fa-baseball-ball fa-spin text-[#D32F2F] ml-3"></i>
          </h1>
          <p className="text-gray-700 mt-2">Split players into teams and generate batting orders</p>
          <div className="w-24 h-1 bg-[#0E5626] mx-auto mt-3 rounded-full"></div>
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
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#0E5626]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <i className="fas fa-baseball-ball text-[#D32F2F] text-2xl"></i>
              </div>
            </div>
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
              fill="#0E5626" 
              stroke="#083D1B" 
              strokeWidth="4"
            />
            <circle cx="400" cy="120" r="30" fill="#D32F2F" />
          </svg>
        </div>
        
        {/* Cricket bat and ball */}
        <div className="fixed bottom-0 left-0 opacity-15 pointer-events-none hidden md:block">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Cricket bat */}
            <path d="M120,180 L150,120 L160,90 L155,70 C155,70 152,58 140,55 C128,52 120,60 120,60 L100,100 L120,180" fill="#964B00" />
            <path d="M120,60 L100,100 L120,180 L110,180 L90,100 L110,60 C110,60 115,52 127,55 C139,58 142,70 142,70 L120,60" fill="#8B4513" />
            
            {/* Cricket ball */}
            <circle cx="70" cy="110" r="20" fill="#D32F2F" />
            {/* Ball stitching */}
            <path d="M70,95 C75,95 80,100 80,110 C80,120 75,125 70,125 C65,125 60,120 60,110 C60,100 65,95 70,95" 
                 fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home; 