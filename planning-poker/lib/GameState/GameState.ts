export type GameState = {
    name: string;
    users: string[];
}

export const Session = new Map<string, GameState>();