import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route, Link } from 'react-router-dom';
import FavoritesMealContext from "../../../context/favoritesMealContext";
import {useContext} from "react";
const Menu = () => {
    const favoriteCtx = useContext(FavoritesMealContext);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">VTI_MEAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Danh sách món ăn</Link>
                        <Link to="/favorite" className="nav-link">Món ăn yêu thích</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Số món ăn bạn ưa thích: <b>{favoriteCtx.ids.length}</b>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
