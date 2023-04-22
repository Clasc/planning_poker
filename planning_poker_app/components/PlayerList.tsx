const PlayerList = (props: { players: string[], votes?: Record<string, number> }) => {
    const players = props.players?.map(p => <li key={p}>
        {p}: {props.votes?.[p] ?? "?"}
    </li>) ?? []
    return (
        <div>
            <h3>Players:</h3>
            <ul>
                {players}
            </ul>
        </div>
    )
}

export default PlayerList;