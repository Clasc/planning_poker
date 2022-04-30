import { useEffect, useState } from "react";
import { api } from "../api";
import { GameState } from "../GameState/GameState";
import { IGameResponse } from "../Types/api";
import { useInterval } from "./useInterval";

export function useGame(gameId: string) {
    const [game, setGame] = useState({} as GameState);

    const fetchGame = async (gameId: string) => {
        if (!gameId) {
            return;
        }

        const res = await api.get<IGameResponse>("/api/game/" + gameId);
        if (res) {
            setGame(res?.game);
        }
    }

    useEffect(() => { fetchGame(gameId) }, [gameId]);

    useInterval(() => fetchGame(gameId), 1000);

    return { fetchGame, game, setGame };
}