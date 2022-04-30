import { useRouter } from "next/router";
import PlayerList from "../../components/PlayerList";
import { useGame } from "../../lib/useGame/useGame";

const Game = () => {
    const router = useRouter();
    const { id: gameId } = router.query as { id: string };
    const { fetchGame, game, setGame } = useGame(gameId);

    return (
        <div>
            <h1>Game: {game.name}</h1>
            <PlayerList players={game.users}></PlayerList>
        </div>
    )
}

export default Game;