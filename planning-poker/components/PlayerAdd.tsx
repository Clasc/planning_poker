export function PlayerAdd() {
    return (
        <div className="player-add">
            <h2>Add a player</h2>
            <form>
                <label>
                    Name
                    <input type='text' name='playerName' />
                </label>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}