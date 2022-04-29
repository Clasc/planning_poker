import { useState } from "react";

export function PlayerAdd() {
    const [name, setName] = useState("");

    const changeName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setName(target.value);
    };

    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        alert("hello! " + name)
    };

    return (
        <div>
            <h1>Create a Player</h1>
            <form onSubmit={submit}>
                <label>
                    <p>Game Name:</p>
                    <input type='text' name='player' onInput={changeName} />
                </label>
                <h3>Your player: {name}</h3>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}