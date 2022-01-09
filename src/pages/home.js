function Home (){
    return(
        <div className="home">
            <div className="home__welcome_section">
                <h1 className ="home__welcome_title">Welcome to KC Ice Breaker Tournament</h1>
            </div>
            
            <div className="home__details_section">
                <h1 className ="home__details_title">Tournament Details</h1>
                <div className="home__info">
                    <p className="home__subtitle_details"> Highlights</p>
                    <ul className="home__details_list">
                        <li className="home__detail_points">Sept 23 to Sept 26, 2021</li>
                        <li className="home__detail_points">8 Teams</li>
                        <li className="home__detail_points">2 Pools</li>
                        <li className="home__detail_points">Round Robin</li>
                        <li className="home__detail_points">Crossover Playoff For Top 4 Teams</li>
                        <li className="home__detail_points">Gaurenteed 5 games</li>
                        <li className="home__detail_points">20/20/20min Stop Time</li>
                        <li className="home__detail_points">Tier 1</li>
                    </ul>
                </div>
                <img className="home__details_img" src={require('../Images/details.jpg')} alt='boy with medal' />
                <div className="home__bonus">
                    <p className="home__subtitle_bonus"> Bonus</p>
                    <ul className="home__bonus_list">
                        <li className="home__bonus_points">Loot Bag For All Players</li>
                        <li className="home__bonus_points">Heart and Hustle For Every Game</li>
                        <li className="home__bonus_points">Silent Auction Items</li>
                        <li className="home__bonus_points">Super Deker Challenge</li>
                        <li className="home__bonus_points">50/50 Draws</li>
                        <li className="home__bonus_points">Door Prizes</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home