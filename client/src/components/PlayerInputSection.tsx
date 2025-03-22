import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

  const handleGenerateTeams = () => {
    const players = playerNames
      .split('\n')
      .map(name => name.trim())
      .filter(name => name !== '');
    
    onGenerateTeams(players);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 transform transition-transform duration-300 hover:scale-[1.01] border-l-4 border-[#0E5626]">
      <h2 className="text-xl font-montserrat font-semibold mb-4 flex items-center">
        <i className="fas fa-users text-[#D32F2F] mr-2"></i> Enter Player Names
      </h2>
      
      <div className="mb-4">
        <Textarea 
          id="nameInput" 
          className="w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0E5626] focus:border-[#0E5626] custom-scrollbar"
          placeholder="Enter player names (one per line)"
          value={playerNames}
          onChange={(e) => setPlayerNames(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center">
        <Button 
          id="generateTeamsBtn" 
          className="px-6 py-3 bg-[#0E5626] text-white rounded-md font-semibold hover:bg-[#083D1B] transition-colors flex items-center shadow-md"
          onClick={handleGenerateTeams}
        >
          <i className="fas fa-users-cog mr-2"></i> Generate Teams
        </Button>
        
        <Button 
          id="shuffleBattingOrderBtn" 
          className="px-6 py-3 bg-[#D32F2F] text-white rounded-md font-semibold hover:bg-[#B01C1C] transition-colors flex items-center disabled:opacity-50 shadow-md"
          onClick={onShuffleBattingOrder}
          disabled={!teamsGenerated}
        >
          <i className="fas fa-random mr-2"></i> Shuffle Batting Order
        </Button>
        
        <Button 
          id="resetBtn" 
          className="px-6 py-3 bg-[#1976D2] text-white rounded-md font-semibold hover:bg-[#0D47A1] transition-colors flex items-center shadow-md"
          onClick={() => {
            setPlayerNames('');
            onReset();
          }}
        >
          <i className="fas fa-redo mr-2"></i> Reset
        </Button>
      </div>
    </div>
  );
};

export default PlayerInputSection;
