import { useRouter } from "next/router";
import { PlayerAdd } from "../../components/PlayerAdd";
import PlayerList from "../../components/PlayerList";
import { useGame } from "../../lib/useGame/useGame";


const Player = () => {
    const router = useRouter();
    const { gameId } = router.query as { gameId: string };

    const { fetchGame, game } = useGame(gameId);
    const startGame = () => router.push(`/game?id=${gameId}`);

    return (
        <div>
            <h1>Game: {game?.name ?? ""}</h1>
            <PlayerAdd gameId={gameId ?? ""} added={() => fetchGame(gameId)}></PlayerAdd>
            <p>Your game code: {gameId}</p>
            <PlayerList players={game?.users ?? []}></PlayerList>

            <button onClick={startGame}>Start Game</button>
        </div>
    )
}



export default Player;