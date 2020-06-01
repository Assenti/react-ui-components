import React, { useState } from 'react';
import { Drawer, List, Button, Icon, Select, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Drawer, List } from '@assenti/react-ui-components';

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }
]

function Example() {
    const [drawer, setDrawer] = useState(true);

    return (
        <>
            <Drawer
                drawer={drawer}
                onClose={() => setDrawer(false)}
                lifted>
                <List size="medium" dark={theme}>
                    {stack.map(({name, icon}, index) => 
                        <List.Item
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
        property: 'onClose', 
        description: 'Handle drawer state', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'position', 
        description: 'Set drawer position', 
        default: 'left', 
        type: 'string',
        value: 'right | top | bottom'
    },
    { 
        property: 'dark', 
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    }
]

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }

]

const DrawerPage = () => {
    const [drawer, setDrawer] = useState(false);
    const [page, setPage] = useState(stack[0].name);
    const [position, setPosition] = useState(positions[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Drawer/>"
                    apiDescItems={items}>
                    <Select
                        items={positions}
                        label="Drawer position"
                        width={200}
                        prefix={<Icon name="chart-ppf"/>}
                        color="primary"
                        className="my-0"
                        dark={theme}
                        value={position}
                        onChange={v => setPosition(v)}/>
                    <br/>
                    <Button 
                        name="Open drawer"
                        color="primary"
                        className="mx-0 mt-20"
                        onClick={() => setDrawer(true)}/>
                    <br/>
                    <Divider/>
                    <br/>
                    <div className="rui-app relative pa-0" 
                        style={{ height: 400, overflow: 'hidden' }}>
                        <Drawer
                            drawer={drawer}
                            position={position}
                            dark={theme}
                            onClose={() => setDrawer(false)}>
                            <List size="medium" dark={theme}>
                                {stack.map(({name, icon}, index) => 
                                    <List.Item
                                        key={index}
                                        isActiveItem={name === page}
                                        noDivider
                                        hover
                                        onClick={() => setPage(name)}
                                        item={name}
                                        icon={icon}/>
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