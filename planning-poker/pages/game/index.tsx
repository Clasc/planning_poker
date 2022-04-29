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
        api.get<GameState>("/api/game/" + gameId).then(res => {
            setGame(res);
        });
    });
    console.log(gameId);

    const players = (state: GameState) => state?.users?.map(user => <li>user</li>) ?? [];

    return (
        <div>
            <h1>Game: {gameId}</h1>
            <p>Your game code: {gameId}</p>
            <div>
                Players:
                <ul>
                    {players(game)}
                </ul>
            </div>
        </div>
    )
}



export default Game;