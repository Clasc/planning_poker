import { stat } from "fs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { GameState } from "../../lib/GameState/GameState";


const Game = () => {
    const router = useRouter();
    const [game, setGame] = useState({} as GameState);

    const { id: gameId } = router.query;
    useEffect(() => {
        api.get<{ game: GameState, gameId: string }>("/api/game/" + gameId).then(res => {
            console.log({ res });
            setGame(res?.game);
        });
    }, [gameId]);

    const players = () => game?.users?.map(user => <li>user</li>) ?? [];

    return (
        <div>
            <h1>Game: {game?.name ?? ""}</h1>
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