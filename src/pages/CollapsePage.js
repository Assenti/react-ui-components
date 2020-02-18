import React from 'react';
import { Card, Collapse, Table } from '../components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

    const usage = 
`// Usage examples
import React from 'react';
import { Collapse } from '@assenti/react-ui-components';

function Example() {
    return (
        <div>
            <Collapse defaultState={true}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Collapse>
        </div>
    )
}
`
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
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

export const CollapsePage = () => {
    return (
        <div className="page">
            <div className="row align-center space-between">
                <div className="page-title">Collapse Component</div>
                <a href="#collapse-api" className="fz-13 fw-bold">API</a>
            </div>
            <Card outlined color="primary" title="Collapse Component usage">
                <Collapse defaultState={true} border>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Collapse>
                <br/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <h2 id="collapse-api">API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
