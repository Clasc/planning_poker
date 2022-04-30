import { useRouter } from "next/router";
import { RegisterPlayer } from "../../components/RegisterPlayer";

import { useGame } from "../../lib/client/useGame";


const Player = () => {
    const router = useRouter();
    const { gameId } = router.query as { gameId: string };

    const { game } = useGame(gameId);
    const joinGame = (player: string) => router.push(`/game?id=${gameId}&player=${player}`);

    return (
        <div>
            <h1>Game: {game?.name ?? ""}</h1>
            <p>Your game code: {gameId}</p>
            <RegisterPlayer gameId={gameId ?? ""} added={joinGame} />
        </div>
    )
}



export default Player;