import { useRouter } from "next/router";
import GameOverview from "../../components/GameOverview";
import PlayerList from "../../components/PlayerList";
import { useGame } from "../../lib/client/useGame";

const Admin = () => {
    const router = useRouter();
    const { gameId } = router.query as { gameId: string };
    const { game } = useGame(gameId);
    return (
        <div>
            <h2>Admin</h2>
            <GameOverview game={game} user="Admin" />
            <PlayerList players={game.players} votes={game.votes} />
        </div>
    )
}

export default Admin;