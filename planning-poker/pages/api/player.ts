import { NextApiHandler } from "next";
import { Session } from "../../lib/GameState/GameState";
import { IPlayerResponse } from "../../lib/Types/api";


const handler: NextApiHandler<IPlayerResponse> = (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    if (!req.body.name || !req.body.gameId) {
        res.status(400).json({
            error: "Missing name or gameId"
        });
        return;
    }

    const gameState = Session.get(req.body.gameId);
    // console.log({ Session });
    // console.log({ gameState });

    if (!gameState) {
        res.status(400).json({
            error: "Invalid gameId"
        });
        return;
    }

    gameState.users.push(req.body.name);

    res.status(200).json({
        message: "Hello player" + req.body.name + " welcome to game " + req.body.gameId,
        users: gameState.users
    });
};

export default handler;