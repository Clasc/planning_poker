import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PlayerAdd } from "../../components/PlayerAdd";
import { api } from "../../lib/api";
import { GameState } from "../../lib/GameState/GameState";


const Game = () => {
    const router = useRouter();
    const [game, setGame] = useState({} as GameState);

    const { id: gameId } = router.query as { id: string };

    const fetchGame = async (gameId: string) => {
        const res = await api.get<{ game: GameState, gameId: string }>("/api/game/" + gameId);
        console.log({ res });
        setGame(res?.game);
    }

    useEffect(() => {
        if (gameId) {
            fetchGame(gameId);
        }
    }, [gameId]);



    const players = () => game?.users?.map(user => <li key={user}>{user}</li>) ?? [];

    return (
        <div>
            <h1>Game: {game?.name ?? ""}</h1>
            <PlayerAdd gameId={gameId ?? ""}></PlayerAdd>
            <p>Your game code: {gameId}</p>
            <div>
                Players:
                <ul>
                    {players()}
                </ul>
            </div>
        </div>
    )
}



export default Game;