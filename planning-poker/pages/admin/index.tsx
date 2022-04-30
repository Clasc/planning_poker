import { useRouter } from "next/router";
import GameOverview from "../../components/GameOverview";
import { useGame } from "../../lib/client/useGame";

const Admin = () => {
    const router = useRouter();
    const { gameId } = router.query as { gameId: string };
    const { game } = useGame(gameId);
    return (
        <div>
            <h2>Admin</h2>
            <GameOverview game={game} user="Admin" />
        </div>
    )
}

export default Admin;