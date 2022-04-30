import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import { useChangeHandler } from "../lib/client/useChangeHandler";
import { getGame, useGame } from "../lib/client/useGame";

const JoinGame = () => {
    const router = useRouter();
    const [code, setCode] = useState("");
    const changeCode = useChangeHandler(setCode);

    const submit: FormEventHandler<HTMLFormElement> = (async (evt) => {
        evt.preventDefault();
        const game = await getGame(code);
        if (!game) {
            alert("There is no game with that code, please try again");
            setCode("");
            return;
        }

        router.push("/player?gameId=" + code);
    });

    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    <p>Game Code:</p>
                    <input type='text' name='gameCode' onChange={changeCode} value={code} />
                </label>
                <button type='submit'>Join</button>
            </form>
        </div>
    );
};

export default JoinGame;