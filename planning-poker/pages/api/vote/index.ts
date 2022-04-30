import { NextApiHandler } from "next/dist/shared/lib/utils";
import { Session } from "../../../lib/GameState/GameState";
import { makeHandler, makePost } from "../../../lib/server/makeHandler";
import { IVoteResponse } from "../../../lib/Types/api";

const voteIsValid = (vote: number | null | undefined): boolean => vote !== null && vote !== undefined && vote >= 0;

const handler = makePost<IVoteResponse>()((req, res) => {
    const { gameId, player, vote } = req.body as { gameId: string, player: string, vote: number };
    if (!gameId || !player || !voteIsValid(vote)) {
        res.status(400).json({
            error: "Missing gameId, vote or player"
        });
        return;
    }

    const game = Session.get(gameId);
    if (!game) {
        res.status(404).json({ error: "No Game found" });
        return;
    }

    game.votes[player] = vote;
    Session.set(gameId, game);

    res.status(200).json({
        voted: game.votes[player]
    });
});

export default handler;