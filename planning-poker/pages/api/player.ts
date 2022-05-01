import { makePost } from "../../lib/server/makeHandler";
import { makeGameStateRepository } from "../../lib/server/repositories/GameStateRepository";
import { makeGameService } from "../../lib/server/services/GameService";
import { IPlayerResponse } from "../../lib/Types/api";

const service = makeGameService(makeGameStateRepository());

const handler = makePost<IPlayerResponse>()(async (req, res) => {
    const { name, gameId } = req.body as { name: string, gameId: string };
    if (!name || !gameId) {
        res.status(400).json({
            error: "Missing name or gameId"
        });
        return;
    }

    const players = await service.addPlayer(gameId, name);
    res.status(200).json({ message: "Hello player" + req.body.name + " welcome to game " + req.body.gameId, players });
});

export default handler;