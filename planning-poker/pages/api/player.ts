import { NextApiHandler } from "next";
import { Session } from "../../lib/GameState/GameState";


const handler: NextApiHandler = (req, res) => {
    if (!req.body.name || !req.body.gameId) {
        res.status(400).json({
            error: "Missing name or gameId"
        });
        return;
    }

    const session = Session.get(req.body.gameId);
    if (!session) {
        res.status(400).json({
            error: "Invalid gameId"
        });
        return;
    }

    session.users.push(req.body.name);

    res.status(200).json({
        message: "Hello player" + req.body.name + " welcome to game " + req.body.gameId,
        users: session.users
    });
};

export default handler;