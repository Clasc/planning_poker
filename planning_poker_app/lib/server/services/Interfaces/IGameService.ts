import { GameState } from "../../../Types/GameState";

export interface IGameService {
    addGame: (id: string, game: GameState) => Promise<GameState | undefined>;
    loadGame: (id: string) => Promise<GameState>;
    addPlayer: (id: string, player: string) => Promise<string[]>;
}
