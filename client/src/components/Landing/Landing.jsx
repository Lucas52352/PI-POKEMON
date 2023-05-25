import { Link } from 'react-router-dom'
import './Landing.css'

const LandingPage = () => {
    return (
        <div className='landing'>

            <h1 className='titleLanding'>WELCOME TO YOUR POKEDEX</h1>

            <img className='gif' src="https://64.media.tumblr.com/cf16ffbe17ad33951fc567529bc649b5/tumblr_mrco5jwNIT1rpn9eno1_500.gif" alt="gif" />
          
            <Link to='/home'>
                <button className='landingBtn'>Get Started!</button>
            </Link>

        </div>
    )
}

export default LandingPage