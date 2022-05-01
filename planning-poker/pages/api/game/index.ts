import { makeGameState, Session } from "../../../lib/server/GameState/GameState";
import { generateGuid } from "../../../lib/server/idGenerator/idGenderator";
import { makePost } from "../../../lib/server/makeHandler";
import { makeGameStateRepository } from "../../../lib/server/repositories/GameStateRepository";
import { makeGameService } from "../../../lib/server/services/GameService";
import { IGameResponse } from "../../../lib/Types/api";

const service = makeGameService(makeGameStateRepository());

const handler = makePost<IGameResponse>()(async (req, res) => {
    const gameId = generateGuid();
    const game = makeGameState(req.body.name as string);

    const result = await service.storeGame(gameId, game);

    res.status(200).json({
        gameId: gameId,
        game: result,
    });
});

export default handler;