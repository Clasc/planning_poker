import { IGameStateRepository } from "../repositories/GameStateRepository";
import { BadRequestError, NotFoundError } from "./Errors/ServerErrors";
import { IGameRevelationService } from "./Interfaces/IGameRevelationService";

export function makeGameRevelationService(repo: IGameStateRepository): IGameRevelationService {
    const revealGame = async (gameId: string) => {
        const game = await repo.get(gameId);
        if (!game) {
            throw new NotFoundError("No Game found");
        }

        const allVotes = await repo.getVotes(gameId);

        if (allVotes.length !== game.players.length) {
            throw new BadRequestError("Not all players have voted");
        }

        game.revealed = allVotes.reduce((accVal: number, vote) => accVal + (vote as number), 0) / allVotes.length;
        game.isRevealed = true;
        await repo.set(gameId, game);
        return game.revealed;
    }

    return { revealGame };
}