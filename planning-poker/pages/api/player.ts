import { NextApiHandler } from "next";
import { Session } from "../../lib/server/GameState/GameState";
import { makeHandler, makePost } from "../../lib/server/makeHandler";
import { IPlayerResponse } from "../../lib/Types/api";


const handler = makePost<IPlayerResponse>()((req, res) => {
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

    gameState.players.push(req.body.name);

    res.status(200).json({
        message: "Hello player" + req.body.name + " welcome to game " + req.body.gameId,
        players: gameState.players
    });
});

export default handler;