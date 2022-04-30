import { NextApiHandler } from "next";
import { MakeGameState, Session } from "../../../lib/GameState/GameState";
import { generateGuid } from "../../../lib/idGenerator/idGenderator";
import { IGameResponse } from "../../../lib/Types/api";

const handler: NextApiHandler<IGameResponse> = (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const gameId = generateGuid();
    const game = MakeGameState(req.body.name as string);
    Session.set(gameId, game);

    res.status(200).json({
        gameId: gameId,
        game: Session.get(gameId)
    });
}

export default handler;