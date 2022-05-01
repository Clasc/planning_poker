import { Session } from "../../../lib/server/GameState/GameState";
import { makeGet, makeHandler } from "../../../lib/server/makeHandler";
import { makeGameStateRepository } from "../../../lib/server/repositories/GameStateRepository";
import { makeGameService } from "../../../lib/server/services/GameService";
import { IGameResponse } from "../../../lib/Types/api";

const service = makeGameService(makeGameStateRepository());

const handler = makeGet<IGameResponse>()(async (req, res) => {
    const gameId = req.query.id as string;
    if (!gameId) {
        res.status(400).json({ error: "Missing gameId" });
        return;
    }

    const game = await service.loadGame(gameId);
    res.status(200).json({ gameId, game });
});


export default handler;