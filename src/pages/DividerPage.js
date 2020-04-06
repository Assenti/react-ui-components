import React, { useState } from 'react';
import { Card, Collapse, Table, CopyToClipboard, Select, Icon, Avatar, Divider, ThemeContext } from '../components';
import manImage from '../img/man.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'color', 
        description: 'Set divider color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | secondary'
    },
    { 
        property: 'dark', 
        description: 'Set dark theme', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'vertical', 
        description: 'Set vertical divider', 
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
const colors = ['primary', 'info', 'success', 'error', 'secondary'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Divider } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <div className="row align-center">
                <Avatar img={manImage}/>
                <Divider vertical/>
                <strong className="text-primary">John Doe</strong>
            </div>
            <Divider/>
            <p>Age: 33</p>
            <p>Birth date: 1987/1/1</p>
            <p>Address: 13, Friday str., NYC</p>
        </>
    )
}`

const DividerPage = () => {
    const [color, setColor] = useState(colors[4]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Divider/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Color"
                            color="primary"
                            value={color}
                            className="mb-20"
                            onChange={v => setColor(v)}/>
                        <br/>
                        <div className="row align-center">
                            <Avatar img={manImage} dark={theme}/>
                            <Divider vertical />
                            <strong className="text-primary">John Doe</strong>
                        </div>
                        <Divider color={color}/>
                        <p>Age: 33</p>
                        <p>Birth date: 1987/1/1</p>
                        <p>Address: 13, Friday str., NYC</p>
                        <Collapse 
                            icon="code" 
                            dark={theme}
                            iconSize={18}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default DividerPage;