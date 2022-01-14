function CreateStandings ({obj}){
    
    let points = (obj.record.wins*2 + obj.record.tie*1)

    return (
        <div className="standings__table_data">

            {obj.status === "approved" ? (
                <p className="standings__data">{obj.name}</p>
            ) : (
                <p className="standings__data">Pending - {obj.name}</p>
            )}
            <p className="standings__data">{obj.record.wins}</p>
            <p className="standings__data">{obj.record.loss}</p>
            <p className="standings__data">{obj.record.tie}</p>
            <p className="standings__data">{points}</p>
        </div>
    )
}

export default CreateStandings 