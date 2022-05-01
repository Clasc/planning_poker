import { GameState } from "../lib/Types/GameState";


const GameOverview = (props: { game: GameState, user: string }) => {
    const { game } = props;
    return (
        <div>
            <h1>Game: {game.name}</h1>
            <h2>Your Name: {props.user}</h2>
        </div>
    );
}

export default GameOverview;