import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GameTrack() {
  return (
    <div className="h-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
      <div className="relative flex-1 bg-gray-800 rounded-lg overflow-hidden mb-4">
        {/* Track preview */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623576288906-6f0c87c64c7f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"
          style={{ filter: 'saturate(0.8) brightness(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        {/* Track overlay info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Track #23</h2>
                <p className="text-gray-300">Tight corners and short straights</p>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Info className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Button 
        size="lg" 
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg"
      >
        Start Race
      </Button>
    </div>
  );
}