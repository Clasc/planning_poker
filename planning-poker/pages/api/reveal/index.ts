import { makePost } from "../../../lib/server/makeHandler";
import { makeGameStateRepository } from "../../../lib/server/repositories/GameStateRepository";
import { makeGameRevelationService } from "../../../lib/server/services/GameRevelationService";
import { IRevealResponse } from "../../../lib/Types/api";

const service = makeGameRevelationService(makeGameStateRepository());

const handler = makePost<IRevealResponse>()(async (req, res) => {
    const { gameId } = req.body as { gameId: string, player: string, vote: number };
    if (!gameId) {
        res.status(400).json({
            error: "Missing gameId"
        });
        return;
    }
    const revealed = await service.revealGame(gameId);
    res.status(200).json({ revealed });
});

export default handler;