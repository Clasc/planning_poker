import { useEffect, useState } from "react";
import { api } from "../api";
import { GameState } from "../GameState/GameState";
import { IGameResponse } from "../Types/api";
import { useInterval } from "./useInterval";

export function useGame(gameId: string) {
    const [game, setGame] = useState({} as GameState);


    const updateGameState = async (gameId: string) => {
        const res = await getGame(gameId);
        if (res) {
            setGame(res?.game);
        }
    }


    useEffect(() => { updateGameState(gameId) }, [gameId]);

    const setupGamePolling = () => useInterval(() => updateGameState(gameId), 1000);

    return { getGame, game, setGame, setupGamePolling };
}

export const getGame = async (gameId: string) => {
    if (!gameId) {
        return;
    }

    const res = await api.get<IGameResponse>("/api/game/" + gameId);
    return res;
}