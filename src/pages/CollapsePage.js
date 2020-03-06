import React, { createRef } from 'react';
import { Card, Collapse, Table, List, ListItem, Icon, Badge, CopyToClipboard } from '../components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage = 
`// Usage examples
import React from 'react';
import { Collapse, List, ListItem } from '@assenti/react-ui-components';

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }
];

function Example() {
    return (
        <div>
            <Collapse defaultState={true} border>
                <p className="px-10 fz-9 fw-bold">Some Article</p>
                <p className="pa-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Collapse>
            <br/>
            <Collapse 
                title={<span className="mx-10 fz-10 fw-bold">Marvel Avengers</span>}
                defaultState={true} 
                border 
                tooltip="Expand/Collapse">
                <List 
                    size="medium"
                    hover>
                    {names.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item.hero}
                            icon={item.icon}
                            hover/>
                    )}
                </List>
            </Collapse>
        </div>
    )
}`
const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'defaultState',
        description: 'Set default state of collapse', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'border',
        description: 'Set border and highlight trigger area', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'title',
        description: 'Set collapse title', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'icon',
        description: 'Set icon from icons list', 
        default: 'chevron-down', 
        type: 'string',
        value: ''
    },
    { 
        property: 'iconPosition', 
        description: 'Set collapse icon position', 
        default: 'right', 
        type: 'string',
        value: 'right | left'
    },
    { 
        property: 'iconColor',
        description: 'Set icon color', 
        default: 'gray', 
        type: 'string',
        value: ''
    },
    { 
        property: 'iconSize',
        description: 'Set icon size', 
        default: '24px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'extra',
        description: 'Set extra', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }
];

const CollapsePage = () => {
    const api = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavoir: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page">
            <div className="row align-center space-between">
                <div className="row">
                    <div className="rui-page-title">Collapse Component</div>
                    <Badge 
                        color="error" 
                        value="WIP"
                        className="ml-10"
                        parent={<Icon name="wrench" size={20}/>}/>
                </div>
                <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
            </div>
            <Card outlined title="Collapse Component usage">
                <Collapse defaultState={true} border>
                    <p className="px-10 fz-9 fw-bold">Some Article</p>
                    <p className="pa-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Collapse>
                <br/>
                <Collapse 
                    title={<span className="mx-10 fz-10 fw-bold">Marvel Avengers</span>}
                    defaultState={true} 
                    border 
                    tooltip="Expand/Collapse">
                    <List 
                        size="medium"
                        hover>
                        {names.map((item, index) => 
                            <ListItem 
                                key={index} 
                                item={item.hero}
                                icon={item.icon}
                                hover/>
                        )}
                    </List>
                </Collapse>
                <br/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>} 
                    contentStyles={{ padding: 0 }}
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default CollapsePage;
