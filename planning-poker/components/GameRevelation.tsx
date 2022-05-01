import { GameState } from "../lib/Types/GameState";

const GameRevelation = (props: { game: GameState }) => {
    return (
        props.game.isRevealed ? <h4>Result: {props.game.revealed}</h4> : <span></span>
    )
};

export default GameRevelation;