import { NextApiHandler } from "next/dist/shared/lib/utils";
import { Session } from "../../../lib/GameState/GameState";

const handler: NextApiHandler = (req, res) => {
    if (req.method !== "GET") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    if (!req.query.id) {
        res.status(400).json({ error: "Missing gameId" });
        return;
    }

    const gameId = req.query.id as string;
    const game = Session.get(gameId);

    if (!game) {
        res.status(404).json({ error: "No Game found" });
        return;
    }

    res.status(200).json({
        gameId: gameId,
        game: game
    });
};

export default handler;