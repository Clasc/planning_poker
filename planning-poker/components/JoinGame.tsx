import { useState } from "react";
import { api } from "../lib/api";
import { useChangeHandler } from "../lib/client/useChangeHandler";
import { IPlayerResponse } from "../lib/Types/api";

export function JoinGame(props: { gameId: string, added: (player: string) => void }) {
    const [name, setName] = useState("");

    const changeName = useChangeHandler(setName);

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        const res = await api.post<IPlayerResponse>("/api/player", { gameId: props.gameId, name });
        if (!res) {
            alert("something went wrong :(");
            console.error(res);
            return;
        }
        props.added(name);
    };

    return (
        <div>
            <h2>Create a Player</h2>
            <form onSubmit={submit}>
                <label>
                    <p>Player Name:</p>
                    <input type='text' name='player' onInput={changeName} />
                </label>
                <div>
                    <button type='submit'>Join game as </button><p>{name}</p>
                </div>
            </form>
        </div>
    )
}