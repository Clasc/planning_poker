import { GameState } from "../../Types/GameState";

export const makeGameState = (name: string = "", users: string[] = []): GameState => {
    return {
        name: name,
        players: users,
        votes: {},
        isRevealed: false,
        revealed: 0
    }
};

export const Session = new Map<string, GameState>();