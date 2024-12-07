import { GameHeader } from '@/components/game/GameHeader';
import { UnityWebGL } from '@/components/game/UnityWebGL';
import { GameFooter } from '@/components/game/GameFooter';

export default function GamePage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-gray-900 to-black">
      <GameHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <UnityWebGL />
      </main>
      <GameFooter />
    </div>
  );
}