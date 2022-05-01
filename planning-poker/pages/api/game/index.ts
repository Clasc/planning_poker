import { makeGameState, Session } from "../../../lib/server/GameState/GameState";
import { generateGuid } from "../../../lib/server/idGenerator/idGenderator";
import { makePost } from "../../../lib/server/makeHandler";
import { IGameResponse } from "../../../lib/Types/api";

const handler = makePost<IGameResponse>()((req, res) => {
    const gameId = generateGuid();
    const game = makeGameState(req.body.name as string);

    Session.set(gameId, game);
    res.status(200).json({
        gameId: gameId,
        game: Session.get(gameId)
    });
});

export default handler;