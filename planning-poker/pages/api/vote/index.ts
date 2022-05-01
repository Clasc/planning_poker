import { makePost } from "../../../lib/server/makeHandler";
import { makeGameStateRepository } from "../../../lib/server/repositories/GameStateRepository";
import { makeVotingService } from "../../../lib/server/services/VotingService";
import { IVoteResponse } from "../../../lib/Types/api";

const voteIsValid = (vote: number | null | undefined): boolean => vote !== null && vote !== undefined && vote >= 0;

const service = makeVotingService(makeGameStateRepository());

const handler = makePost<IVoteResponse>()(async (req, res) => {
    const { gameId, player, vote } = req.body as { gameId: string, player: string, vote: number };
    if (!gameId || !player || !voteIsValid(vote)) {
        res.status(400).json({
            error: "Missing gameId, vote or player"
        });
        return;
    }

    const voted = await service.submitVote(gameId, player, vote);
    res.status(200).json({ voted });
});

export default handler;