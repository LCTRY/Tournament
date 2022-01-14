import CreateAlbum from "../components/CreateAlbum"
import {useState, useEffect} from "react"
import {getClass} from "../util/photoUtil"

function Photos (){

const [photoInfo, updatePhotoInfo] = useState([])
const [response, setResponse] = useState("loading...")

useEffect(()=>{
    fetch("http://localhost:8000/photos")
    .then((res)=> {
        if (!res.ok) {
            throw Error('could not fetch pictures')
        }
        setResponse("")
        return res.json()
    })
    .then(data => (updatePhotoInfo(data)))
    .catch (err => {
        setResponse(err.message)
    })
},[])

const photoElement = photoInfo.map((img, i)=>(
    <CreateAlbum key={img.id} img={img} className={getClass(i)}/>
))

    return(
        <div className="photos">
            <h1 className ="Photos__title">Tournament Pictures</h1>
            <div className="photos__album">
                {response && <div className="message">{response}</div>}
                {photoElement}
            </div>
        </div>
    )
}

export default Photos