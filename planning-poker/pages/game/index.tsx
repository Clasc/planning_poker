import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import GameOverview from "../../components/GameOverview";
import PlayerList from "../../components/PlayerList";
import { api } from "../../lib/api";
import { useChangeHandler } from "../../lib/client/useChangeHandler";
import { useGame } from "../../lib/client/useGame";
import { IVoteResponse } from "../../lib/Types/api";

const Game = () => {
    const router = useRouter();
    const { id: gameId, player } = router.query as { id: string, player: string };
    const { game } = useGame(gameId);

    const [vote, setVote] = useState("");
    const changeVote = useChangeHandler(setVote);
    const submit = async (evt: FormEvent) => {
        evt.preventDefault();
        console.log("sending vote...");
        const response = await api.post<IVoteResponse>("/api/vote", {
            gameId,
            player,
            vote,
        });
        if (!response?.error) {
            alert("You voted!" + response?.voted ?? "");
        } else {
            alert("An error ocured!" + response?.error ?? "");
        }
    };

    return (
        <div>
            <GameOverview game={game} user={player} />
            <PlayerList players={game.players} />
            <div>
                <h3>
                    Your Vote:
                </h3>
                <form onSubmit={submit}>
                    <input type="number" name="vote" onChange={changeVote} />
                    <button type="submit" name="submit" >Submit your vote</button>
                </form>
            </div>
        </div>
    )
}

export default Game;