import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/tailwind.css';


import Login from './paginas/login';
import Registro from './paginas/registro';
 import AddMovie from './paginas/addMovie';
import Peliculas from './paginas/peliculas';
import Salas from './paginas/salas';
import Horarios from './paginas/horarios';
import Films from './paginas/film';
import FilmsRoomAdd from './paginas/addFilm';
import Report from './paginas/report';
import UpdateMovie from './paginas/updateMovie';



 ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/register" component={ Registro} />
            <Route path="/add_movie" component={ AddMovie } />
            <Route path="/movies" component={ Peliculas } />
            <Route path="/rooms" component={ Salas } />
            <Route path="/schedules" component={Horarios} />  
           <Route path="/films_room" component={ Films } />
             <Route path="/films_room_add" component={FilmsRoomAdd} />
              <Route path="/report" component={ Report } />
              <Route path="/update_movie" component={ UpdateMovie } />

        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();




