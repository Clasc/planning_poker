import { makePost } from "../../lib/server/makeHandler";
import { gameService } from "../../lib/server/setup";
import { IPlayerResponse } from "../../lib/Types/api";

const handler = makePost<IPlayerResponse>()(async (req, res) => {
    const { name, gameId } = req.body as { name: string, gameId: string };
    if (!name || !gameId) {
        res.status(400).json({
            error: "Missing name or gameId"
        });
        return;
    }

    const players = await gameService.addPlayer(gameId, name);
    res.status(200).json({ message: "Hello player" + name + " welcome to game " + gameId, players });
});

export default handler;