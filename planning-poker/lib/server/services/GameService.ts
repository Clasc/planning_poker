import { GameState } from "../../Types/GameState";
import { IGameStateRepository } from "../repositories/GameStateRepository";
import { NotFoundError } from "./Errors/ServerErrors";
import { IGameService } from "./Interfaces/IGameService";

export function makeGameService(repo: IGameStateRepository): IGameService {
    const storeGame = async (id: string, game: GameState) => {
        await repo.set(id, game);
        const result = await repo.get(id);
        return result;
    }
    const loadGame = async (id: string) => {
        const game = await repo.get(id);
        if (!game) {
            throw new NotFoundError("No Game found");
        }
        return game;
    }

    const addPlayer = async (id: string, player: string) => {
        const gameState = await repo.get(id);

        if (!gameState) {
            throw new NotFoundError("No Game found");
        }
        gameState.players.push(player);
        return gameState.players;
    }

    return { storeGame, loadGame, addPlayer };
}