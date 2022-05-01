import { NextApiHandler } from "next";
import { Session } from "../../../lib/server/GameState/GameState";
import { makeHandler, makePost } from "../../../lib/server/makeHandler";
import { IRevealResponse } from "../../../lib/Types/api";

const handler = makePost<IRevealResponse>()((req, res) => {
    const { gameId } = req.body as { gameId: string, player: string, vote: number };
    if (!gameId) {
        res.status(400).json({
            error: "Missing gameId"
        });
        return;
    }

    const game = Session.get(gameId);
    if (!game) {
        res.status(404).json({ error: "No Game found" });
        return;
    }


    const allVotes = Object.values(game.votes);

    if (allVotes.length !== game.players.length) {
        res.status(400).json({
            error: "Not all players have voted"
        });
        return;
    }

    game.revealed = allVotes.reduce((acc, vote) => acc + vote, 0) / allVotes.length;
    game.isRevealed = true;
    Session.set(gameId, game);
    res.status(200).json({
        revealed: game.revealed
    });
});

export default handler;