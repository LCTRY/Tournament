import {useState, useEffect} from "react"
import CreateStandings from "../components/CreateStandings"

function Standings (){

    const [teamInfo, updateTeamInfo] = useState([])
    const [response, setResponse] = useState("loading...")

    useEffect(()=>{
        fetch ("http://localhost:8000/teams")
            .then (res => {
                if (!res.ok){ 
                    throw Error ("teams data fetch failed")
                }
                setResponse("")
                return res.json()
            })
            .then (data => updateTeamInfo(data))
            .catch (error => setResponse(error.message))
        },[])

    const teamElement = teamInfo.filter(data => data.status === "approved").map(data => 
            <CreateStandings key={data.id} obj={data} />
        )
    const pendingElement = teamInfo.filter(data => data.status === "pending").map(data => 
        <CreateStandings key={data.id} obj={data} />
    )

    return(
        <div className="standings">
            <h1 className ="standings__title">Tournament Standings</h1>
            <div className="standings__table">
                <h3 className="standings__table_heading">Team</h3>
                <h3 className="standings__table_heading">Wins</h3>
                <h3 className="standings__table_heading">Loss</h3>
                <h3 className="standings__table_heading">Tie</h3>
                <h3 className="standings__table_heading">Points</h3>
            </div>
            {response && <div className="message">{response}</div>}
            {teamElement}
            {pendingElement && <div>{pendingElement}</div>}
        </div>
    )
}

export default Standings