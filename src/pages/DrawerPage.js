import React, { useState, useRef } from 'react';
import { Drawer, List, ListItem, Button, Badge, Table, Card, Header, Collapse, Icon, Select, BackTopBtn, CopyToClipboard } from '../components';
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
                <List size="medium">
                    {stack.map(({name, icon}, index) => 
                        <ListItem
                            key={index}
                            isActiveItem={name === page}
                            noDivider
                            item={drawerMin ? '' : name}
                            icon={icon}
                            tooltip={name}
                            tooltipPosition="right"/>
                    )}
                </List>
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

const usagePositions =
`// Usage examples
import React, { useState } from 'react';
import { Drawer, List, ListItem, Header, Icon } from '@assenti/react-ui-components';
const positions = ['default', 'top', 'bottom', 'right'];
const stack = [
    { name: 'JavaScript', icon: 'code' }, 
    { name: 'TypeScript', icon: 'code' },
    { name: 'React', icon: 'code' },
    { name: 'React Router', icon: 'code' },
    { name: 'React Redux', icon: 'code' }
]

function Example() {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [page, setPage] = useState(stack[0].name);
    const [position, setPosition] = useState(positions[0]);
    const [visible, setVisible] = useState(false);

    return (
        <div className="rui-app relative overflow-y pa-0" style={{ minHeight: 400 }}>
            <div className="pa-10" style={{ width: 200 }}>
                <Select
                    items={positions}
                    prefix={<Icon name="book-open"/>}
                    color="primary"
                    className="my-0"
                    value={position}
                    onChange={v => setPosition(v)}/>
                <Button 
                    name="Toggle drawer"
                    color="primary"
                    block
                    className="my-10 mx-0"
                    onClick={() => setVisible(!visible)}/>
            </div>
            <Drawer
                drawer={visible}
                absolute
                position={position}
                onClose={() => setVisible(false)}
                header={<div className="row align-center"><Icon name="react" className="mr-5"/> Drawer Header</div>}>
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
            </Drawer>
        </div>
    )
)`

const positions = ['default', 'top', 'bottom', 'right'];
const keys = ['property', 'description', 'default', 'type', 'value'];
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
    const parent = useRef();
    const api = useRef();
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [page, setPage] = useState(stack[0].name);
    const [position, setPosition] = useState(positions[0]);
    const [visible, setVisible] = useState(false);

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="row">
                    <div className="rui-page-title">{'<Drawer/>'} Component</div>
                    <Badge 
                        color="error" 
                        value="WIP"
                        className="ml-10"
                        parent={<Icon name="wrench" size={20}/>}/>
                </div>
                <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
            </div>
            <Card outlined title="Usage">
                <div className="rui-app relative pa-0" style={{ minHeight: 260 }}>
                    <Drawer
                        drawer={drawer}
                        min={drawerMin}
                        onClose={() => setDrawer(false)}
                        header={drawerMin ? <Icon name="react" /> : 'Drawer'}
                        collapsable
                        headerCentered
                        onResize={() => setDrawerMin(!drawerMin)}>
                        <List size="medium">
                            {stack.map(({name, icon}, index) => 
                                <ListItem
                                    key={index}
                                    isActiveItem={name === page}
                                    noDivider
                                    hover
                                    item={drawerMin ? '' : name}
                                    icon={icon}
                                    tooltip={name}
                                    tooltipPosition="right"/>
                            )}
                        </List>
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
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>} 
                    contentStyles={{ padding: 0 }}
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Drawer positions">
                <div className="rui-app relative overflow-y pa-0" style={{ minHeight: 400 }}>
                    <div className="pa-10" style={{ width: 200 }}>
                        <Select
                            items={positions}
                            prefix={<Icon name="book-open"/>}
                            color="primary"
                            className="my-0"
                            value={position}
                            onChange={v => setPosition(v)}/>
                        <Button 
                            name="Toggle drawer"
                            color="primary"
                            block
                            className="my-10 mx-0"
                            onClick={() => setVisible(!visible)}/>
                    </div>
                    <Drawer
                        drawer={visible}
                        absolute
                        position={position}
                        onClose={() => setVisible(false)}
                        header={<div className="row align-center"><Icon name="react" className="mr-5"/> Drawer Header</div>}>
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
                    </Drawer>
                </div>
                <Collapse 
                    icon="code"
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usagePositions} className="mr-10"/>} 
                    contentStyles={{ padding: 0 }}
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usagePositions}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <h2 ref={api}>API</h2>
            <BackTopBtn setRef={parent} size="medium" dark/>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default DrawerPage;