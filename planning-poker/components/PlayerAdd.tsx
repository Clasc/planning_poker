import { useState } from "react";
import { api } from "../lib/api";

export function PlayerAdd(props: { gameId: string }) {
    const [name, setName] = useState("");

    const changeName = ({ target }: React.ChangeEvent<HTMLInputElement>) => setName(target.value);

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        const res = await api.post<{ gameId: string }>("/api/player", { gameId: props.gameId, name });
        if (!res) {
            alert("something went wrong :(");
            console.error(res);
            return;
        }
    };

    return (
        <div>
            <h1>Create a Player</h1>
            <form onSubmit={submit}>
                <label>
                    <p>Player Name:</p>
                    <input type='text' name='player' onInput={changeName} />
                </label>
                <h3>Your player: {name}</h3>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}