const PlayerList = (props: { players: string[] }) => {
    const players = props.players?.map(p => <li key={p}> {p} </li>) ?? []
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