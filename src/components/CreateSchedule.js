function CreateSchedule ({data}) {
    return(
        <div className="schedule__table_data">
            <p className="schedule__data">{data.date}</p>
            <p className="schedule__data">{data.time}</p>
            <p className="schedule__data">{data.arena}</p>
            <p className="schedule__data">{data.home}</p>
            <p className="schedule__data">{data.visitor}</p>
            <p className="schedule__data">#{data.id} - {data.desc}</p>
        </div>
    )
}

export default CreateSchedule