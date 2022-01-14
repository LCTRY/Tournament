import {useState} from "react"
import {useEffect} from "react"
import CreateSchedule from "./../components/CreateSchedule"

function Schedule (){

    const [schedule, setSchedule] = useState([])
    const [response, setResponse] = useState("loading...")

    useEffect (()=>{
        fetch ("http://localhost:8000/Schedule")
        .then (res => { 
            if(!res.ok) {
                throw Error("could not fetch schedule")
            }
            setResponse("")
            return res.json()
            })
        .then (data => setSchedule(data))
        .catch (error => setResponse(error.message))
    },[])
    
    const scheduleElement = schedule.map((data)=>(
        <CreateSchedule key={data.id} data={data} />
    ))

    return(
        <div className="schedule">
        <div className ="schedule__title">
            <h1>Tournament Schedule</h1>
        </div>
            
        <div className="schedule__table">
            <h3 className="schedule__table_heading">Date</h3>
            <h3 className="schedule__table_heading">Time</h3>
            <h3 className="schedule__table_heading">Arena</h3>
            <h3 className="schedule__table_heading">Home</h3>
            <h3 className="schedule__table_heading">Away</h3>
            <h3 className="schedule__table_heading">Description</h3>
        </div>
        {response && <div className="message">{response}</div>}
        {scheduleElement}
        </div>
    )
}

export default Schedule