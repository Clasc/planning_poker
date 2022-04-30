
import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "../lib/api";
import { IGameResponse } from "../lib/Types/api";

const CreateGame = () => {
    const [name, setName] = useState("");

    const router = useRouter();
    const changeName = ({ target }: React.ChangeEvent<HTMLInputElement>) => setName(target.value);

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        const res = await api.post<IGameResponse>("/api/game", { name });
        if (!res) {
            alert("something went wrong :(");
            return;
        }
        router.push(`/player?gameId=${res.gameId}`);
    };

    return (
        <div>
            <h1>Create a game</h1>
            <form onSubmit={submit}>
                <label>
                    <p>Game Name:</p>
                    <input type='text' name='gameName' onInput={changeName} />
                </label>
                <h3>Your game: {name}</h3>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateGame;