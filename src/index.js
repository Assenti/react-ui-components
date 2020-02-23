/**
@license MIT

Copyright (c) 2020 Asset Sultanov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';
import { Content } from './layouts/Content';
import { DrawerContent } from './layouts/DrawerContent';
import { description } from '../package.json';

const defineDarkDefinition = () => {
    let value = localStorage.getItem('dark')
    if (!value || value === 'false') return false
    else return true
}

const App = () => {
    const [drawer, setDrawer] = useState(true);
    const [dark, setDark] = useState(defineDarkDefinition());

    const handleSwitchDark = () => {
        setDark(!dark);
        localStorage.setItem('dark', (!dark).toString());
    }

    useEffect(() => {
        document.title = description
    }, [])
    
    return (
        <div className="rui-app">
            <Router>
                <DrawerContent
                    dark={dark}
                    drawer={drawer}
                    onClose={() => setDrawer(false)} 
                    items={routes}/>
                <Switch>
                    {routes.map(({path, Component}, index) => 
                        <Route key={index} exact path={path}>
                            <Content 
                                dark={dark} 
                                onSwitch={() => handleSwitchDark()} 
                                onDrawerToggle={() => setDrawer(!drawer)}>
                                <Component />
                            </Content>
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

ReactDOM.render(<App />, document.querySelector('#rui-components'));
