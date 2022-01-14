import {useState, useEffect} from "react"
import CreateCarousel from "../components/CreateCarousel"

function Auction (){
    const [auctionItems, updateAuctionItems] = useState([])
    const [response, setResponse] = useState(null)
    const slides = document.getElementsByClassName('carousel__item');
    let slidePosition = 0;
    let totalSlides = auctionItems.length;

    function hideAllSlides() {
        for (let slide of slides) {
            slide.classList.remove('carousel__item-visible');
            slide.classList.add('carousel__item-hidden');
        }
    }

    function moveToNextSlide() {
        hideAllSlides();
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        slides[slidePosition].classList.add("carousel__item-visible");
    }
    
    function moveToPrevSlide() {
        hideAllSlides();
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
        slides[slidePosition].classList.add("carousel__item-visible");
    }

    useEffect(()=>(
        fetch ("http://localhost:8000/auction")
        .then (res => {
            if (!res.ok){
                throw Error ("could not fetch auction items")
            } 
            setResponse("")
            return res.json()})
        .then (data => updateAuctionItems(data))
        .catch (
            (err)=>(setResponse(err.message))
        )
    ),[])

    const auctionElement = auctionItems.map((obj) => (
        <CreateCarousel key={obj.id} obj={obj}  />)
    )

    return(
        <div className="auction">
            <h1 className ="auction__title">Silent Auction</h1>
            <div clasName="auction_body">
                {response && <div className="message"> {response} </div>}
                {auctionElement}
            </div>
            <div className="carousel__actions">
                <button className="carousel__button-prev scale" aria-label="Previous Slidex" onClick={moveToPrevSlide}><i className="fas fa-arrow-left"></i></button>
                <button className="carousel__button-next scale" aria-label="Next Slide" onClick={moveToNextSlide}><i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default Auction