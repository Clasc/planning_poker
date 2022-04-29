import { execOnce } from "next/dist/shared/lib/utils"

type GameProps = {
    gameId: string;
    name: string;
    players: string[];
}


const Game = (props: GameProps) => {
    return (
        <div>
            <h1>Game: {props.name}</h1>
            <p>Your game code: {props.gameId}</p>
        </div>
    )
}

export default Game;