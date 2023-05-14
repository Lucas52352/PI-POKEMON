import { Link } from 'react-router-dom'
// import myGIF from '../../images/pokemonLanding.mp4'


const LandingPage = () => {
    return (
        <div>

            {/* <img src={myGIF} alt='pokemon-GIF' /> */}

            <Link to='/home'>
                <button>Get Started!</button>
            </Link>
        </div>
    )
}

export default LandingPage