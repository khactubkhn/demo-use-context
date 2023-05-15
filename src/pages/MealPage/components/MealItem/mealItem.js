import {Card, Col, Row} from "react-bootstrap";
import Star from "../../../../common/components/Star/star";
import {useContext, useState} from "react";
import FavoritesMealContext from "../../../../context/favoritesMealContext";
import './style.css'

const MealItem = ({meal}) => {
    const favoriteCtx = useContext(FavoritesMealContext);
    const [favorite, setFavorite] = useState(() => {
        return favoriteCtx.ids.includes(meal.id);
    });

    const handleFavoriteButtonClicked = () => {
        console.log('Favorite: ', meal.title);
        if(!favorite){
            favoriteCtx.addFavorite(meal.id);
        }else {
            favoriteCtx.removeFavorite(meal.id);
        }
        setFavorite(!favorite);
    }

    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}>
            <div className={"meal-container"}>
                <div className={"meal-img"}>
                    <img src={meal.imageUrl} alt=""/>
                </div>
                <div className="meal-title">
                    <p>{meal.title}</p>
                </div>
                <span>
                    Yêu thích:  <Star isFavorite={favorite} onClick={handleFavoriteButtonClicked}/>
                </span>
            </div>
        </Col>
    );
};


export default MealItem;
