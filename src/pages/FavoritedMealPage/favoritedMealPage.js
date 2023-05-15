import React, {useContext, useState} from "react";
import MealItem from "../MealPage/components/MealItem/mealItem";
import {MEALS} from "../../data/dummy-data";
import FavoritesMealContext from "../../context/favoritesMealContext";
import {Row} from "react-bootstrap";

const FavoriteMealPage = () => {
    const favoriteCtx = useContext(FavoritesMealContext);

    const [meals, setMeals] = useState([]);

    const getFavoritesMeal = () => {
        if(!MEALS){
            return [];
        }
        return MEALS.filter(meal => favoriteCtx.ids.includes(meal.id));
    }


    return (
        <>
            <Row>
                {
                    getFavoritesMeal().map(meal => {
                        return (
                            <MealItem key={meal.id} meal={meal}/>
                        )
                    })
                }
            </Row>
        </>
    )
};

export default FavoriteMealPage;
