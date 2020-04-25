import React, { useState } from 'react';
import { Alert, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';
const statuses = ['info', 'success', 'error', 'warning'];

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
                <Page 
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Alert/>">
                    <Select
                        items={statuses}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Alert status"
                        color="primary"
                        className="mb-10"
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
                    <Divider/>
                    <br/>
                    <Alert
                        visible={visible} 
                        message={message} 
                        text={text}
                        onClose={() => setVisible(false)}
                        status={status}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default AlertPage;