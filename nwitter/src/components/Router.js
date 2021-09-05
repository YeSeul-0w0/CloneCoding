import { useState } from 'react';
import {HashRouter as Router, Switch} from 'react-router-dom'
import Auth from "../routes/Auth.js"
import Home from "../routes/Home.js"

const AppRouter=()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return(
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Router exact path="/">
                        <Home/>
                    </Router>
                ) : (
                    <Router exact path="/">
                        <Auth />
                    </Router>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;