import { makeGameState } from "../../../lib/server/GameState/GameState";
import { generateGuid } from "../../../lib/server/idGenerator/idGenderator";
import { makePost } from "../../../lib/server/makeHandler";
import { gameService } from "../../../lib/server/setup";
import { IGameResponse } from "../../../lib/Types/api";



const handler = makePost<IGameResponse>()(async (req, res) => {
    const gameId = generateGuid();
    const game = makeGameState(req.body.name as string);

    const result = await gameService.addGame(gameId, game);

    res.status(200).json({
        gameId: gameId,
        game: result,
    });
});

export default handler;