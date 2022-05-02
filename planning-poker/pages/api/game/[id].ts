import { makeGet } from "../../../lib/server/makeHandler";
import { gameService } from "../../../lib/server/setup";

import { IGameResponse } from "../../../lib/Types/api";

const handler = makeGet<IGameResponse>()(async (req, res) => {
    const gameId = req.query.id as string;
    if (!gameId) {
        res.status(400).json({ error: "Missing gameId" });
        return;
    }

    const game = await gameService.loadGame(gameId);

    res.status(200).json({ gameId, game });
});


export default handler;