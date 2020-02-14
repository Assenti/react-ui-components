import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { routes } from './routes';
import { Content } from './layouts/Content';
import { DrawerContent } from './layouts/DrawerContent';
import { Preloader } from './components/Preloader';

const App = () => {
    const [drawer, setDrawer] = useState(true);
    
    return (
        <div className="app">
            <Router>
                <DrawerContent 
                    drawer={drawer}
                    onClose={() => setDrawer(false)} 
                    items={routes}/>
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
                                    <Content onDrawerToggle={() => setDrawer(!drawer)}>
                                        <Suspense fallback={<Preloader visible={true}/>}>
                                            <Component />
                                        </Suspense>
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
