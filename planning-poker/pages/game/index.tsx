import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import GameOverview from "../../components/GameOverview";
import { useGame } from "../../lib/client/useGame";

const Game = () => {
    const router = useRouter();
    const { id: gameId, player } = router.query as { id: string, player: string };
    const { game } = useGame(gameId);

    const [vote, setVote] = useState("");

    const submit = ({ preventDefault }: FormEvent) => {
        preventDefault();
        alert("You voted!" + vote);
    };

    return (
        <div>
            <GameOverview game={game} user={player} />
            <div>
                <h3>
                    Your Vote:
                </h3>
                <form onSubmit={submit}>
                    <input type="number" name="vote" onChange={({ target }) => setVote(target.value)} />
                    <button type="submit" name="submit" >Submit your vote</button>
                </form>
            </div>
        </div>
    )
}

export default Game;