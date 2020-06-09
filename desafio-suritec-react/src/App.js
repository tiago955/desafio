import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Component/login_component";
import SignUp from "./Component/signup_component";
import Simulador from "./Component/simulador_component";
import Home from "./Component/home_component";





function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expend-lg navbar-light fixed-top">
        <div className="container">
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link className="nav-link" to={"./sign-in"}>Login</Link>
                    </li>

                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>

                        <li className="nav-item">
                          <Link className="nav-link" to={"/simulador"}>Simulador de emprestimo</Link>
                          
                           <li className="nav-item">
                             <Link className="nav-link" to={"/home"}>Home</Link>
                          </li>
                         
                        </li>
                        </li>
                        </ul>
                        </div>
                        </div>
                        </nav>

                        <div className="auth-wrapper">
                          <div className="auth-inner">
                            <Switch>
                              <Route exact path='/' component={Login} />
                              <Route path="/sign-in" component={Login} />
                              <Route path="/sign-up" component={SignUp} />
                              <Route path="/simulador-de-credito" component={Simulador} />
                              <Route path="/home" component={Home} />
                            
                              
                             
                            </Switch>
                          </div>
                        </div>
                        </div>
  );
}



export default App;

