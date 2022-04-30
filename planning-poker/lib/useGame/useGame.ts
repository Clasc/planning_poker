import { useEffect, useState } from "react";
import { api } from "../api";
import { GameState } from "../GameState/GameState";
import { IGameResponse } from "../Types/api";

export function useGame(gameId: string) {
    const [game, setGame] = useState({} as GameState);

    const fetchGame = async (gameId: string) => {
        const res = await api.get<IGameResponse>("/api/game/" + gameId);
        if (res) {
            setGame(res?.game);
        }
    }

    useEffect(() => {
        if (gameId) {
            fetchGame(gameId);
        }
    }, [gameId]);

    return { fetchGame, game, setGame };
}