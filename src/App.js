import React, { useEffect, useState, Suspense } from 'react';
import { HashRouter as Router, Switch as RouterSwitch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';
import { Content } from './layouts/Content';
import HeaderContent from './layouts/HeaderContent';
import { Preloader, Header, ThemeContext, Drawer, Sidebar } from './components';
import { version, description } from '../package.json';
const xsBreakPoint = 529;

const defineDarkDefinition = () => {
    let value = localStorage.getItem('dark')
    if (!value || value === 'false') return false
    else return true
}

const App = () => {
    const [drawer, setDrawer] = useState(true);
    const [dark, setDark] = useState(defineDarkDefinition());
    const [width, setWidth] = useState('');

    const handleSwitchDark = () => {
        setDark(!dark);
        localStorage.setItem('dark', (!dark).toString());
    }

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        document.title = description;
        
        setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize, true)
        return () => window.removeEventListener('resize', handleResize, true);
    }, [])
    
    return (
        <ThemeContext.Provider value={dark}>
            <Router>
                <Header
                    dark={dark}
                    lifted>
                    <HeaderContent
                        routes={routes}
                        title={description}
                        version={version}
                        isXs={width < xsBreakPoint}
                        onSwitchDark={handleSwitchDark}/>
                </Header>
                <div className={dark ? 'rui-app dark' : 'rui-app'}>
                    {width < xsBreakPoint ?
                    <Drawer
                        drawer={drawer}
                        dark={dark}
                        noOverlay
                        onClose={() => setDrawer(false)}>
                        <Content
                            search
                            items={routes}/>
                    </Drawer> :
                    <Sidebar
                        dark={dark}
                        lifted
                        height="calc(100vh - 50px)">
                        <Content
                            items={routes}/>
                    </Sidebar>}
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
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;