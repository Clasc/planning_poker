import { useRouter } from "next/router";
import GameOverview from "../../components/GameOverview";
import GameRevelation from "../../components/GameRevelation";
import PlayerList from "../../components/PlayerList";
import { api } from "../../lib/api";
import { useGame } from "../../lib/client/useGame";
import { IRevealResponse } from "../../lib/Types/api";

const Admin = () => {
    const router = useRouter();
    const { gameId } = router.query as { gameId: string };

    const { game } = useGame(gameId);
    const reveal = async () => {
        const response = await api.post<IRevealResponse>("/api/reveal", { gameId });
        if (!response?.error) {
            alert("Revealed! " + response?.revealed ?? "");
        } else {
            alert("An error ocured! " + response?.error ?? "");
        }
    }

    return (
        <div>
            <h2>Admin</h2>
            <GameOverview game={game} user="Admin" />
            <PlayerList players={game.players} votes={game.votes} />
            <GameRevelation game={game} />
            <button onClick={reveal}>Reveal Votes</button>
        </div>
    )
}

export default Admin;