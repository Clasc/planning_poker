export type GameState = {
    name: string;
    players: string[];
    votes: Record<string, number>;
    isRevealed: boolean;
    revealed: number;
}