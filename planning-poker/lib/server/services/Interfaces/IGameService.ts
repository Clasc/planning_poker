import { GameState } from "../../../Types/GameState";

export interface IGameService {
    storeGame: (id: string, game: GameState) => Promise<GameState | undefined>;
    loadGame: (id: string) => Promise<GameState | undefined>;
    addPlayer: (id: string, player: string) => Promise<string[]>;
}
