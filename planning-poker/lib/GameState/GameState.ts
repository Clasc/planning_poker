export type GameState = {
    name: string;
    players: string[];
    votes: Record<string, number>;
    isRevealed: boolean;
    revealed: number;
}

export const MakeGameState = (name: string = "", users: string[] = []): GameState => {
    return {
        name: name,
        players: users,
        votes: {},
        isRevealed: false,
        revealed: 0
    }
};

export const Session = new Map<string, GameState>();