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

import React, { useEffect, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter as Router, Switch as RouterSwitch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';
import { DrawerContent } from './layouts/DrawerContent';
import { Preloader, Header, ThemeContext, Tooltip, Button, Switch } from './components';
import { version, description } from '../package.json';

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
        <ThemeContext.Provider value={dark}>
            <Header
                leftControl
                dark={dark}
                lifted
                sticky
                onLeftControl={() => setDrawer(!drawer)} 
                title={description}
                rightSide={
                <div className="row align-center">
                    <Switch color="primary" 
                        check={dark}
                        leftIcon="sun"
                        leftIconColor={dark ? '#fff' : ''}
                        rightIconColor={dark ? '#fff' : ''}
                        className="mr-10"
                        rightIcon="moon" 
                        onChange={() => setDark(!dark)}/>
                    <div className="mr-15">
                        <Tooltip tooltip="Current version" position="left">
                            <a href="https://github.com/Assenti/react-ui-components/blob/master/CHANGELOG.md" 
                                rel="noopener noreferrer"
                                target="_blank"
                                className="fw-bold">
                                <small>v{version}</small>
                            </a>
                        </Tooltip>
                    </div>
                    <Tooltip tooltip="Visit Github repo" position="left">
                        <Button 
                            icon="github"
                            light={!dark}
                            dark={dark} 
                            onClick={e => { 
                            e.preventDefault()
                            window.open('https://github.com/Assenti/react-ui-components', '_blank')}}/>
                    </Tooltip>
                </div>
            }/>
            <div className={dark ? 'rui-app dark' : 'rui-app'}>
                <DrawerContent
                    dark={dark}
                    drawer={drawer}
                    onSwitch={handleSwitchDark}
                    onClose={() => setDrawer(false)} 
                    items={routes}/>
                <Router>
                    <RouterSwitch>
                        {routes.map(({path, Component}, index) => 
                            <Route key={index} exact path={path}>
                                <Suspense fallback={<Preloader visible/>}>
                                    <div className="rui-content">
                                        <div className="rui-content-inner">
                                            <Component />
                                        </div>
                                    </div>
                                </Suspense>
                            </Route>
                        )}
                        <Route path="*">
                            <Redirect to="/"/>
                        </Route>
                    </RouterSwitch>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
}

ReactDOM.render(<App />, document.querySelector('#rui-components'));