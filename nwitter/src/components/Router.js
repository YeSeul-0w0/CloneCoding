import {HashRouter as Router, Switch} from 'react-router-dom'
import Auth from "routes/Auth"
import Home from "routes/Home"

const AppRouter=({isLoggedIn})=>{
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