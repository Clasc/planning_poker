import { useRouter } from "next/router";
import { JoinGame } from "../../components/JoinGame";

import { useGame } from "../../lib/useGame/useGame";


const Player = () => {
    const router = useRouter();
    const { gameId } = router.query as { gameId: string };

    const { fetchGame, game } = useGame(gameId);
    const joinGame = (player: string) => router.push(`/game?id=${gameId}&player=${player}`);

    return (
        <div>
            <h1>Game: {game?.name ?? ""}</h1>
            <p>Your game code: {gameId}</p>
            <JoinGame gameId={gameId ?? ""} added={joinGame}></JoinGame>
        </div>
    )
}



export default Player;