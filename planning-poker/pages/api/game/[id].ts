import { Session } from "../../../lib/server/GameState/GameState";
import { makeGet, makeHandler } from "../../../lib/server/makeHandler";
import { IGameResponse } from "../../../lib/Types/api";

const handler = makeGet<IGameResponse>()((req, res) => {
    if (!req.query.id) {
        res.status(400).json({ error: "Missing gameId" });
        return;
    }

    const gameId = req.query.id as string;
    const game = Session.get(gameId);

    if (!game) {
        res.status(404).json({ error: "No Game found" });
        return;
    }

    res.status(200).json({
        gameId: gameId,
        game: game
    });
});


export default handler;