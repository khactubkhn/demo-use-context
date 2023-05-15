import React, {useContext, useState} from "react";
import Star from "../../common/components/Star/star";
import {MEALS} from "../../data/dummy-data";
import MealItem from "./components/MealItem/mealItem";
import {Row} from "react-bootstrap";

const MealPage = () => {
    const [meals, setMeals] = useState(() => {
        return MEALS
    });

    return (
        <>
            <Row>
                {
                    meals.map(meal => {
                        return (
                            <MealItem key={meal.id} meal={meal}/>
                        )
                    })
                }
            </Row>
        </>
    )
};

export default MealPage;
