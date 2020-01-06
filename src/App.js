import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ButtonPage } from './pages/ButtonPage';
import { MenuPage } from './pages/MenuPage';
import { ListPage } from './pages/ListPage';
import { Drawer } from './components/Drawer';
import { Content } from './layouts/Content';
import { List } from './components/List';

const routes = [
    { path: '/', name: 'Home', Component: HomePage },
    { path: '/btns', name: 'Button', Component: ButtonPage },
    { path: '/menus', name: 'Menu', Component: MenuPage },
    { path: '/lists', name: 'List', Component: ListPage }
]

const App = () => {
    // const history = useHistory();
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);

    const handleItemClick = (item) => {
        // history.push(item.path)
    }

    return (
        <div className="app">
            <Drawer
                drawer={drawer}
                min={drawerMin}
                onResize={() => setDrawerMin(!drawerMin)}>
                <List dark
                    onItemClick={handleItemClick} 
                    items={routes} 
                    itemTitle="name" 
                    isActiveItem={current => current.path === window.location.pathname}/>
            </Drawer>
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
