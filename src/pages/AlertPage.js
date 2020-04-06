import React, { useState } from 'react';
import { Alert, Collapse, Table, CopyToClipboard, Card, Select, Icon, Switch, ThemeContext } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
const statuses = ['info', 'success', 'error', 'warning'];

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'message', 
        description: 'Set Alert message',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'text', 
        description: 'Set Alert description text',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'status', 
        description: 'Set Alert status',
        default: '', 
        type: 'string',
        value: 'info | success | error | warning'
    },
    { 
        property: 'visible', 
        description: 'Set Alert state',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClose', 
        description: 'Invokes on click close icon',
        default: '', 
        type: 'function',
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

const usage =
`// Usage example
import React, { useState } from 'react';
import { Alert, Select, Icon, Switch } from '../components';
const statuses = ['info', 'success', 'error', 'warning'];

function Example() {
    const [status, setStatus] = useState('info');
    const [visible, setVisible] = useState(true);
    const message = 'Alert title';
    const text = 'Alert description text';

    return (
        <>
            <Select
                items={statuses}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Alert status"
                color="primary"
                className="my-10"
                value={status}
                onChange={v => setStatus(v)}/>
            <br/>
            <Switch
                color="primary"
                check={visible}
                leftLabel="Close"
                className="mt-10 mb-20"
                rightLabel="Open"
                onChange={() => setVisible(!visible)}
                />
            <br/>
            <Alert
                visible={visible} 
                message={message} 
                text={text}
                onClose={() => setVisible(false)}
                status={status}/>
        </>
    )
}`

const AlertPage = () => {
    const [status, setStatus] = useState('info');
    const [visible, setVisible] = useState(true);
    const message = 'Alert title';
    const text = 'Alert description text';

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Alert/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={statuses}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Alert status"
                            color="primary"
                            className="my-10"
                            value={status}
                            onChange={v => setStatus(v)}/>
                        <br/>
                        <Switch
                            color="primary"
                            check={visible}
                            leftLabel="Close"
                            className="mt-10 mb-20"
                            rightLabel="Open"
                            onChange={() => setVisible(!visible)}
                            />
                        <br/>
                        <Alert
                            visible={visible} 
                            message={message} 
                            text={text}
                            onClose={() => setVisible(false)}
                            status={status}/>
                        <Collapse
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>}  
                            icon="code" 
                            dark={theme}
                            iconSize={18} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? tomorrow : coy}>
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
                        index
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default AlertPage;