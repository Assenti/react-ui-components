import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ButtonPage } from './pages/ButtonPage';

import { Drawer } from './components/Drawer';
import { Content } from './layouts/Content';

const routes = [
    { path: '/', name: 'Home', Component: HomePage },
    { path: '/btns', name: 'Buttons', Component: ButtonPage }
]

const App = () => {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
  
    return (
        <div className="app">
            <Drawer
            drawer={drawer}
            min={drawerMin}
            onResize={() => setDrawerMin(!drawerMin)}/>
            <Router>
                <Switch>
                    {routes.map(({path, Component}, index) => 
                        <Route key={index} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit>
                                <div className="page">
                                    <Content>
                                        <Component />
                                    </Content>
                                </div>
                                </CSSTransition>
                            )}
                        </Route>
                    )}
                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
