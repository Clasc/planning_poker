import { GameState } from "../lib/GameState/GameState";
import PlayerList from "./PlayerList";

const GameOverview = (props: { game: GameState, user: string }) => {
    const { game } = props;

    return (
        <div>
            <h1>Game: {game.name}</h1>
            <h2>Your Name: {props.user}</h2>
            <PlayerList players={game.users} />
        </div>
    );
}

export default GameOverview;