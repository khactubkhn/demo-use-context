import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import './style.css'



const Star = ({isFavorite, onClick}) => {
    const handleStartClicked = () => {
        if(onClick){
            onClick();
        }
    }
    if(isFavorite){
        return <FontAwesomeIcon onClick={handleStartClicked} className="light-star" icon={faStar} />
    }
    return <FontAwesomeIcon onClick={handleStartClicked} icon={faStar} />
};


export default Star;