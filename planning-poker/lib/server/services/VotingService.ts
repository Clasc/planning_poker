import { IGameStateRepository } from "../repositories/GameStateRepository";
import { NotFoundError } from "./Errors/ServerErrors";
import { IVotingService } from "./Interfaces/IVotingService";

export function makeVotingService(repo: IGameStateRepository): IVotingService {
    const submitVote = async (gameId: string, player: string, vote: number) => {
        const game = await repo.get(gameId);
        if (!game) {
            throw new NotFoundError("No Game found");
        }

        game.votes[player] = vote;
        await repo.set(gameId, game);
        return game.votes[player];
    };

    return { submitVote };
};