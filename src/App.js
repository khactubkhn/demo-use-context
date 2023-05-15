import './App.css';
import {Container, Row} from "react-bootstrap";
import Menu from "./common/components/Menu/menu";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MealPage from "./pages/MealPage/mealPage";
import FavoriteMealPage from "./pages/FavoritedMealPage/favoritedMealPage";
import FavoritesMealContext from "./context/favoritesMealContext";
import {useState} from "react";


function App() {
    const [idsFavorite, setIdsFavorite] = useState([]);

    const addFavorite = (id) => {
        console.log('Add favorite id: ', id);
        setIdsFavorite([...idsFavorite, id]);
    }

    const removeFavorite = (id) => {
        console.log('Remove favorite id: ', id);
        const newIdsFavorite = idsFavorite.filter(index => index !== id);
        setIdsFavorite(newIdsFavorite);
    }

    const value = {
        ids: idsFavorite,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesMealContext.Provider value={value}>
            <Container>
                <BrowserRouter>
                    <Row>
                        <Menu/>
                    </Row>
                    <Routes>
                        <Route path={"/"} element={<MealPage/>}/>
                        <Route path={"/favorite"} element={<FavoriteMealPage/>}/>
                    </Routes>
                </BrowserRouter>
            </Container>
        </FavoritesMealContext.Provider>
    );
}

export default App;
