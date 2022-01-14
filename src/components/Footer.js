import CreateRegForm from "./CreateRegForm"

function Footer (){
    function handleClick(){
        document.body.classList.toggle("regForm-open")
    }
    return(
        <div className="footer">
            <div className="footer__contact">
                <p className="footer__contact__info">Tournament director</p>
                <p className="footer__contact__info">Hector Young</p>
                <p className="footer__contact__info">Ph: 780-909-8840</p>
                <p className="footer__contact__info">Email: Hectorayoung@gmail.com</p>
            </div>
            <div className="footer__register">
                <p>Spots are limited and filling up fast!</p>
                <button className="footer__RegBtn scale" onClick={handleClick}>Register Now</button>
                <CreateRegForm/>
            </div>   
            <div className="footer__socialMedia">
                <p>Follow us on social media</p>
                <a className="footer__link" href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-square scale"></i> 
                </a>
                <a className="footer__link" href="https://www.twitter.com/" target="_blank">
                    <i className="fab fa-twitter-square scale"></i>
                </a>
            </div>            
        </div>
    )
}

export default Footer