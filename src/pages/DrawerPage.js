import React, { useState } from 'react';
import { Drawer, List, ListItem, Button, Tooltip, Table, Card, Header, Collapse, Icon } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Drawer, List, ListItem, Header, Icon } from '@assenti/react-ui-components';

function Example() {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [page, setPage] = useState(stack[0].name)

    return (
        <div className="app" style={{ minHeight: 260 }}>
            <Drawer
                drawer={drawer}
                min={drawerMin}
                onClose={() => setDrawer(false)}
                header={drawerMin ? <Icon name="react" /> : 'Drawer'}
                collapsable
                headerCentered
                onResize={() => setDrawerMin(!drawerMin)}>
                {drawerMin ? 
                    <List>
                        {stack.map(({name, icon}, index) => 
                            <ListItem
                                key={index}
                                noDivider
                                render={
                                    <Tooltip 
                                        tooltip={name}>
                                        <Button
                                            light 
                                            onClick={() => setPage(name)} 
                                            icon={icon}/>
                                    </Tooltip>
                                }
                                />
                        )}
                    </List> : 
                    <List size="medium">
                        {stack.map((item, index) => 
                            <ListItem 
                                key={index}
                                noDivider
                                icon={item.icon} 
                                isActiveItem={item.name === page}
                                onClick={() => setPage(item.name)}   
                                item={item.name}
                                hover/>
                        )}
                    </List>
                }
            </Drawer>
            <div className="page">
                <Header 
                    title="Header" 
                    leftControl
                    onLeftControl={() => setDrawer(!drawer)}/>
                <div className="pa-20 fz-12">
                    {page} Page
                </div>
            </div>
        </div>
    )
)`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'drawer', 
        description: 'Drawer visibilty state', 
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
        default: '', 
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
        property: 'absolute', 
        description: 'Set drawer position to absolute', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
]

const stack = [
    { name: 'JavaScript', icon: 'code' }, 
    { name: 'TypeScript', icon: 'code' },
    { name: 'React', icon: 'code' },
    { name: 'React Router', icon: 'code' },
    { name: 'React Redux', icon: 'code' }
]

export const DrawerPage = () => {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [page, setPage] = useState(stack[0].name)

    return (
        <div className="rui-page">
            <div className="rui-page-title">Drawer Component</div>
            <Card flat className="overflow-y pa-0">
                <div className="rui-app" style={{ minHeight: 260 }}>
                    <Drawer
                        drawer={drawer}
                        min={drawerMin}
                        onClose={() => setDrawer(false)}
                        header={drawerMin ? <Icon name="react" /> : 'Drawer'}
                        collapsable
                        headerCentered
                        onResize={() => setDrawerMin(!drawerMin)}>
                        {drawerMin ? 
                            <List>
                                {stack.map(({name, icon}, index) => 
                                    <ListItem
                                        key={index}
                                        noDivider
                                        render={
                                            <Tooltip 
                                                tooltip={name}>
                                                <Button
                                                    light 
                                                    onClick={() => setPage(name)} 
                                                    icon={icon}/>
                                            </Tooltip>
                                        }
                                        />
                                )}
                            </List> : 
                            <List size="medium">
                                {stack.map((item, index) => 
                                    <ListItem 
                                        key={index}
                                        noDivider
                                        icon={item.icon} 
                                        isActiveItem={item.name === page}
                                        onClick={() => setPage(item.name)}   
                                        item={item.name}
                                        hover/>
                                )}
                            </List>
                        }
                    </Drawer>
                    <div className="rui-page">
                        <Header 
                            title="Header" 
                            leftControl
                            onLeftControl={() => setDrawer(!drawer)}/>
                        <div className="pa-20 fz-12">
                            {page} Page
                        </div>
                    </div>
                </div>
                <Collapse 
                    icon="code"
                    className="mx-10" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
