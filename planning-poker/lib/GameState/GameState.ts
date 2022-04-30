export type GameState = {
    name: string;
    players: string[];
    votes: Record<string, number>;
}

export const MakeGameState = (name: string = "", users: string[] = []): GameState => {
    return {
        name: name,
        players: users,
        votes: {}
    }
};

export const Session = new Map<string, GameState>();