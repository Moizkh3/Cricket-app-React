import React, { useState, useEffect } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlayerInputSectionProps {
  onGenerateTeams: (players: string[]) => void;
  onShuffleBattingOrder: () => void;
  onReset: () => void;
  teamsGenerated: boolean;
}

const PlayerInputSection: React.FC<PlayerInputSectionProps> = ({
  onGenerateTeams,
  onShuffleBattingOrder,
  onReset,
  teamsGenerated
}) => {
  const [playerNames, setPlayerNames] = useState('');
  const [playersArray, setPlayersArray] = useState<string[]>([]);
  const [hasPlayers, setHasPlayers] = useState(false);

  useEffect(() => {
    // Parse and validate player names when input changes
    const players = playerNames
      .split('\n')
      .map(name => name.trim())
      .filter(name => name !== '');
    
    setPlayersArray(players);
    setHasPlayers(players.length >= 2);
  }, [playerNames]);

  const handleGenerateTeams = () => {
    onGenerateTeams(playersArray);
  };

  const handleShuffleBattingOrder = () => {
    // If teams aren't generated yet but we have players, pass the players to shuffleBattingOrder
    if (!teamsGenerated && hasPlayers) {
      // This will create a batting order only view
      onShuffleBattingOrder(playersArray);
    } else {
      // This will shuffle existing teams
      onShuffleBattingOrder();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 transform transition-transform duration-300 hover:scale-[1.01] border-l-4 border-[#0E5626]">
      <Tabs defaultValue="input" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="input" className="text-sm">Enter Players</TabsTrigger>
          <TabsTrigger value="options" className="text-sm">Options</TabsTrigger>
        </TabsList>
        
        <TabsContent value="input" className="space-y-4">
          <h2 className="text-xl font-montserrat font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#D32F2F]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg> 
            Enter Player Names
          </h2>
          
          <div className="mb-4">
            <Textarea 
              id="nameInput" 
              className="w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0E5626] focus:border-[#0E5626] custom-scrollbar"
              placeholder="Enter player names (one per line)"
              value={playerNames}
              onChange={(e) => setPlayerNames(e.target.value)}
            />
            <div className="text-xs text-gray-500 mt-1">
              {playersArray.length} player{playersArray.length !== 1 ? 's' : ''} entered
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="options" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#f9f9f9] p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-semibold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0E5626]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
                Generate Teams
              </h3>
              <p className="text-sm text-gray-600 mb-2">Split players into two balanced teams with randomized order</p>
            </div>
            
            <div className="bg-[#f9f9f9] p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-semibold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#D32F2F]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Shuffle Batting Order
              </h3>
              <p className="text-sm text-gray-600 mb-2">Randomize the batting order without changing teams</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex flex-wrap gap-3 justify-center mt-6 pt-4 border-t border-gray-200">
        <Button 
          id="generateTeamsBtn" 
          className="px-6 py-3 bg-[#0E5626] text-white rounded-md font-semibold hover:bg-[#083D1B] transition-colors flex items-center shadow-md"
          onClick={handleGenerateTeams}
          disabled={!hasPlayers}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg> Generate Teams
        </Button>
        
        <Button 
          id="shuffleBattingOrderBtn" 
          className="px-6 py-3 bg-[#D32F2F] text-white rounded-md font-semibold hover:bg-[#B01C1C] transition-colors flex items-center shadow-md"
          onClick={handleShuffleBattingOrder}
          disabled={!hasPlayers}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg> Shuffle Batting Order
        </Button>
        
        <Button 
          id="resetBtn" 
          className="px-6 py-3 bg-[#1976D2] text-white rounded-md font-semibold hover:bg-[#0D47A1] transition-colors flex items-center shadow-md"
          onClick={() => {
            setPlayerNames('');
            onReset();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg> Reset
        </Button>
      </div>
    </div>
  );
};

export default PlayerInputSection;
