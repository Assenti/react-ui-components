import React, { useState } from 'react';
import { Sidebar, List, ThemeContext, Divider, Switch } from '../components';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Sidebar, List } from '@assenti/react-ui-components';

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }
]

function Example() {
    const [min, setMin] = useState(false);

    return (
        <div className="row" 
            style={{ height: 400, overflow: 'hidden' }}>
            <Sidebar
                collapsable
                onToggle={(flag) => setMin(flag)}>
                <List 
                    size="medium" 
                    dark={theme}>
                    {stack.map(({name, icon}, index) => 
                        <List.Item
                            key={index}
                            isActiveItem={name === page}
                            noDivider
                            hover
                            onClick={() => setPage(name)}
                            item={min ? '' : name}
                            icon={icon}
                            tooltip={min ? name : null}
                            tooltipPosition="right"/>
                    )}
                </List>
            </Sidebar>
            <div className="rui-page">
                <div className="pa-20 fz-12">
                    {page} Page
                </div>
            </div>
        </div>
    )
)`

const items = [
    { 
        property: 'width', 
        description: 'Set Sidebar width', 
        default: '280px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'minWidth', 
        description: 'Set Sidebar collapsed width', 
        default: '50px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'collapsable', 
        description: 'Make Sidebar collapsable', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'default', 
        description: 'Set default Sidebar collpasing state', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onToggle', 
        description: 'Toggle Sidebar collapsing (returns current collapsing state)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'height', 
        description: 'Set Sidebar height', 
        default: '100% of parent element', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'rightSide', 
        description: 'Set collapse icon buttons adapted to right side ', 
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
        property: 'expandText', 
        description: 'Set custom expand tooltip text', 
        default: 'Expand', 
        type: 'string',
        value: ''
    },
    { 
        property: 'collapseText', 
        description: 'Set custom collapse tooltip text', 
        default: 'Collapse', 
        type: 'string',
        value: ''
    },
]

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }
]

const SidebarPage = () => {
    const [min, setMin] = useState(false);
    const [collapsable, setCollapsable] = useState(true);
    const [lifted, setLifted] = useState(false);
    const [page, setPage] = useState(stack[0].name);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Sidebar/>"
                    apiDescItems={items}>
                    <Switch 
                        color="primary" 
                        check={collapsable}
                        rightLabel="Collapsable"
                        className="my-10"
                        onChange={() => setCollapsable(!collapsable)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={lifted}
                        rightLabel="Lifted"
                        className="my-10"
                        onChange={() => setLifted(!lifted)}/>
                    <br/>
                    <Divider/>
                    <br/>
                    <div className="row" 
                        style={{ height: 400, overflow: 'hidden' }}>
                        <Sidebar
                            dark={theme}
                            collapsable={collapsable}
                            lifted={lifted}
                            onToggle={(flag) => setMin(flag)}>
                            <List 
                                size="medium" 
                                dark={theme}>
                                {stack.map(({name, icon}, index) => 
                                    <List.Item
                                        key={index}
                                        isActiveItem={name === page}
                                        noDivider
                                        hover
                                        onClick={() => setPage(name)}
                                        item={min ? '' : name}
                                        icon={icon}
                                        tooltip={min ? name : null}
                                        tooltipPosition="right"/>
                                )}
                            </List>
                        </Sidebar>
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
export default SidebarPage;