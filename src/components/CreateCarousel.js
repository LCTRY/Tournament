
import {useForm} from "react-hook-form"
import {useState} from "react"

function CreateCarousel ({obj}){
    const {register, handleSubmit} = useForm()
    const [userMessage, updateUserMessage] = useState("")
    const [currentBidder, updateCurrentBidder] = useState(obj.current)
    const [currentPrice, updateCurrentPrice] = useState(obj.price)

    function toggleAuctionForm(){
        document.body.classList.toggle("auctionForm__open")
    }

    const HandleClick = (data) => {
        const url = `http://localhost:8000/auction/${obj.id}`
        const info = {
            current: data.current, 
            phone: data.phone, 
            email: data.email, 
            price: data.price
        }
        fetch(url, {
            method:'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(info)
        })
        
        document.body.classList.toggle("auctionForm__open")
        updateCurrentBidder(data.current)
        updateCurrentPrice(data.price)
        updateUserMessage(`Bid Accepted. ${data.current} as the new high bid with $${data.price}`)
        setTimeout(() => {
            updateUserMessage("")
        }, 3000)
}

    return (
        <div className="carousel">
            <div className={`carousel__item ${obj.isVisible}`}>
                <div className="carousel__img">
                    <img src={obj.url} alt={obj.desc} />
                </div>
                <div className="carousel__desc">
                    <h3> {obj.desc}</h3>
                    <p> Current Bidder: {currentBidder}</p>
                    <p> Current Price: ${currentPrice}</p>
                    <button className="carousel__Bidbtn scale" onClick={toggleAuctionForm}> Bid Now</button>
                    {userMessage && <div className="message">{userMessage}</div>}
                    <div className="auctionForm">
                        <form onSubmit={handleSubmit(HandleClick)}>
                            <label>Name</label>
                            <input placeholder="your name" required {...register("current")}/><br/>
                            <label>Email</label>
                            <input type="email" placeholder="your email" required {...register("email")}/><br/>
                            <label>Phone</label>
                            <input placeholder="phone xxx-xxx-xxx" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" {...register("phone")}/><br/>
                            <label>Your Bid</label>
                            <input placeholder="your bid" type="number" required min={obj.price} {...register("price")}/><br/>
                            <button className="auctionForm__btn scale" type="submit"> Submit Bid</button><br/>
                            <button className="auctionForm__btn scale" type="reset"> Clear </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCarousel

