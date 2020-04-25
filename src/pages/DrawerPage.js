import React, { useState } from 'react';
import { Drawer, List, ListItem, Button, Icon, Select, ThemeContext, Divider, Switch } from '../components';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Drawer, List, ListItem, Icon, Switch, Select } from '@assenti/react-ui-components';

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }
]

function Example() {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [absolute, setAbsolute] = useState(false);
    const [hideOverlay, setHideOverlay] = useState(false);
    const [collapsable, setCollapsable] = useState(false);
    const [elevated, setElevated] = useState(false);
    const [page, setPage] = useState(stack[0].name);
    const [position, setPosition] = useState(positions[0]);

    return (
        <>
            <Switch 
                color="primary" 
                check={absolute}
                rightLabel="Drawer absolute"
                className="my-10"
                onChange={() => setAbsolute(!absolute)}/>
            <br/>
            <Select
                items={positions}
                disabled={!absolute}
                label="Drawer position in absolute mode"
                width={200}
                prefix={<Icon name="chart-ppf"/>}
                color="primary"
                className="my-0"
                dark={theme}
                value={position}
                onChange={handleChange}/>
            <br/>
            <Switch 
                color="primary" 
                check={hideOverlay}
                rightLabel="Hide overlay in absolute mode"
                className="my-10"
                onChange={() => setHideOverlay(!hideOverlay)}/>
            <br/>
            <Switch 
                color="primary" 
                check={collapsable}
                rightLabel="Collapsable"
                className="my-10"
                onChange={() => setCollapsable(!collapsable)}/>
            <br/>
            <Switch 
                color="primary" 
                check={elevated}
                rightLabel="Lifted"
                className="my-10"
                onChange={() => setElevated(!elevated)}/>
            <br/>
            <Button 
                name="Toggle drawer"
                color="primary"
                onClick={() => setDrawer(!drawer)}/>
            <br/>
            <Divider/>
            <br/>
            <div className="rui-app relative pa-0" 
                style={{ height: 400, overflow: 'hidden' }}>
                <Drawer
                    drawer={drawer}
                    position={position}
                    absolute={absolute}
                    dark={theme}
                    height={400}
                    hideOverlay={hideOverlay}
                    onClose={() => setDrawer(false)}
                    min={absolute ? false : drawerMin}
                    collapsable={collapsable}
                    lifted={elevated}
                    onResize={() => setDrawerMin(!drawerMin)}>
                    <List size="medium" dark={theme}>
                        {stack.map(({name, icon}, index) => 
                            <ListItem
                                key={index}
                                isActiveItem={name === page}
                                noDivider
                                hover
                                onClick={() => setPage(name)}
                                item={drawerMin ? '' : name}
                                icon={icon}
                                tooltip={drawerMin ? name : null}
                                tooltipPosition="right"/>
                        )}
                    </List>
                </Drawer>
                <div className="rui-page">
                    <div className="pa-20 fz-12">
                        {page} Page
                    </div>
                </div>
            </div>
        </>
    )
)`

const positions = ['left', 'top', 'bottom', 'right'];
const items = [
    { 
        property: 'drawer', 
        description: 'Drawer visibility state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'collapsable', 
        description: 'Make drawer collapsable', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'min', 
        description: 'Set drawer width to minimum size', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onResize', 
        description: 'Handle drawer min prop toggling', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'onClose', 
        description: 'Handle drawer state', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'fullHeight', 
        description: 'Set drawer height to full screen height', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'position', 
        description: 'Set drawer position', 
        default: 'left', 
        type: 'string',
        value: 'right | top | bottom'
    },
    { 
        property: 'header', 
        description: 'Set drawer header', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'headerCentered', 
        description: 'Set drawer header content position to center', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark', 
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'lifted', 
        description: 'Elevate Drawer', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'absolute', 
        description: 'Set drawer position to absolute', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
]

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }

]

const DrawerPage = () => {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [absolute, setAbsolute] = useState(false);
    const [hideOverlay, setHideOverlay] = useState(false);
    const [collapsable, setCollapsable] = useState(false);
    const [elevated, setElevated] = useState(false);
    const [page, setPage] = useState(stack[0].name);
    const [position, setPosition] = useState(positions[0]);

    const handleChange = (value) => {
        if (value !== 'left') {
            setAbsolute(true)
        } else {
            setAbsolute(false)
        }
        setPosition(value)
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Drawer/>"
                    apiDescItems={items}>
                    <Switch 
                        color="primary" 
                        check={absolute}
                        rightLabel="Drawer absolute"
                        className="my-10"
                        onChange={() => setAbsolute(!absolute)}/>
                    <br/>
                    <Select
                        items={positions}
                        disabled={!absolute}
                        label="Drawer position in absolute mode"
                        width={200}
                        prefix={<Icon name="chart-ppf"/>}
                        color="primary"
                        className="my-0"
                        dark={theme}
                        value={position}
                        onChange={handleChange}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={hideOverlay}
                        rightLabel="Hide overlay in absolute mode"
                        className="my-10"
                        onChange={() => setHideOverlay(!hideOverlay)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={collapsable}
                        rightLabel="Collapsable"
                        className="my-10"
                        onChange={() => setCollapsable(!collapsable)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={elevated}
                        rightLabel="Lifted"
                        className="my-10"
                        onChange={() => setElevated(!elevated)}/>
                    <br/>
                    <Button 
                        name="Toggle drawer"
                        color="primary"
                        onClick={() => setDrawer(!drawer)}/>
                    <br/>
                    <Divider/>
                    <br/>
                    <div className="rui-app relative pa-0" 
                        style={{ height: 400, overflow: 'hidden' }}>
                        <Drawer
                            drawer={drawer}
                            position={position}
                            absolute={absolute}
                            dark={theme}
                            height={400}
                            hideOverlay={hideOverlay}
                            onClose={() => setDrawer(false)}
                            min={absolute ? false : drawerMin}
                            collapsable={collapsable}
                            lifted={elevated}
                            onResize={() => setDrawerMin(!drawerMin)}>
                            <List size="medium" dark={theme}>
                                {stack.map(({name, icon}, index) => 
                                    <ListItem
                                        key={index}
                                        isActiveItem={name === page}
                                        noDivider
                                        hover
                                        onClick={() => setPage(name)}
                                        item={drawerMin ? '' : name}
                                        icon={icon}
                                        tooltip={drawerMin ? name : null}
                                        tooltipPosition="right"/>
                                )}
                            </List>
                        </Drawer>
                        <div className="rui-page">
                            <div className="pa-20 fz-12">
                                {page} Page
                            </div>
                        </div>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default DrawerPage;