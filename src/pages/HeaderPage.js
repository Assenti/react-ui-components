import React from 'react';
import { Header, Card, Table, Button, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'title',
        description: 'Set Header title', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'height',
        description: 'Set Header height', 
        default: '50px', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'color',
        description: 'Set Header background color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | info'
    },
    { 
        property: 'sticky',
        description: 'Set Header position sticky', 
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
        property: 'leftControl', 
        description: 'Set control button on left side', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'leftControlIcon', 
        description: 'Set control button icon (see icons list)', 
        default: 'menu', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onLeftControl', 
        description: 'Invokes on left control click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'rightSide',
        description: 'Set right side elements', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'smooth',
        description: 'Make header borders smooth', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage = 
`// Usage examples
import React from 'react';
import { Header, Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <div>
            <Header title="Header light" leftControl/>
            <br/>
            <Header dark title="Header dark" leftControl/>
            <br/>
            <Header 
                dark
                smooth 
                title="Header dark" 
                leftControl
                rightSide={
                    <Button icon="account" dark/>
                }/>
            <br/>
            <Header 
                smooth
                color="primary"
                title="Header with primary background" 
                leftControl/>
        </div>
    )
}`

const HeaderPage = () => {
    return (
        <div className="rui-page">
            <div className="row align-center space-between">
                <div className="rui-page-title">Header Component</div>
            </div>
            <Card outlined title="Header usage">
                <Header title="Header light" leftControl/>
                <br/>
                <Header dark title="Header dark" leftControl/>
                <br/>
                <Header 
                    dark
                    smooth 
                    title="Header dark" 
                    leftControl
                    rightSide={
                        <Button icon="account" dark/>
                    }/>
                <br/>
                <Header 
                    smooth
                    color="primary"
                    title="Header with primary background" 
                    leftControl/>
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

export default HeaderPage;
