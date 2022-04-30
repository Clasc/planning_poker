import { NextApiHandler } from "next";
import { makeGameState, Session } from "../../../lib/GameState/GameState";
import { generateGuid } from "../../../lib/idGenerator/idGenderator";
import { makeHandler } from "../../../lib/server/makeHandler";
import { IGameResponse } from "../../../lib/Types/api";

const handler = makeHandler<IGameResponse>("POST", (req, res) => {
    const gameId = generateGuid();
    const game = makeGameState(req.body.name as string);

    Session.set(gameId, game);
    res.status(200).json({
        gameId: gameId,
        game: Session.get(gameId)
    });
});

export default handler;