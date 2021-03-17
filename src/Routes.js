import React from 'react';
import { Switch, Route} from 'react-router';
import Home from './components/Home';
import Ingles from './components/Ingles';
import Español from './components/Español';


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Ingles' component={Ingles} />
            <Route exact path='/Español' component={Español} />
        </Switch>
    )
}

export default Routes;